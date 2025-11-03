"use client";
import Link from "next/link";

import React, { useEffect, useState } from "react";
import { fetchProducts } from "@/utils/services";
import Loader from "@/components/Globloader";


const Shop = () => {
	const [productList, setProductList] = useState([]);
	// console.log(productList.products);

	useEffect(() => {

		const getProducts = async () => {
			const data = await fetchProducts();
			setProductList(data);
		}
		getProducts();


	}, []);



	return (
		<>

			{/* <!-- Start Hero Section --> */}
			<div className="hero">
				<div className="container">
					<div className="row justify-content-between">
						<div className="col-lg-5">
							<div className="intro-excerpt">
								<h1>Shop</h1>
							</div>
						</div>
						<div className="col-lg-7"></div>
					</div>
				</div>
			</div>
			{/* <!-- End Hero Section --> */}

			<div className="untree_co-section product-section before-footer-section">
				<div className="container">
					<div className="row">
						{/* <!-- Start Column 1 --> */}

						{productList.products?.map((item, index) => (
							<div key={index} className="col-lg-2 col-md-4 col-sm-6 mb-5">
								<Link href={`/description?id=${item.id}`} className="product-item">
									<img
										src={item.images}
										className="img-fluid product-thumbnail"
										alt={item.title}
									/>
									<h3 className="product-title">{item.title}</h3>
									<strong className="product-price">${item.price}</strong>

									<br />
									<button className="btn mt-4 text-white p-2" style={{ backgroundColor: "#3b5d50", borderRadius: "30px" }}>See Details</button>
								</Link>
							</div>
						))}

					</div>
				</div>
			</div>

		</>
	);
};

export default Shop;
