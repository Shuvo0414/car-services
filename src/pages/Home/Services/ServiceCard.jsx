const ServiceCard = ({ service }) => {
  const { title, img, price } = service;
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
          <a>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
            >
              <path
                d="M4.5 12H19.5M19.5 12L12.75 5.25M19.5 12L12.75 18.75"
                stroke="#FF3811"
                stroke-width="1.5"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
            </svg>
          </a>
        </div>
      </div>
    </div>
  );
};

export default ServiceCard;
