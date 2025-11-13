"use client";

import React, { useEffect } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import "./Navbar.module.css";
import { clearAuthCookies } from "@/utils/helpers";
import { useAuth } from "@/app/AuthContext";
import { useSelector } from "react-redux";

const Navbar = () => {
  const cartItems = useSelector((state) => state.cart.cartItems);
  const cartCount = cartItems?.reduce((sum, item) => sum + item.quantity, 0) || 0;

  const router = useRouter();
  const { isAuthorized, setIsAuthorized, user, setUser } = useAuth();

  //  Function to close navbar on link click
  const closeNavbar = () => {
    const navbarCollapse = document.getElementById("navbarScroll");
    if (navbarCollapse && navbarCollapse.classList.contains("show")) {
      navbarCollapse.classList.remove("show");
    }
  };

  const handleLogout = () => {
    clearAuthCookies();
    localStorage.removeItem("user");
    setIsAuthorized(false);
    setUser(null);
    router.push("/home");
    closeNavbar(); //  
  };

  return (
    <nav className="navbar navbar-expand-lg fixed-top" aria-label="Furni navigation bar">
      <div className="container">
        <Link href="/" className="navbar-brand text-white fw-bold" onClick={closeNavbar}>
          Happy Cart
        </Link>

        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarScroll"
          aria-controls="navbarScroll"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse" id="navbarScroll">
          <ul className="navbar-nav ms-auto my-2 my-lg-0 navbar-nav-scroll justify-content-end gap-2 mt-4 me-4">
            <li><Link href="/home" className="nav-link text-white" onClick={closeNavbar}>Home</Link></li>
            <li><Link href="/shop" className="nav-link text-white" onClick={closeNavbar}>Shop</Link></li>
            <li><Link href="/aboutus" className="nav-link text-white" onClick={closeNavbar}>About us</Link></li>
            <li><Link href="/services" className="nav-link text-white" onClick={closeNavbar}>Services</Link></li>
            <li><Link href="/contactus" className="nav-link text-white" onClick={closeNavbar}>Contact us</Link></li>

            {user && (
              <li className="nav-link">
                <p style={{ color: "white" }}>Hello: {user.username}</p>
              </li>
            )}

            <div className="d-flex align-items-center gap-3 mt-2 mt-lg-0">
              {isAuthorized ? (
                <button className="btnn" onClick={handleLogout}>
                  Logout
                </button>
              ) : (
                <Link href="/login" onClick={closeNavbar}>
                  <button className="btn">
                    <img src="/images/user.svg" alt="User" />
                  </button>
                </Link>
              )}

              <li className="position-relative list-unstyled">
                <Link href="/cart" className="nav-link p-0" onClick={closeNavbar}>
                  <img src="/images/cart.svg" alt="Cart" width="25" height="25" />
                  <span
                    style={{
                      position: "absolute",
                      top: "-5px",
                      right: "-8px",
                      background: "red",
                      color: "white",
                      fontWeight: "700",
                      borderRadius: "50%",
                      padding: "2px 6px",
                      fontSize: "12px",
                    }}
                  >
                    {cartCount}
                  </span>
                </Link>
              </li>
            </div>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
