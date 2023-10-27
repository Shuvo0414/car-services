import { useEffect, useState } from "react";
import ServiceCard from "./ServiceCard";

const Services = () => {
  const [services, setServices] = useState([]);

  useEffect(() => {
    fetch("http://localhost:5001/services")
      .then((res) => res.json())
      .then((data) => setServices(data));
  }, []);

  return (
    <div className=" mb-32">
      <div className="text-center space-y-5">
        <p className=" text-xl font-bold text-[#FF3811]">Service</p>
        <h3 className="text-4xl font-bold">Our Service Area</h3>
        <p className=" text-base font-normal text-[#737373]">
          The majority have suffered alteration in some form, by injected
          humour, or randomised <br /> words which don't look even slightly
          believable.
        </p>
      </div>
      <div className=" grid grid-cols-1 md:grid-cols-3 gap-6">
        {services.map((service) => (
          <ServiceCard key={service._id} service={service}></ServiceCard>
        ))}
      </div>
    </div>
  );
};

export default Services;
