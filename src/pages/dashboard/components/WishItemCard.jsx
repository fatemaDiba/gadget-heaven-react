import { RxCross2 } from "react-icons/rx";

const WishItemCard = ({ item, handleRemoveWishItem, handleAddToCartBtn }) => {
  const { product_title, product_id, product_image, price, description } = item;
  const handleWishlistToCart = (item) => {
    handleAddToCartBtn(item);
    handleRemoveWishItem(item.product_id, item.product_title);
  };
  return (
    <div>
      <div className="flex items-center justify-between border border-[#131313]/10 rounded-2xl p-6 container mx-auto mb-4">
        <div className="flex gap-4">
          <img
            src={product_image}
            alt={product_title}
            className="w-32 rounded-2xl"
          />
          <div className="space-y-3 self-start">
            <h2 className="text-lg font-bold">{product_title}</h2>
            <p className="text-[#09080F99] text-sm">
              <span className="font-semibold text-black">Description: </span>
              {description}
            </p>
            <p className="text-sm font-semibold">Price: $ {price}</p>
            <button
              onClick={() => handleWishlistToCart(item)}
              className="px-7 py-2 bg-[#9538E2] font-semibold text-white border text-sm   border-white rounded-full"
            >
              Add To Cart
            </button>
          </div>
        </div>
        <RxCross2
          onClick={() => handleRemoveWishItem(product_id, product_title)}
          className="text-red-600 text-4xl border border-red-600 rounded-full p-2 cursor-pointer"
        />
      </div>
    </div>
  );
};

export default WishItemCard;
