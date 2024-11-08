import { createContext, useContext, useState } from "react";

const CheckoutContext = createContext();

export const CheckoutProvider = ({ children }) => {
  const [user, setUser] = useState({ fullName: "", email: "", phone: "" });
  const [address, setAddress] = useState({
    pincode: "",
    house: "",
    landmark: "",
  });

  const updateUser = (field, value) =>
    setUser((prev) => ({ ...prev, [field]: value }));
  const updateAddress = (field, value) =>
    setAddress((prev) => ({ ...prev, [field]: value }));

  const clearData = () => {
    setUser({ fullName: "", email: "", phone: "" });
    setAddress({ pincode: "", house: "", landmark: "" });
  };

  return (
    <CheckoutContext.Provider
      value={{ user, address, updateUser, updateAddress, clearData }}
    >
      {children}
    </CheckoutContext.Provider>
  );
};

export const useCheckout = () => useContext(CheckoutContext);
