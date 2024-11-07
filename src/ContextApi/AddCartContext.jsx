import { createContext, useState } from "react";
import { toast } from "react-toastify";

export const CartContext = createContext(null);
const AddCartContext = ({ children }) => {
  const [cartItem, setCartItem] = useState([]);
  const handleAddToCartBtn = (gadgetData) => {
    const duplicateItem = cartItem.find(
      (item) => item.product_id === gadgetData.product_id
    );
    if (duplicateItem) {
      toast.warn(`${gadgetData.product_title} has already added to cart`);
      return;
    }
    setCartItem([...cartItem, gadgetData]);
    toast.success(`${gadgetData.product_title} has successfully added to cart`);
  };
  const value = {
    cartItem,
    setCartItem,
    handleAddToCartBtn,
  };
  return <CartContext.Provider value={value}>{children}</CartContext.Provider>;
};

export default AddCartContext;
