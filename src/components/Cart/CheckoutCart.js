import { useEffect, useState } from "react";
import { useCart } from "@/src/store/cartContext";

const CheckoutCart = ({ sidebar }) => {
  const {
    cartData,
    updateQuantity: updateCartQuantity,
    removeFromCart,
  } = useCart();
  const [subTotal, setSubTotal] = useState(0);
  const [totalPrice, setTotalPrice] = useState(0);

  const handleQuantityChange = (itemId, newQuantity) => {
    if (newQuantity >= 1) {
      updateCartQuantity(itemId, newQuantity);
    }
  };

  useEffect(() => {
    const newSubTotal = calculateSubTotal();
    setSubTotal(newSubTotal);
    setTotalPrice(Number(newSubTotal).toFixed(2));
    localStorage.setItem(
      "munfirm",
      JSON.stringify({
        subTotal: newSubTotal,
        totalPrice: Number(newSubTotal).toFixed(2),
        cartData,
      })
    );
    console.log("CheckoutCart cartData:", cartData);
  }, [cartData]);

  const calculateSubTotal = () => {
    return cartData
      .map((item) => item.price * item.quantity)
      .reduce((prev, next) => prev + next, 0);
  };

  console.log(subTotal);

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
            <i
              className="closeButton fa-solid fa-xmark"
              onClick={() => removeFromCart(item.id)}
            />
            <div className="counter-container">
              <div className="counter-food">
                <img alt="food" src={item.image} />
                <h4>{item.name}</h4>
              </div>
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
    </div>
  );
};

export default CheckoutCart;
