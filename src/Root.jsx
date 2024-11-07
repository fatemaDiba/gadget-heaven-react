import { Outlet } from "react-router-dom";
import Header from "./Components/Header";
import Footer from "./Components/Footer";
import AddCartContext from "./ContextApi/AddCartContext";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import WishlistContext from "./ContextApi/AddToWishlistContext";
const Root = () => {
  return (
    <div className="font-sora">
      <WishlistContext>
        <AddCartContext>
          <Header></Header>
          <Outlet></Outlet>
          <Footer></Footer>
        </AddCartContext>
      </WishlistContext>

      <ToastContainer />
    </div>
  );
};

export default Root;
