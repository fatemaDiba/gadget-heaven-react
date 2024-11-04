import Banner from "./Banner";
import ItemCard from "./ItemCard";

const Home = () => {
  return (
    <div className="mb-10">
      <Banner></Banner>
      <h2 className="text-2xl font-bold text-center mb-12">
        Explore Cutting-Edge Gadgets
      </h2>
      <div className="flex gap-10 container w-10/12 mx-auto">
        <div className="w-2/12 flex flex-col gap-3 p-4 border border-[#09080F1A] rounded-xl drop-shadow-md">
          <button className="bg-[#9538E2] px-3 py-2 font-semibold test-base rounded-full">
            All Product
          </button>
          <button className="bg-[#09080F0D] px-3 py-2 font-semibold test-base text-[#09080F99] rounded-full">
            Laptops
          </button>
          <button className="bg-[#09080F0D] px-3 py-2 font-semibold test-base text-[#09080F99] rounded-full">
            Phones
          </button>
          <button className="bg-[#09080F0D] px-3 py-2 font-semibold test-base text-[#09080F99] rounded-full">
            Accessories
          </button>
          <button className="bg-[#09080F0D] px-3 py-2 font-semibold test-base text-[#09080F99] rounded-full">
            Smart Watches
          </button>
          <button className="bg-[#09080F0D] px-3 py-2 font-semibold test-base text-[#09080F99] rounded-full">
            MacBook
          </button>
        </div>
        {/* card */}
        <div className="w-10/12 grid grid-cols-3 gap-4">
          <ItemCard></ItemCard>
          <ItemCard></ItemCard>
          <ItemCard></ItemCard>
        </div>
      </div>
    </div>
  );
};

export default Home;
