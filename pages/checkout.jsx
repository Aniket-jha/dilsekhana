import Layout from "@/src/layouts/Layout";
import { db } from "@/src/firebase.config";
import { collection, addDoc, Timestamp, doc, getDoc } from "firebase/firestore";
import CheckoutCart from "@/src/components/Cart/CheckoutCart";
import { useCart } from "@/src/store/cartContext";
import { useCheckout } from "@/src/context/checkoutContext";

const Checkout = () => {
  const { cartData, totalPrice, clearCart } = useCart();
  const { user, address, updateUser, updateAddress, clearData } = useCheckout();

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    if (["fullName", "email", "phone"].includes(name)) {
      updateUser(name, value);
    } else if (["pincode", "house", "landmark"].includes(name)) {
      updateAddress(name, value);
    }
  };

  const validateForm = () => {
    const { fullName, email, phone } = user;
    const { pincode, house } = address;

    if (!fullName || !email || !phone || !house) {
      alert("Please fill in all required fields.");
      return false;
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      alert("Please enter a valid email.");
      return false;
    }
    if (phone.length !== 10) {
      alert("Please enter a valid 10-digit phone number.");
      return false;
    }

    return true;
  };

  const handleCashOnDelivery = async () => {
    if (!cartData || cartData.length === 0) {
      alert("Cart is empty.");
      return;
    }

    try {
      for (let item of cartData) {
        const itemDocRef = doc(db, "Products", item.id);
        const itemDoc = await getDoc(itemDocRef);

        if (itemDoc.exists() && itemDoc.data().stockStatus !== "In-Stock") {
          alert(`Item ${item.name} is out of stock.`);
          return;
        }
      }

      if (!validateForm()) return;

      const orderData = {
        items: cartData,
        totalPrice,
        orderStatus: "Pending",
        createdAt: Timestamp.now(),
        user,
        address,
      };

      const docRef = await addDoc(collection(db, "orders"), orderData);
      alert(`Order successfully placed! Your order ID is ${docRef.id}`);
      clearCart();
      clearData();
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

      <section className="gap">
        <div className="container">
          <div className="row">
            <div className="col-xl-5 col-lg-12">
              <CheckoutCart />
            </div>
            <div
              className="offset-xl-1 col-xl-6 col-lg-12"
              data-aos="flip-up"
              data-aos-delay={300}
              data-aos-duration={400}
            >
              <form
                onSubmit={(e) => e.preventDefault()}
                className="checkout-form"
              >
                <h4>Buyer information</h4>
                <input
                  type="text"
                  name="fullName"
                  placeholder="Full Name"
                  value={user.fullName}
                  onChange={handleInputChange}
                />
                <div className="row">
                  <div className="col-lg-6">
                    <input
                      type="text"
                      name="email"
                      placeholder="E-mail"
                      value={user.email}
                      onChange={handleInputChange}
                    />
                  </div>
                  <div className="col-lg-6">
                    <input
                      type="text"
                      name="phone"
                      placeholder="Phone"
                      value={user.phone}
                      onChange={handleInputChange}
                    />
                  </div>
                </div>
                <h4 className="two">Delivery address</h4>
                <select
                  name="pincode"
                  className="nice-select Advice"
                  value={address.pincode}
                  onChange={handleInputChange}
                >
                  <option value="">Select Pincode</option>
                  <option>400067</option>
                  <option>400063</option>
                  <option>400104</option>
                  <option>400064</option>
                  <option>400097</option>
                  <option>400101</option>
                  <option>400091</option>
                  <option>400066</option>
                  <option>400092</option>
                  <option>400068</option>
                </select>

                <input
                  type="text"
                  name="house"
                  placeholder="Flat / House No / Floor / Building"
                  value={address.house}
                  onChange={handleInputChange}
                />
                <input
                  type="text"
                  name="landmark"
                  placeholder="Nearby landmark (optional)"
                  value={address.landmark}
                  onChange={handleInputChange}
                />
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
