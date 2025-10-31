"use client";

import React from 'react';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import styles from './navbar.module.css';
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
    <nav className={`${styles.customNavbar} navbar navbar-expand-md fixed-top`} aria-label="Furni navigation bar">
      <div className="container">
        <Link href="/" className={`navbar-brand text-white fw-bold ${styles.brand}`}>
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
          <ul className={`navbar-nav ms-auto mb-2 mb-md-0 ${styles.navList}`}>
            <li><Link href="/home" className={`nav-link text-white ${styles.link}`}>Home</Link></li>
            <li><Link href="/shop" className={`nav-link text-white ${styles.link}`}>Shop</Link></li>
            <li><Link href="/aboutus" className={`nav-link text-white ${styles.link}`}>About us</Link></li>
            <li><Link href="/services" className={`nav-link text-white ${styles.link}`}>Services</Link></li>
            <li><Link href="/contactus" className={`nav-link text-white ${styles.link}`}>Contact us</Link></li>

            {user && (
              <li className={`nav-link ${styles.userText}`}>
                <p>Hello : {user.username}</p>
              </li>
            )}

            {isAuthorized ? (
              <button className={styles.logoutBtn} onClick={handleLogout}>Logout</button>
            ) : (
              <Link href="/login">
                <button className={styles.loginBtn}>
                  <img src="/images/user.svg" alt="User" />
                </button>
              </Link>
            )}
          </ul>

          <ul className={`navbar-nav mb-2 mb-md-0 ms-5 ${styles.cartContainer}`}>
            <li className="position-relative">
              <Link href="/cart" className="nav-link position-relative">
                <img src="/images/cart.svg" alt="Cart" />
                {cartCount > 0 && (
                  <span className={styles.cartCount}>{cartCount}</span>
                )}
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
