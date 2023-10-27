import { FaArrowRight } from "react-icons/fa";
import { Link } from "react-router-dom";

const ServiceCard = ({ service }) => {
  const { _id, title, img, price } = service;
  return (
    <div className="card mx-auto   bg-base-100 shadow-xl space-y-5">
      <figure className="px-10 pt-10">
        <img src={img} alt="service-image" className="rounded-xl" />
      </figure>
      <div className="card-body ">
        <h2 className="card-title text-2xl font-bold">{title}</h2>
        <div className=" flex items-center">
          <p className=" text-[#FF3811] text-xl font-semibold">
            Price: $ {price}
          </p>
          <Link to={`/checkout/${_id}`}>
            <FaArrowRight className=" text-[#FF3811] text-xl"></FaArrowRight>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default ServiceCard;
