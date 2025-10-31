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
    <nav className="custom-navbar navbar navbar-expand-md fixed-top" aria-label="Furni navigation bar">
      <div className="container">
        {/* ✅ Link uses href, not to */}
        <Link href="/" className="navbar-brand text-white fw-bold">
          Furni<span>.</span>
        </Link>

        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarsFurni"
          aria-controls="navbarsFurni"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse" id="navbarsFurni">
          <ul className="custom-navbar-nav navbar-nav ms-auto mb-2 mb-md-0">
            <li className="nav-item"><Link href="home" className="nav-link text-white">Home</Link></li>
            <li><Link href="/shop" className="nav-link text-white">Shop</Link></li>
            <li><Link href="/aboutus" className="nav-link text-white">About us</Link></li>
            <li><Link href="/services" className="nav-link text-white">Services</Link></li>
            <li><Link href="/contactus" className="nav-link text-white">Contact us</Link></li>

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
          </ul>

          <ul className="custom-navbar-cta navbar-nav mb-2 mb-md-0 ms-5">
            <li className="position-relative">
              <Link href="/cart" className="nav-link">
                <img src="/images/cart.svg" alt="Cart" />
                   

                
                  <span style={{
                      position: "absolute",
                      top: "-5px",
                      right: "-10px",
                      background: "red",
                      color: "white",
                      fontWeight:"700",
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
