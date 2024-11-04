import Banner from "./Banner";
import ItemCard from "./ItemCard";

const Home = () => {
  return (
    <div className="container w-11/12 mx-auto mb-10">
      <Banner></Banner>
      <h2 className="text-2xl font-bold text-center mb-12">
        Explore Cutting-Edge Gadgets
      </h2>
      <div>
        <div>
          <button>All Product</button>
          <button>Laptops</button>
          <button>Phones</button>
          <button>Accessories</button>
          <button>Smart Watches</button>
          <button>MacBook</button>
        </div>
      </div>
      {/* card */}
      <div>
        <ItemCard></ItemCard>
        <ItemCard></ItemCard>
        <ItemCard></ItemCard>
      </div>
    </div>
  );
};

export default Home;
