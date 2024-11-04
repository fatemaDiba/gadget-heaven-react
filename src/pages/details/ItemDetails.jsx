import { IoCartOutline } from "react-icons/io5";
import { IoIosHeartEmpty } from "react-icons/io";
const ItemDetails = () => {
  return (
    <div>
      <div className="pb-36 bg-[#9538E2] py-10">
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
        <div className="card lg:card-side bg-base-100 shadow-xl">
          <figure className="ms-8">
            <img
              className="rounded-xl"
              src="https://img.daisyui.com/images/stock/photo-1494232410401-ad00d5433cfa.webp"
              alt="Album"
            />
          </figure>
          <div className="card-body">
            <h2 className="card-title">Samsung Galaxy S23 Ultra</h2>
            <p>Price: $ 999.99</p>
            <button className="w-1/6 text-[#309C08] font-semibold border border-[#309C08] px-3 py-2 rounded-full text-sm">
              In Stock
            </button>
            <p className="text-[#09080F99]">
              Ultra-slim, high-performance laptop with 13.4-inch Infinity Edge
              display.
            </p>
            <p className="font-semibold text-lg">Specification:</p>
            <ul className="list-decimal text-[#09080F99] ml-4">
              <li>Intel i7 11th Gen</li>
              <li>16GB RAM</li>
              <li>512GB SSD</li>
              <li>Touchscreen</li>
            </ul>
            <p className="font-semibold text-lg">Rating ⭐ </p>
            <div className="flex items-center gap-4 mb-2">
              <div className="rating rating-sm">
                <input
                  type="radio"
                  name="rating-7"
                  className="mask mask-star-2 bg-yellow-400"
                />
                <input
                  type="radio"
                  name="rating-7"
                  className="mask mask-star-2 bg-yellow-400"
                  defaultChecked
                />
                <input
                  type="radio"
                  name="rating-7"
                  className="mask mask-star-2 bg-yellow-400"
                />
                <input
                  type="radio"
                  name="rating-7"
                  className="mask mask-star-2 bg-yellow-400"
                />
                <input
                  type="radio"
                  name="rating-7"
                  className="mask mask-star-2 bg-yellow-400"
                />
              </div>
              <div className="bg-[#09080F0D] px-3 py-2 rounded-full text-sm">
                4.8
              </div>
            </div>
            <div className="flex gap-3 items-center ">
              <button className="text-sm font-semibold text-white flex gap-2 items-center py-2 px-6 rounded-full bg-[#9538E2]">
                Add To Cart <IoCartOutline className="text-xl" />
              </button>
              <button className="border border-[#0B0B0B1A] bg-white text-lg p-2 rounded-full">
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
