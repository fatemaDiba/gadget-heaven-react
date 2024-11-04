const ItemCard = () => {
  return (
    <div>
      <div className="card bg-base-100 drop-shadow-md">
        <figure className="px-5 pt-5">
          <img
            src="https://img.daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.webp"
            alt="Shoes"
            className="rounded-xl"
          />
        </figure>
        <div className="card-body space-y-1">
          <h2 className="card-title">Dell XPS 13</h2>
          <p className="text-[#09080F99]">Price: 99.99k</p>
          <div className="card-actions">
            <button className="text-sm px-5 py-2 border border-[#9538E2] rounded-full text-[#9538E2] font-semibold">
              View Details
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ItemCard;
