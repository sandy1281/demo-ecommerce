"use client";

import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useRouter } from "next/navigation";
import { saveAddress } from "@/redux/addressSlice";
import { getCookie } from "@/utils/helpers"; 

const Checkout = () => {

    const router = useRouter();

    useEffect(() => {
        const token = getCookie("accessToken");
        if (!token) {
            router.push("/login?redirect=checkout");
        }
    }, [router]);

    const dispatch = useDispatch();

    const [formData, setFormData] = useState({
        firstName: "",
        lastName: "",
        address: "",
        state: "",
        zip: "",
        email: "",
        phone: "",
    });

    const [errors, setErrors] = useState({}); // ✅ Tracks errors

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const validateForm = () => {
        let temp = {};

        if (!formData.firstName.trim()) temp.firstName = "First Name is required";
        if (!formData.lastName.trim()) temp.lastName = "Last Name is required";
        if (!formData.address.trim()) temp.address = "Address is required";
        if (!formData.state.trim()) temp.state = "State is required";
        // if (!formData.zip.trim()) temp.zip = "Postal/Zip is required";
        if (!formData.email.trim()) temp.email = "Email is required";
        if (!formData.phone.trim()) temp.phone = "Phone number is required";

        setErrors(temp);
        return Object.keys(temp).length === 0;
    };

    const handleSubmit = () => {
        if (validateForm()) {
            dispatch(saveAddress(formData));
            router.push("/thanks")
        }
    };



    // ✅ Get cart data from Redux
    const cartItems = useSelector((state) => state.cart.cartItems || []);

    // ✅ Calculate total
    const subtotal = cartItems.reduce(
        (sum, item) => sum + item.price * item.quantity,
        0
    );



    return (
        <>
            <div className="hero">
                <div className="container">
                    <div className="row justify-content-between">
                        <div className="col-lg-5">
                            <div className="intro-excerpt">
                                <h1>Checkout</h1>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className="untree_co-section">
                <div className="container">
                    <div className="row">


                        {/* LEFT SIDE FORM */}
                        <div className="col-md-6 mb-5">
                            <h2 className="h3 mb-3 text-black">Billing Details</h2>
                            <div className="p-3 p-lg-5 border bg-white">
                                <div className="form-group">
                                    <label htmlFor="c_country" className="text-black">
                                        Country <span className="text-danger">*</span>
                                    </label>
                                    <select id="c_country" className="form-control">
                                        <option value="1">Select a country</option>
                                        <option value="2">Bangladesh</option>
                                        <option value="3">Algeria</option>
                                        <option value="4">Afghanistan</option>
                                        <option value="5">Ghana</option>
                                        <option value="6">Albania</option>
                                        <option value="7">Bahrain</option>
                                        <option value="8">Colombia</option>
                                        <option value="9">Dominican Republic</option>
                                    </select>
                                </div>

                                <div className="form-group row">
                                    <div className="col-md-6">
                                        <label htmlFor="c_fname" className="text-black">
                                            First Name <span className="text-danger">*</span>
                                        </label>
                                        <input
                                            type="text"
                                            className="form-control"
                                            name="firstName"
                                            value={formData.firstName}
                                            onChange={handleChange}
                                        />
                                        {errors.firstName && <span className="text-danger">{errors.firstName}</span>}

                                    </div>
                                    <div className="col-md-6">
                                        <label htmlFor="c_lname" className="text-black">
                                            Last Name <span className="text-danger">*</span>
                                        </label>
                                        <input
                                            type="text"
                                            className="form-control"
                                            name="lastName"
                                            value={formData.lastName}
                                            onChange={handleChange}
                                        />
                                        {errors.lastName && <span className="text-danger">{errors.lastName}</span>}
                                    </div>
                                </div>

                                <div className="form-group row">
                                    <div className="col-md-12">
                                        <label htmlFor="c_companyname" className="text-black">
                                            Company Name
                                        </label>
                                        <input
                                            type="text"
                                            className="form-control"
                                            id="c_companyname"
                                            name="c_companyname"
                                        />
                                    </div>
                                </div>

                                <div className="form-group row">
                                    <div className="col-md-12">
                                        <label htmlFor="c_address" className="text-black">
                                            Address <span className="text-danger">*</span>
                                        </label>
                                        <input
                                            type="text"
                                            className="form-control"
                                            name="address"
                                            value={formData.address}
                                            onChange={(e) =>
                                                setFormData({ ...formData, address: e.target.value })
                                            }
                                        />
                                        {errors.address && <span className="text-danger">{errors.address}</span>}
                                    </div>
                                </div>

                                <div className="form-group mt-3">
                                    <input
                                        type="text"
                                        className="form-control"
                                        placeholder="Apartment, suite, unit etc. (optional)"
                                    />
                                </div>

                                <div className="form-group row">
                                    <div className="col-md-6">
                                        <label htmlFor="c_state_country" className="text-black">
                                            State / Country <span className="text-danger">*</span>
                                        </label>
                                        <input
                                            type="text"
                                            className="form-control"
                                            name="state"
                                            value={formData.state}
                                            onChange={handleChange}
                                        />
                                        {errors.state && <span className="text-danger">{errors.state}</span>}
                                    </div>
                                    <div className="col-md-6">
                                        <label htmlFor="c_postal_zip" className="text-black">
                                            Postal / Zip <span className="text-danger">*</span>
                                        </label>
                                        <input
                                            type="text"
                                            className="form-control"
                                            name="zip"
                                            value={formData.zip}
                                            onChange={(e) =>
                                                setFormData({ ...formData, pincode: e.target.value })
                                            }
                                        />
                                        {errors.zip && <span className="text-danger">{errors.zip}</span>}
                                    </div>
                                </div>

                                <div className="form-group row mb-5">
                                    <div className="col-md-6">
                                        <label htmlFor="c_email_address" className="text-black">
                                            Email Address <span className="text-danger">*</span>
                                        </label>
                                        <input
                                            type="text"
                                            className="form-control"
                                            name="email"
                                            value={formData.email}
                                            onChange={handleChange}
                                        />
                                        {errors.email && <span className="text-danger">{errors.email}</span>}
                                    </div>
                                    <div className="col-md-6">
                                        <label htmlFor="c_phone" className="text-black">
                                            Phone <span className="text-danger">*</span>
                                        </label>
                                        <input
                                            type="text"
                                            className="form-control"
                                            name="phone"
                                            value={formData.phone}
                                            onChange={handleChange}
                                        />
                                        {errors.phone && <span className="text-danger">{errors.phone}</span>}
                                    </div>
                                </div>

                                <div className="form-group">
                                    <label
                                        htmlFor="c_create_account"
                                        className="text-black"
                                        data-bs-toggle="collapse"
                                        href="#create_an_account"
                                        role="button"
                                        aria-expanded="false"
                                        aria-controls="create_an_account"
                                    >
                                        <input type="checkbox" value="1" id="c_create_account" />{" "}
                                        Create an account?
                                    </label>
                                    <div className="collapse" id="create_an_account">
                                        <div className="py-2 mb-4">
                                            <p className="mb-3">
                                                Create an account by entering the information below. If
                                                you are a returning customer please login at the top of
                                                the page.
                                            </p>
                                            <div className="form-group">
                                                <label
                                                    htmlFor="c_account_password"
                                                    className="text-black"
                                                >
                                                    Account Password
                                                </label>
                                                <input
                                                    type="email"
                                                    className="form-control"
                                                    id="c_account_password"
                                                    name="c_account_password"
                                                    placeholder=""
                                                />
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                <div className="form-group">
                                    <label
                                        htmlFor="c_order_notes"
                                        className="text-black"
                                    >
                                        Order Notes
                                    </label>
                                    <textarea
                                        name="c_order_notes"
                                        id="c_order_notes"
                                        cols="30"
                                        rows="5"
                                        className="form-control"
                                        placeholder="Write your notes here..."
                                    ></textarea>
                                </div>
                            </div>
                        </div>

                        {/* ✅ RIGHT SIDE ORDER SUMMARY */}
                        <div className="col-md-6 mb-5">
                            <h2 className="h3 mb-3 text-black">Your Order</h2>
                            <div className="p-3 p-lg-5 border bg-white">
                                <table className="table site-block-order-table mb-5">
                                    <thead>
                                        <tr>
                                            <th>Product</th>
                                            <th>Total</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        {cartItems.map((item) => (
                                            <tr key={item.id}>
                                                <td>
                                                    {item.title} <strong className="mx-2">x</strong> {item.quantity}
                                                </td>
                                                <td>${(item.price * item.quantity).toFixed(2)}</td>
                                            </tr>
                                        ))}

                                        <tr>
                                            <td className="text-black font-weight-bold">
                                                <strong>Cart Subtotal</strong>
                                            </td>
                                            <td className="text-black">
                                                ${subtotal.toFixed(2)}
                                            </td>
                                        </tr>

                                        <tr>
                                            <td className="text-black font-weight-bold">
                                                <strong>Order Total</strong>
                                            </td>
                                            <td className="text-black font-weight-bold">
                                                <strong>${subtotal.toFixed(2)}</strong>
                                            </td>
                                        </tr>
                                    </tbody>
                                </table>

                                <button
                                    className="btn btn-primary btn-lg w-100"
                                    onClick={handleSubmit}
                                >
                                    Place Order
                                </button>
                            </div>
                        </div>

                    </div>



                </div>
            </div>

        </>
    );
};

export default Checkout;
