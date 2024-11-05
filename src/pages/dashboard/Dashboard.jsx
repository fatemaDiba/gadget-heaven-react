import { PiSliders } from "react-icons/pi";
import CartItem from "./CartItem";
import WishItem from "./WishItem";
const Dashboard = () => {
  return (
    <div>
      <div className="bg-[#9538E2] py-10 mb-10">
        <div className="text-white flex flex-col justify-center text-center items-center mb-10">
          <h3 className="text-2xl font-bold mb-3">Dashboard</h3>
          <p className="w-[55%] text-sm">
            Explore the latest gadgets that will take your experience to the
            next level. From smart devices to the coolest accessories, we have
            it all!
          </p>
        </div>
        <div className="flex justify-center gap-5">
          <button className="px-10 py-2 text-[#9538E2] font-semibold bg-white border text-sm border-white rounded-full">
            Cart
          </button>
          <button className="px-10 py-2 bg-[#9538E2] font-semibold text-white border text-sm border-white rounded-full">
            Wishlist
          </button>
        </div>
      </div>
      {/* for Cart */}
      <div className="w-10/12 mx-auto mb-16">
        <div className="flex justify-between  mb-10">
          <p className="font-bold text-lg">Cart</p>
          <div className="flex justify-center items-center gap-3">
            <p className="font-bold">Total cost: 999.99</p>
            <button className="flex items-center gap-2 px-3 py-2 text-[#9538E2] font-semibold bg-white border text-sm border-[#9538E2] rounded-full">
              Sort by Price <PiSliders className="text-lg" />
            </button>
            <button className="px-7 py-2 bg-[#9538E2] font-semibold text-white border text-sm border-white rounded-full">
              Purchase
            </button>
          </div>
        </div>
        <CartItem></CartItem>
        <WishItem></WishItem>
      </div>
    </div>
  );
};

export default Dashboard;
