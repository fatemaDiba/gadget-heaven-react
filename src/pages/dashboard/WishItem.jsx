import { RxCross2 } from "react-icons/rx";
const WishItem = () => {
  return (
    <div>
      <p className="font-bold text-lg mb-10">Wishlist</p>
      <div className="flex items-center justify-between border border-[#131313]/10 rounded-2xl p-6 container mx-auto mb-4">
        <div className="flex gap-4">
          <img
            src="https://img.daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.webp"
            alt=""
            className="w-60 h-30 rounded-2xl"
          />
          <div className="space-y-3 self-center">
            <h2 className="text-lg font-bold">Samsung Galaxy S23 Ultra</h2>
            <p className="text-[#09080F99] text-sm">
              <span className="font-semibold text-black">Description: </span>
              Ultra-slim, high-performance laptop with 13.4-inch Infinity Edge
              display.
            </p>
            <p className="text-sm font-semibold">Price: $ 999.99</p>
            <button className="px-7 py-2 bg-[#9538E2] font-semibold text-white border text-sm   border-white rounded-full">
              Add To Cart
            </button>
          </div>
        </div>
        <RxCross2 className="text-red-600 text-4xl border border-red-600 rounded-full p-2" />
      </div>
    </div>
  );
};

export default WishItem;
