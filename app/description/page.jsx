"use client";

import { useEffect, useState, Suspense} from "react";
import { useSearchParams } from "next/navigation";
import { fetchSingleProduct } from "@/utils/services";
import { useDispatch } from "react-redux";
import { addToCart } from "@/redux/cartSlice";
import { FUNCTIONS_CONFIG_MANIFEST } from "next/dist/shared/lib/constants";

const DescriptionContent = () => {
    const searchParams = useSearchParams();
    const id = searchParams.get("id");

    const [product, setProduct] = useState(null);
    const [quantity, setQuantity] = useState(1);

    const dispatch = useDispatch(); // ✅ Redux dispatch added

    useEffect(() => {
        const getProduct = async () => {
            const data = await fetchSingleProduct(id);
            setProduct(data);
        };
        if (id) getProduct();
    }, [id]);

    if (!product) return <p className="text-center mt-5">Loading product...</p>;

    const handleAddToCart = () => {
        console.log("quantity",quantity)
        console.log("product",product)
        dispatch(addToCart({ ...product, quantity })); // ✅ Redux action
        alert(`${quantity} x ${product.title} added to cart ✅`);
    };

    const {
        title,
        description,
        price,
        brand,
        category,
        stock,
        rating,
        tags,
        warrantyInformation,
        shippingInformation,
        availabilityStatus,
        returnPolicy,
        minimumOrderQuantity,
        meta,
        dimensions,
        reviews,
        images,
    } = product;

    const handleIncrease = () => setQuantity((prev) => prev + 1);
    const handleDecrease = () => setQuantity((prev) => (prev > 1 ? prev - 1 : 1));

    return (
        <div className="container" style={{ marginTop: "120px" }}>
            <div className="row">
                {/* Product Image */}
                <div className="col-md-6">
                    <img
                        src={images?.[0]}
                        className="img-fluid rounded shadow"
                        alt={title}
                    />
                </div>
                {/* Product Details */} <div className="col-md-6 ps-5">
                    <h2>{title}</h2>
                    <p className="text-muted">{description}</p>
                    <h4 className="text-success">${price}</h4>
                    <p><strong>Brand:</strong> {brand}</p>
                    <p><strong>Category:</strong> {category}</p>
                    <p><strong>Rating:</strong> ⭐ {rating}</p>
                    <p><strong>Stock:</strong> {stock}</p>
                    <p><strong>Tags:</strong> {tags?.join(", ")}</p>
                    <p><strong>Availability:</strong> {availabilityStatus}</p>
                    <p><strong>Warranty:</strong> {warrantyInformation}</p>
                    <p><strong>Shipping:</strong> {shippingInformation}</p>
                    <p><strong>Return Policy:</strong> {returnPolicy}</p>
                    <p><strong>Minimum Order Quantity:</strong> {minimumOrderQuantity}</p>
                    {/* Dimensions */}
                    {dimensions && (<div> <h5 className="mt-4">Dimensions:</h5>
                        <ul>
                            <li>Width: {dimensions.width} cm</li>
                            <li>Height: {dimensions.height} cm</li>
                            <li>Depth: {dimensions.depth} cm</li>
                        </ul> </div>)} {/* Meta Section */}
                    {meta && (<div className="mt-4"> <h5>Meta Information:</h5>
                        <p><strong>Barcode:</strong> {meta.barcode}</p>
                        <p><strong>Created At:</strong> {new Date(meta.createdAt).toLocaleString()}</p>
                        <p><strong>Updated At:</strong> {new Date(meta.updatedAt).toLocaleString()}</p> </div>)}

                    {/* Quantity Section */}
                    <div className="d-flex align-items-center mt-4">
                        <button
                            className="btn btn-outline-secondary"
                            onClick={handleDecrease}
                        >
                            -
                        </button>
                        <span className="px-3 fs-5">{quantity}</span>
                        <button
                            className="btn btn-outline-secondary"
                            onClick={handleIncrease}
                        >
                            +
                        </button>
                    </div>

                    {/* ✅ Add to Cart */}
                    <button className="btn btn-primary mt-3" onClick={handleAddToCart}>
                        Add {quantity} to Cart
                    </button>
                </div>
            </div>

            {/* Reviews */}
            {reviews && reviews.length > 0 && (
                <div className="mt-5">
                    <h3>Customer Reviews</h3>
                    {reviews.map((review, index) => (
                        <div key={index} className="border p-3 rounded mb-3">
                            <p>
                                <strong>{review.reviewerName}</strong> (
                                {review.reviewerEmail})
                            </p>
                            <p>⭐ {review.rating}</p>
                            <p>{review.comment}</p>
                        </div>
                    ))}
                </div>
            )}
        </div>
    );
};

export default function DescriptionPage() {
  return (
    <Suspense fallback={<div>Loading product...</div>}>
      <DescriptionContent />
    </Suspense>
  );
}