"use client";
import { useSelector, useDispatch } from "react-redux";
import { removeItem } from "@/redux/cartSlice";
import { useRouter } from "next/navigation";

const Cart = () => {
  const router = useRouter();
  const dispatch = useDispatch();

  const cartItems = useSelector((state) => state.cart.cartItems || []);
  console.log(cartItems)

  const subtotal = cartItems.reduce(
    (sum, item) => sum + item.price * item.quantity,
    0
  );

  return (
    <>
      {/* ✅ Hero Section */}
      <div className="hero">
        <div className="container">
          <div className="row justify-content-between">
            <div className="col-lg-5">
              <div className="intro-excerpt">
                <h1>Cart</h1>
              </div>
            </div>
            <div className="col-lg-7"></div>
          </div>
        </div>
      </div>

      {/* ✅ Cart Table Section */}
      <div className="container mt-5">
        {cartItems.length === 0 ? (
          <h4>Your cart is empty 🛒</h4>
        ) : (
          <table className="table">
            <thead>
              <tr>
                <th>Image</th>
                <th>Product</th>
                <th>Price</th>
                <th>Qty</th>
                <th>Total</th>
                <th>Remove</th>
              </tr>
            </thead>

            <tbody>
              {cartItems.map((item) => (
                <tr key={item.id}>
                  <td><img src={item.images?.[0]} width="80" alt={item.title} /></td>
                  <td>{item.title}</td>
                  <td>${item.price}</td>
                  <td>{item.quantity}</td>
                  <td>${(item.price * item.quantity).toFixed(2)}</td>
                  <td>
                    <button
                      className="btn btn-danger btn-sm"
                      onClick={() => dispatch(removeItem(item.id))}
                    >
                      Remove
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        )}

        {cartItems.length > 0 && (
          <div className="text-center mt-4">
            <h5>Subtotal: ${subtotal.toFixed(2)}</h5>
            <button
              className="btn btn-primary mt-2"
              onClick={() => router.push("/checkout")}
            >
              Proceed to Checkout
            </button>
          </div>
        )}
      </div>
    </>
  );
};

export default Cart;
