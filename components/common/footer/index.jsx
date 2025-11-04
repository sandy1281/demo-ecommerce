import React from "react";
import Link from "next/link";

const Footer = () => {
	const currentYear = new Date().getFullYear();

	return (
		<footer className="footer-section">
			<div className="container relative">
				<div className="sofa-img">
					{/* ✅ Images must be inside /public/images */}
					{/* <img src="/images/sofa.png" alt="Image" className="img-fluid" /> */}
				</div>

				{/* Newsletter section */}
				<div className="row">
					<div className="col-lg-8">
						<div className="subscription-form">
							<h3 className="d-flex align-items-center">
								<span className="me-1">
									<img
										src="/images/envelope-outline.svg"
										alt="Envelope Icon"
										className="img-fluid"
									/>
								</span>
								<span>Subscribe to Newsletter</span>
							</h3>

							<form action="#" className="row g-3">
								<div className="col-auto">
									<input
										type="text"
										className="form-control"
										placeholder="Enter your name"
									/>
								</div>
								<div className="col-auto">
									<input
										type="email"
										className="form-control"
										placeholder="Enter your email"
									/>
								</div>
								<div className="col-auto">
									<button className="btn btn-primary ">
										<span><i className="fa-solid fa-paper-plane me-2"></i></span>
									</button>
								</div>
							</form>
						</div>
					</div>
				</div>

				{/* Footer links */}
				<div className="row g-5 mb-5">
					<div className="col-lg-4">
						<div className="mb-4 footer-logo-wrap px-3">
							<Link href="/" className="footer-logo">
								Furni<span>.</span>
							</Link>
						</div>
						<p className="mb-4 px-3">
							Donec facilisis quam ut purus rutrum lobortis. Donec vitae odio
							quis nisl dapibus malesuada. Nullam ac aliquet velit. Aliquam
							vulputate velit imperdiet dolor tempor tristique. Pellentesque
							habitant
						</p>

						<ul className="list-unstyled custom-social px-3">
							<li>
								<a href="#"><span className="fa fa-brands fa-facebook-f"></span></a>
							</li>
							<li>
								<a href="#"><span className="fa fa-brands fa-twitter"></span></a>
							</li>
							<li>
								<a href="#"><span className="fa fa-brands fa-instagram"></span></a>
							</li>
							<li>
								<a href="#"><span className="fa fa-brands fa-linkedin"></span></a>
							</li>
						</ul>
					</div>

					<div className="col-lg-8 px-5">
						<div className="row links-wrap">
							<div className="col-6 col-sm-6 col-md-3">
								<ul className="list-unstyled">
									<li><Link href="/aboutus">About us</Link></li>
									<li><Link href="/services">Services</Link></li>
									<li><Link href="/blogs">Blog</Link></li>
									<li><Link href="/contactus">Contact us</Link></li>
								</ul>
							</div>

							<div className="col-6 col-sm-6 col-md-3">
								<ul className="list-unstyled">
									<li><a href="#">Support</a></li>
									<li><a href="#">Knowledge base</a></li>
									<li><a href="#">Live chat</a></li>
								</ul>
							</div>

							<div className="col-6 col-sm-6 col-md-3">
								<ul className="list-unstyled">
									<li><a href="#">Jobs</a></li>
									<li><a href="#">Our team</a></li>
									<li><a href="#">Leadership</a></li>
									<li><a href="#">Privacy Policy</a></li>
								</ul>
							</div>

							<div className="col-6 col-sm-6 col-md-3">
								<ul className="list-unstyled">
									<li><a href="#">Nordic Chair</a></li>
									<li><a href="#">Kruzo Aero</a></li>
									<li><a href="#">Ergonomic Chair</a></li>
								</ul>
							</div>
						</div>
					</div>
				</div>

				{/* Copyright */}
				<div className="border-top copyright px-3">
					<div className="row pt-4">
						<div className="col-lg-6">
							<p className="mb-2 text-center text-lg-start">
								Copyright &copy; {currentYear}. All Rights Reserved. — Designed
								with ❤️ by{" "}
								<a href="https://untree.co" target="_blank" rel="noopener noreferrer">
									Untree.co
								</a>{" "}
								| Distributed by{" "}
								<a href="https://themewagon.com" target="_blank" rel="noopener noreferrer">
									ThemeWagon
								</a>
							</p>
						</div>

						<div className="col-lg-6 text-center text-lg-end">
							<ul className="list-unstyled d-inline-flex ms-auto">
								<li className="me-4">
									<a href="#">Terms &amp; Conditions</a>
								</li>
								<li>
									<a href="#">Privacy Policy</a>
								</li>
							</ul>
						</div>
					</div>
				</div>
			</div>
		</footer>
	);
};

export default Footer;
