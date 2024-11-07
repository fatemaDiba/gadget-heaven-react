import { createContext, useState } from "react";
import { toast } from "react-toastify";

export const wishlistContext = createContext(null);
const AddToWishlistContext = ({ children }) => {
  const [wishlistItem, setWishlistItem] = useState([]);

  const handleRemoveWishItem = (id, title) => {
    const updatedWishlistItem = wishlistItem.filter(
      (item) => item.product_id !== id
    );
    setWishlistItem(updatedWishlistItem);
    toast.error(`${title} has been removed from wishlist`);
  };
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
    handleRemoveWishItem,
  };
  return (
    <wishlistContext.Provider value={value}>
      {children}
    </wishlistContext.Provider>
  );
};

export default AddToWishlistContext;
