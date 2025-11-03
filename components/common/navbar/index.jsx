"use client";

import React from 'react';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
// import './navbar.module.css'
import { clearAuthCookies } from '@/utils/helpers';
import { useAuth } from '@/app/AuthContext';
import { useSelector } from 'react-redux';


const Navbar = () => {

  const cartItems = useSelector((state) => state.cart.cartItems);
  const cartCount = cartItems?.reduce((sum, item) => sum + item.quantity, 0) || 0;


  const router = useRouter();
  const { isAuthorized, setIsAuthorized, user, setUser } = useAuth();

  const handleLogout = () => {
    clearAuthCookies();
    localStorage.removeItem('user');
    setIsAuthorized(false);
    setUser(null);
    router.push('/home');
  };
return (
    <nav className="navbar navbar-expand-lg fixed-top" aria-label="Furni navigation bar">
      <div className="container">
        {/* ✅ Link uses href, not to */}
        <Link href="/" className="navbar-brand text-white fw-bold">
          Furni.
        </Link>

        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarScroll" aria-controls="navbarScroll" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse " id="navbarScroll">
          <ul className="navbar-nav ms-auto my- 2 my-lg-0 navbar-nav-scroll justify-content-end gap-4 me-4" style={{ "--bs-scroll-height": "auto" }}
          >
            <li><Link href="home" className="nav-link text-white">Home</Link></li>
            <li><Link href="/shop" className="nav-link text-white">Shop</Link></li>
            <li><Link href="/aboutus" className="nav-link text-white">About us</Link></li>
            <li><Link href="/services" className="nav-link text-white">Services</Link></li>
            <li><Link href="/contactus" className="nav-link text-white" >Contact us</Link></li>

            {user && (
              <li className="nav-link">
                <p style={{ color: 'white' }}>Hello : {user.username}</p>
              </li>
            )}

            {isAuthorized ? (
              <button className="btnn" onClick={handleLogout}>Logout</button>
            ) : (
              <Link href="/login">
                <button className='btn'><img src="images/user.svg" /></button>
              </Link>
            )}


            <li className="position-relative">
              <Link href="/cart" className="nav-link">
                <img src="/images/cart.svg" alt="Cart" />



                <span style={{
                  position: "absolute",
                  top: "-5px",
                  right: "-10px",
                  background: "red",
                  color: "white",
                  fontWeight: "700",
                  borderRadius: "100%",
                  padding: "2px 6px",
                  fontSize: "12px",
                }} >
                  {cartCount}
                </span>

              </Link>
            </li>
          </ul>


        </div>
      </div>
    </nav>

  );
};

export default Navbar;
