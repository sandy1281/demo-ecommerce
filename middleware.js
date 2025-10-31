import { NextResponse } from "next/server";

export async function middleware(request) {
    const accessToken = request.cookies.get("accessToken")?.value;
    const refreshToken = request.cookies.get("refreshToken")?.value;

    const protectedPaths = ["/checkout"];
    const currentPath = request.nextUrl.pathname;

    if (protectedPaths.includes(currentPath)) {
        if (accessToken) {
            return NextResponse.next();
        }

        if (!accessToken && refreshToken) {
            try {
                const response = await fetch(
                    `${process.env.NEXT_PUBLIC_API_URL}/refresh-token`,
                    {
                        method: "POST",
                        headers: { "Content-Type": "application/json" },
                        body: JSON.stringify({ refreshToken }),
                    }
                );

                if (response.ok) {
                    const data = await response.json();
                    const res = NextResponse.next();

                    res.cookies.set("accessToken", data.accessToken, {
                        path: "/",
                        httpOnly: true,
                        sameSite: "strict",
                    });

                    return res;
                }
            } catch (error) {
                console.log("Refresh failed:", error);
            }
        }

        // ✅ Redirect to login with redirect param
        return NextResponse.redirect(
            new URL(`/login?redirect=${currentPath}`, request.url)
        );
    }

    return NextResponse.next();
}

export const config = {
    matcher: ["/checkout"],
};
