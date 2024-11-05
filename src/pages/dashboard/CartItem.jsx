import { RxCross2 } from "react-icons/rx";
const CartItem = () => {
  return (
    <div className="mb-5">
      <div className="flex p-3 border border-slate-200 rounded-xl lg:card-side">
        <figure>
          <img
            className="w-2/4"
            src="https://img.daisyui.com/images/stock/photo-1494232410401-ad00d5433cfa.webp"
            alt="Album"
          />
        </figure>
        <div className="flex items-center gap-20">
          <div className="space-y-3">
            <h2 className="text-lg font-bold">New album is released!</h2>
            <p className="text-[#09080F99] text-sm">
              Ultra-slim, high-performance laptop with 13.4-inch Infinity Edge
              display.
            </p>
            <p className="text-sm font-semibold">Price: $ 999.99</p>
          </div>
          <div className="border border-red-500 rounded-full p-2">
            <RxCross2 className="text-red-500 font-extrabold text-lg" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default CartItem;
