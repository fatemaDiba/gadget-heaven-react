import { useContext } from "react";
import { wishlistContext } from "../../ContextApi/AddToWishlistContext";
import WishItemCard from "./components/WishItemCard";
import { CartContext } from "../../ContextApi/AddCartContext";

const WishItem = () => {
  const { wishlistItem, handleRemoveWishItem } = useContext(wishlistContext);
  const { handleAddToCartBtn } = useContext(CartContext);
  return (
    <div>
      <p className="font-bold text-lg mb-10">Wishlist</p>
      <div>
        {wishlistItem?.map((item) => {
          return (
            <WishItemCard
              key={item.product_id}
              item={item}
              handleRemoveWishItem={handleRemoveWishItem}
              handleAddToCartBtn={handleAddToCartBtn}
            ></WishItemCard>
          );
        })}
      </div>
    </div>
  );
};

export default WishItem;
