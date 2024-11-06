import { Link } from "react-router-dom";

const ItemCard = ({ gadget }) => {
  const { product_id, product_image, product_title, price, category } = gadget;
  return (
    <div>
      <div className="card bg-base-100 drop-shadow-md">
        <figure className="px-5 pt-5">
          <img src={product_image} alt={category} className="rounded-xl" />
        </figure>
        <div className="card-body space-y-1">
          <h2 className="card-title">{product_title}</h2>
          <p className="text-[#09080F99]">Price: ${price}</p>
          <div className="card-actions">
            <Link
              to={`/details/${product_id}`}
              className="text-sm px-5 py-2 border border-[#9538E2] rounded-full text-[#9538E2] font-semibold"
            >
              View Details
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ItemCard;
