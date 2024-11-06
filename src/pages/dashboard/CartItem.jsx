import { PiSliders } from "react-icons/pi";
import { RxCross2 } from "react-icons/rx";
const CartItem = () => {
  return (
    <div>
      {/* modal */}
      <div>
        <dialog id="my_modal_1" className="modal">
          <div className="modal-box  flex flex-col items-center">
            <img className="w-20 mb-5" src="/assets/success.png" alt="" />
            <h3 className="font-bold text-lg mb-3">Payment Successfully</h3>
            <p className="mb-2 text-[#09080F99] text-sm">
              Thanks for purchasing.
            </p>
            <p className="text-[#09080F99] text-sm mb-5">Total: 2449.96</p>
            <div className="w-full">
              <form method="dialog">
                <button className="btn w-full rounded-full font-bold">
                  Close
                </button>
              </form>
            </div>
          </div>
        </dialog>
      </div>
      <div className="flex justify-between  mb-10">
        <p className="font-bold text-lg">Cart</p>
        <div className="flex justify-center items-center gap-3">
          <p className="font-bold">Total cost: 999.99</p>
          <button className="flex items-center gap-2 px-3 py-2 text-[#9538E2] font-semibold bg-white border text-sm border-[#9538E2] rounded-full">
            Sort by Price <PiSliders className="text-lg" />
          </button>
          <button
            onClick={() => document.getElementById("my_modal_1").showModal()}
            className="px-7 py-2 bg-[#9538E2] font-semibold text-white border text-sm border-white rounded-full"
          >
            Purchase
          </button>
        </div>
      </div>
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
    </div>
  );
};

export default CartItem;
