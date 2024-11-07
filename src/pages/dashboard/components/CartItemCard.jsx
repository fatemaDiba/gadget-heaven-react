import { RxCross2 } from "react-icons/rx";
const CartItemCard = ({ item, handleRemoveCartItem }) => {
  const { product_title, product_image, price, description, product_id } = item;
  return (
    <div>
      <div className="flex items-center justify-between border border-[#131313]/10 rounded-2xl p-6 container mx-auto mb-4">
        <div className="flex gap-4">
          <img
            src={product_image}
            alt={product_title}
            className="w-28  rounded-2xl"
          />
          <div className="space-y-3 self-start">
            <h2 className="text-lg font-bold">{product_title}</h2>
            <p className="text-[#09080F99] text-sm">{description}</p>
            <p className="text-sm font-semibold">Price: $ {price}</p>
          </div>
        </div>
        <RxCross2
          onClick={() => handleRemoveCartItem(product_id, product_title)}
          className="text-red-600 text-4xl border border-red-600 rounded-full p-2 cursor-pointer"
        />
      </div>
    </div>
  );
};

export default CartItemCard;
