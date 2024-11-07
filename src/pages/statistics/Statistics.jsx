import { Helmet } from "react-helmet-async";

const Statistics = () => {
  return (
    <div>
      <Helmet>
        <title>Statistics-Gadget Heaven</title>
      </Helmet>
      <div className="bg-[#9538E2] py-10 mb-10">
        <div className="text-white flex flex-col justify-center text-center items-center mb-10">
          <h3 className="text-2xl font-bold mb-3">Statistics</h3>
          <p className="w-[55%] text-sm">
            Explore the latest gadgets that will take your experience to the
            next level. From smart devices to the coolest accessories, we have
            it all!
          </p>
        </div>
      </div>
      <div className="w-10/12 mx-auto mb-16">
        <p className="font-bold text-lg">Statistics</p>
      </div>
    </div>
  );
};

export default Statistics;
