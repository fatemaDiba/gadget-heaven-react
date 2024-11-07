import { createContext, useState } from "react";
import { toast } from "react-toastify";

export const wishlistContext = createContext(null);
const AddToWishlistContext = ({ children }) => {
  const [wishlistItem, setWishlistItem] = useState([]);
  const handleWishlistBtn = (gadgetData) => {
    const duplicateWishItem = wishlistItem.find(
      (item) => item.product_id === gadgetData.product_id
    );

    if (duplicateWishItem) {
      toast.warn(`${gadgetData.product_title} has already added to wishlist`);
      return;
    }
    setWishlistItem([...wishlistItem, gadgetData]);
    toast.success(
      `${gadgetData.product_title} has successfully added to wishlist`
    );
  };
  const value = {
    wishlistItem,
    setWishlistItem,
    handleWishlistBtn,
  };
  return (
    <wishlistContext.Provider value={value}>
      {children}
    </wishlistContext.Provider>
  );
};

export default AddToWishlistContext;
