import { Helmet } from "react-helmet-async";
import CartItem from "./CartItem";
import WishItem from "./WishItem";
import { useState } from "react";

const Dashboard = () => {
  const [cartActive, setCartActive] = useState(true);
  const [wishlistActive, setWishActive] = useState(false);
  const handleCart = () => {
    setCartActive(true);
    setWishActive(false);
  };
  const handleWishlist = () => {
    setWishActive(true);
    setCartActive(false);
  };
  return (
    <div>
      <Helmet>
        <title>DashBoard-Gadget Heaven</title>
      </Helmet>
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
          <button
            onClick={handleCart}
            className={`px-10 py-2 ${
              cartActive ? "text-[#9538E2] bg-white" : "bg-[#9538E2] text-white"
            }  font-semibold border text-sm border-white rounded-full`}
          >
            Cart
          </button>
          <button
            onClick={handleWishlist}
            className={`px-10 py-2 ${
              wishlistActive
                ? "text-[#9538E2] bg-white"
                : "bg-[#9538E2] text-white"
            }  font-semibold border text-sm border-white rounded-full`}
          >
            Wishlist
          </button>
        </div>
      </div>
      {/* for Cart */}
      <div className="w-10/12 mx-auto mb-16">
        {cartActive && <CartItem></CartItem>}
        {wishlistActive && <WishItem></WishItem>}
      </div>
    </div>
  );
};

export default Dashboard;
