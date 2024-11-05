import { useEffect, useState } from "react";
import { useCart } from "@/src/store/cartContext";
import { useRouter } from "next/router";

const CheckoutFunction = ({ sidebar }) => {
  const router = useRouter();
  const {
    cartData,
    updateQuantity: updateCartQuantity,
    removeFromCart,
    clearCart,
  } = useCart(); // Use updateCartQuantity from context
  const [subTotal, setSubTotal] = useState(0);
  const [totalPrice, setTotalPrice] = useState(0);

  const handleQuantityChange = (itemId, newQuantity) => {
    if (newQuantity >= 1) {
      // Prevent setting quantity to less than 1
      updateCartQuantity(itemId, newQuantity);
    }
  };

  useEffect(() => {
    setSubTotal(calculateSubTotal());
    setTotalPrice(Number(calculateSubTotal()).toFixed(2));
    localStorage.setItem(
      "munfirm",
      JSON.stringify({ subTotal, totalPrice, cartData })
    );
  }, [cartData, subTotal, totalPrice]); // Add cartData, subTotal, and totalPrice as dependencies

  const calculateSubTotal = () => {
    return cartData
      .map((item) => item.price * item.quantity)
      .reduce((prev, next) => prev + next, 0)
      .toFixed(2);
  };

  return (
    <div className="checkout-order">
      <div className="title-checkout">
        <h2>Your order:</h2>
        {!sidebar && <h6>{cartData.length}</h6>}
      </div>
      <div className="banner-wilmington">
        <img alt="logo" src="assets/img/logo-s.jpg" />
        <h6>Kennington Lane Cafe</h6>
      </div>
      <ul>
        {cartData.map((item, index) => (
          <li className="price-list" key={`${item.id}-${index}`}>
            {" "}
            {/* Use id + index as key */}
            <i
              className="closeButton fa-solid fa-xmark"
              onClick={() => removeFromCart(item.id)}
            />
            <div className="counter-container">
              <div className="counter-food">
                <img alt="food" src={item.image} />
                <h4>{item.title}</h4>
              </div>
              <h3>${item.price}</h3>
            </div>
            <div className="price">
              <div>
                <h2>${item.price}</h2>
                <span>Sum</span>
              </div>
              <div>
                <div className="qty-input">
                  <button
                    className="qty-count qty-count--minus"
                    data-action="minus"
                    type="button"
                    onClick={() =>
                      handleQuantityChange(item.id, item.quantity - 1)
                    }
                  >
                    -
                  </button>
                  <input
                    className="product-qty"
                    type="number"
                    value={item.quantity}
                    onChange={(e) =>
                      handleQuantityChange(item.id, Number(e.target.value))
                    }
                    name="quantity"
                  />
                  <button
                    className="qty-count qty-count--add"
                    data-action="add"
                    type="button"
                    onClick={() =>
                      handleQuantityChange(item.id, item.quantity + 1)
                    }
                  >
                    +
                  </button>
                </div>
                <span>Quantity</span>
              </div>
            </div>
          </li>
        ))}
      </ul>

      <div className="totel-price">
        <span>Total order:</span>
        <h5>$ {Number(totalPrice).toFixed(2)}</h5>
      </div>
      <div className="totel-price">
        <span>To pay:</span>
        <h2>$ {Number(totalPrice).toFixed(2)}</h2>
      </div>

      <div className="cart-buttons">
        <button className="button button-2" onClick={clearCart}>
          Clear Cart
        </button>
        <button
          className="button button-2"
          onClick={() => router.push("/checkout")}
        >
          Checkout
        </button>
      </div>
    </div>
  );
};

export default CheckoutFunction;
