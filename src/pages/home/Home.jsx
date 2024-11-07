import { Helmet } from "react-helmet-async";
import Banner from "./Banner";
import ItemCard from "./ItemCard";
import { useEffect, useState } from "react";

const Home = () => {
  const [gadgets, setGadgets] = useState([]);
  const [categories, setCategories] = useState([]);
  const [filterData, setFilterData] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState("");
  useEffect(() => {
    fetch("/gadget.json")
      .then((res) => res.json())
      .then((data) => {
        setGadgets(data);
        setFilterData(data);
        const UniqueCategories = data
          .map((item) => item.category)
          .filter((value, index, self) => self.indexOf(value) === index);
        setCategories(UniqueCategories);
      });
  }, []);

  const handleCategories = (category) => {
    const byCategory = gadgets.filter((item) => item.category === category);
    setFilterData(byCategory);
    setSelectedCategory(category);
  };
  const handleShowAllCategory = () => {
    setFilterData(gadgets);
    setSelectedCategory(null);
  };

  return (
    <div className="mb-10">
      <Helmet>
        <title>Home-Gadget Heaven</title>
      </Helmet>
      <Banner></Banner>
      <h2 className="text-2xl font-bold text-center mb-12">
        Explore Cutting-Edge Gadgets
      </h2>
      <div className="flex gap-10 container w-10/12 mx-auto">
        <div className=" w-2/12 flex flex-col self-start gap-3 p-4 border border-[#09080F1A] rounded-xl drop-shadow-md">
          <button
            onClick={handleShowAllCategory}
            className={`${
              !selectedCategory
                ? "bg-[#9538E2] text-white"
                : "bg-[#09080F0D] text-[#09080F99]"
            } px-3 py-2 font-semibold test-base rounded-full`}
          >
            All Product
          </button>
          {categories.map((category, index) => (
            <button
              key={index}
              onClick={() => handleCategories(category)}
              className={`${
                selectedCategory === category
                  ? "bg-[#9538E2] text-white"
                  : "bg-[#09080F0D] text-[#09080F99]"
              } px-3 py-2 font-semibold test-base rounded-full`}
            >
              {category}
            </button>
          ))}
        </div>
        {/* card */}
        <div className="w-10/12 grid grid-cols-3 gap-4">
          {filterData?.map((gadget) => {
            return (
              <ItemCard key={gadget.product_id} gadget={gadget}></ItemCard>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Home;
