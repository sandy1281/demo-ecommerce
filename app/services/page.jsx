import Link from 'next/link'
import React from 'react'

const Services = () => {
    return (
        <>
            {/* <!-- Start Hero Section --> */}
            <div className="hero">
                <div className="container">
                    <div className="row justify-content-between">
                        <div className="col-lg-5">
                            <div className="intro-excerpt">
                                <h1>Services</h1>
                                <p className="mb-4">Donec vitae odio quis nisl dapibus malesuada. Nullam ac aliquet velit. Aliquam vulputate velit imperdiet dolor tempor tristique.</p>
                                <p><Link href="shop" className="btn btn-secondary me-2">Shop Now</Link>
                                    <Link href="services" className="btn btn-white-outline">Explore</Link></p>
                            </div>
                        </div>
                        <div className="col-lg-7">
                            <div className="hero-img-wrap">
                                <img src="images/couch.png" className="img-fluid" />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            {/* <!-- End Hero Section -->



            <!-- Start Why Choose Us Section --> */}
            <div className="why-choose-section">
                <div className="container">


                    <div className="row my-5 px-3">
                        <div className="col-6 col-md-6 col-lg-3 mb-4">
                            <div className="feature">
                                <div className="icon">
                                    <img src="images/truck.svg" alt="Image" className="imf-fluid" />
                                </div>
                                <h3>Fast &amp; Free Shipping</h3>
                                <p>Donec vitae odio quis nisl dapibus malesuada. Nullam ac aliquet velit. Aliquam vulputate.</p>
                            </div>
                        </div>

                        <div className="col-6 col-md-6 col-lg-3 mb-4">
                            <div className="feature">
                                <div className="icon">
                                    <img src="images/bag.svg" alt="Image" className="imf-fluid" />
                                </div>
                                <h3>Easy to Shop</h3>
                                <p>Donec vitae odio quis nisl dapibus malesuada. Nullam ac aliquet velit. Aliquam vulputate.</p>
                            </div>
                        </div>

                        <div className="col-6 col-md-6 col-lg-3 mb-4">
                            <div className="feature">
                                <div className="icon">
                                    <img src="images/support.svg" alt="Image" className="imf-fluid" />
                                </div>
                                <h3>24/7 Support</h3>
                                <p>Donec vitae odio quis nisl dapibus malesuada. Nullam ac aliquet velit. Aliquam vulputate.</p>
                            </div>
                        </div>

                        <div className="col-6 col-md-6 col-lg-3 mb-4">
                            <div className="feature">
                                <div className="icon">
                                    <img src="images/return.svg" alt="Image" className="imf-fluid" />
                                </div>
                                <h3>Hassle Free Returns</h3>
                                <p>Donec vitae odio quis nisl dapibus malesuada. Nullam ac aliquet velit. Aliquam vulputate.</p>
                            </div>
                        </div>

                        <div className="col-6 col-md-6 col-lg-3 mb-4">
                            <div className="feature">
                                <div className="icon">
                                    <img src="images/truck.svg" alt="Image" className="imf-fluid" />
                                </div>
                                <h3>Fast &amp; Free Shipping</h3>
                                <p>Donec vitae odio quis nisl dapibus malesuada. Nullam ac aliquet velit. Aliquam vulputate.</p>
                            </div>
                        </div>

                        <div className="col-6 col-md-6 col-lg-3 mb-4">
                            <div className="feature">
                                <div className="icon">
                                    <img src="images/bag.svg" alt="Image" className="imf-fluid" />
                                </div>
                                <h3>Easy to Shop</h3>
                                <p>Donec vitae odio quis nisl dapibus malesuada. Nullam ac aliquet velit. Aliquam vulputate.</p>
                            </div>
                        </div>

                        <div className="col-6 col-md-6 col-lg-3 mb-4">
                            <div className="feature">
                                <div className="icon">
                                    <img src="images/support.svg" alt="Image" className="imf-fluid" />
                                </div>
                                <h3>24/7 Support</h3>
                                <p>Donec vitae odio quis nisl dapibus malesuada. Nullam ac aliquet velit. Aliquam vulputate.</p>
                            </div>
                        </div>

                        <div className="col-6 col-md-6 col-lg-3 mb-4">
                            <div className="feature">
                                <div className="icon">
                                    <img src="images/return.svg" alt="Image" className="imf-fluid" />
                                </div>
                                <h3>Hassle Free Returns</h3>
                                <p>Donec vitae odio quis nisl dapibus malesuada. Nullam ac aliquet velit. Aliquam vulputate.</p>
                            </div>
                        </div>

                    </div>

                </div>
            </div>
            {/* <!-- End Why Choose Us Section -->

            <!-- Start Product Section --> */}
            <div className="product-section pt-0">
                <div className="container">
                    <div className="row">

                        {/* <!-- Start Column 1 --> */}
                        <div className="col-12">
                            <h2 className="mb-4 section-title">Crafted with excellent material.</h2>
                            <p className="mb-4">Donec vitae odio quis nisl dapibus malesuada. Nullam ac aliquet velit. Aliquam vulputate velit imperdiet dolor tempor tristique. </p>
                            <p><a href="#" className="btn btn-dark ">Explore</a></p>
                        </div>
                        {/* <!-- End Column 1 -->

                        <!-- Start Column 2 --> */}
                        <div className="row">
                            {/* Product 1 */}
                            <div className="col-12 col-md-6 col-lg-4 mb-5">
                                <a className="product-item" href="#">
                                    <img src="images/product-1.png" className="img-fluid product-thumbnail" />
                                    <h3 className="product-title">Nordic Chair</h3>
                                    <strong className="product-price">$50.00</strong>
                                    <span className="icon-cross">
                                        <img src="images/cross.svg" className="img-fluid" />
                                    </span>
                                </a>
                            </div>

                            {/* Product 2 */}
                            <div className="col-12 col-md-6 col-lg-4 mb-5">
                                <a className="product-item" href="#">
                                    <img src="images/product-2.png" className="img-fluid product-thumbnail" />
                                    <h3 className="product-title">Kruzo Aero Chair</h3>
                                    <strong className="product-price">$78.00</strong>
                                    <span className="icon-cross">
                                        <img src="images/cross.svg" className="img-fluid" />
                                    </span>
                                </a>
                            </div>

                            {/* Product 3 */}
                            <div className="col-12 col-md-6 col-lg-4 mb-5">
                                <a className="product-item" href="#">
                                    <img src="images/product-3.png" className="img-fluid product-thumbnail" />
                                    <h3 className="product-title">Ergonomic Chair</h3>
                                    <strong className="product-price">$43.00</strong>
                                    <span className="icon-cross">
                                        <img src="images/cross.svg" className="img-fluid" />
                                    </span>
                                </a>
                            </div>
                        </div>

                        {/* <!-- End Column 4 --> */}

                    </div>
                </div>
            </div>
            {/* <!-- End Product Section --> */}
        </>
    )
}

export default Services
