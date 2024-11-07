import { IoCartOutline } from "react-icons/io5";
import { IoIosHeartEmpty } from "react-icons/io";
import { useContext, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import ReactStars from "react-rating-stars-component";
import { CartContext } from "../../ContextApi/AddCartContext";
import { wishlistContext } from "../../ContextApi/AddToWishlistContext";
import { Helmet } from "react-helmet-async";

const ItemDetails = () => {
  const [gadgetsData, setGadgetsData] = useState([]);
  const { id } = useParams();
  const { handleAddToCartBtn } = useContext(CartContext);
  const { handleWishlistBtn } = useContext(wishlistContext);
  useEffect(() => {
    fetch("/gadget.json")
      .then((res) => res.json())
      .then((data) => {
        const gadgetItem = data.find((item) => item.product_id === id);
        setGadgetsData(gadgetItem);
      });
  }, []);
  const {
    description,
    product_image,
    product_title,
    price,
    specification,
    rating,
  } = gadgetsData;
  return (
    <div>
      <Helmet>
        <title>{`${product_title}`}-Gadget Heaven</title>
      </Helmet>
      <div className="pb-40 bg-[#9538E2] py-10">
        <div className="text-white flex flex-col justify-center items-center">
          <h2 className="text-xl font-bold mb-2">Product Details</h2>
          <p className="text-base w-1/2 text-center">
            Explore the latest gadgets that will take your experience to the
            next level. From smart devices to the coolest accessories, we have
            it all!
          </p>
        </div>
      </div>
      <div className="w-10/12 mx-auto -mt-32">
        <div className="flex gap-10 rounded-2xl bg-base-100 drop-shadow-xl p-10">
          <figure>
            <img className="rounded-xl " src={product_image} alt="Album" />
          </figure>
          <div className="flex flex-col space-y-3 mt-4 ">
            <h2 className="text-xl font-bold">{product_title}</h2>
            <p>Price: $ {price}</p>
            <button className="max-w-[30%] text-[#309C08] font-semibold border border-[#309C08] px-3 py-2 rounded-full text-sm">
              In Stock
            </button>
            <p className="text-[#09080F99] text-sm">{description}</p>
            <p className="font-semibold text-lg">Specification:</p>
            <ul className="list-decimal text-[#09080F99] ml-7 text-sm">
              {specification?.map((list, i) => {
                return <li key={i}>{list}</li>;
              })}
            </ul>
            <p className="font-semibold text-lg">Rating ⭐ </p>
            <div className="flex items-center gap-4 mb-2">
              <div>
                {gadgetsData?.rating !== undefined && (
                  <ReactStars
                    count={5}
                    value={gadgetsData.rating}
                    edit={false}
                    size={24}
                    isHalf={true}
                    activeColor="#ffd700"
                  ></ReactStars>
                )}
              </div>
              <div className="bg-[#09080F0D] px-3 py-2 rounded-full text-sm">
                {rating}
              </div>
            </div>
            <div className="flex gap-3 items-center ">
              <button
                onClick={() => handleAddToCartBtn(gadgetsData)}
                className="text-sm font-semibold text-white flex gap-2 items-center py-2 px-6 rounded-full bg-[#9538E2]"
              >
                Add To Cart <IoCartOutline className="text-xl" />
              </button>
              <button
                onClick={() => handleWishlistBtn(gadgetsData)}
                className="border border-[#0B0B0B1A] bg-white text-lg p-2 rounded-full"
              >
                <IoIosHeartEmpty />
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ItemDetails;
