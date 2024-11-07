import Layout from "@/src/layouts/Layout";
import { useEffect, useState } from "react";
import { db } from "@/src/firebase.config";
import { collection, addDoc, Timestamp } from "firebase/firestore";
import CheckoutCart from "@/src/components/Cart/CheckoutCart";
import { useCart } from "@/src/store/cartContext";

const Checkout = () => {
  const [tab, setTab] = useState("card");
  const { cartData, totalPrice, clearCart } = useCart(); // Use totalPrice from context

  const handleCashOnDelivery = async () => {
    if (!cartData || cartData.length === 0) {
      alert("Cart is empty.");
      return;
    }

    try {
      const orderData = {
        items: cartData,
        totalPrice: totalPrice, // Use the totalPrice directly from context
        orderStatus: "Pending",
        createdAt: Timestamp.now(),
      };

      console.log(orderData);
      const docRef = await addDoc(collection(db, "orders"), orderData);
      console.log("Order placed with ID:", docRef.id);
      alert(`Order successfully placed! Your order ID is ${docRef.id}`);
      clearCart();
    } catch (e) {
      console.error("Error adding document: ", e);
      alert("Failed to place the order. Please try again.");
    }
  };

  return (
    <Layout>
      <section
        className="hero-section about checkout gap"
        style={{ backgroundImage: "url(assets/img/background-3.png)" }}
      >
        <div className="container">
          <div className="row align-items-center">
            <div className="col-lg-12">
              <div className="about-text pricing-table">
                <h2>Checkout</h2>
                <p>Checkout details</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* checkout-order */}
      <section className="gap">
        <div className="container">
          <div className="row">
            <div className="col-xl-5 col-lg-12">
              <CheckoutCart />
            </div>
            <div className="offset-xl-1 col-xl-6 col-lg-12">
              <form
                onSubmit={(e) => e.preventDefault()}
                className="checkout-form"
              >
                <h4>Buyer information</h4>
                <input type="text" name="Name" placeholder="Full Name" />
                <input type="text" name="Email" placeholder="Email" />
                <div className="row">
                  <div className="col-lg-6">
                    <input
                      type="text"
                      name="E-mail"
                      placeholder="House number"
                    />
                  </div>
                  <div className="col-lg-6">
                    <input
                      type="number"
                      name="E-mail"
                      placeholder="Apartment number"
                    />
                    <span>*dispensable</span>
                  </div>
                </div>
                <h4 className="two">Payment method</h4>
                <div className="checkout-options">
                  <button
                    className="button button-2"
                    onClick={handleCashOnDelivery}
                  >
                    Cash on Delivery
                  </button>
                  <button className="button button-2">
                    Pay using Razorpay
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Checkout;
