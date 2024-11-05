import { RxCross2 } from "react-icons/rx";
const CartItem = () => {
  return (
    <div className="flex items-center justify-between border border-[#131313]/10 rounded-2xl p-6 container mx-auto mb-4">
      <div className="flex gap-4">
        <img
          src="https://img.daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.webp"
          alt=""
          className="w-60 h-30 rounded-2xl"
        />
        <div className="space-y-3 self-start">
          <h2 className="text-lg font-bold">Samsung Galaxy S23 Ultra</h2>
          <p className="text-[#09080F99] text-sm">
            Ultra-slim, high-performance laptop with 13.4-inch Infinity Edge
            display.
          </p>
          <p className="text-sm font-semibold">Price: $ 999.99</p>
        </div>
      </div>
      <RxCross2 className="text-red-600 text-4xl border border-red-600 rounded-full p-2" />
    </div>
  );
};

export default CartItem;
