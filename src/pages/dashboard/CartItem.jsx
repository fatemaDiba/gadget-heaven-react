import { PiSliders } from "react-icons/pi";
import { useNavigate } from "react-router-dom";
import CartItemCard from "./components/CartItemCard";
import { useContext } from "react";
import { CartContext } from "../../ContextApi/AddCartContext";
const CartItem = () => {
  const { cartItem, handleRemoveCartItem } = useContext(CartContext);
  const navigate = useNavigate();
  const handleModalCloseBtn = () => {
    navigate("/");
  };
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
                <button
                  onClick={handleModalCloseBtn}
                  className="btn w-full rounded-full font-bold"
                >
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
      <div>
        {cartItem?.map((item) => {
          return (
            <CartItemCard
              key={item.product_id}
              item={item}
              handleRemoveCartItem={handleRemoveCartItem}
            ></CartItemCard>
          );
        })}
      </div>
    </div>
  );
};

export default CartItem;
