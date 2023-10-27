import { useContext } from "react";
import { useLoaderData } from "react-router-dom";
import { AuthContext } from "../../Providers/AuthProvider";
import toast from "react-hot-toast";

const CheckOut = () => {
  const loadedService = useLoaderData();
  const { _id, title, price, img } = loadedService;

  const { user } = useContext(AuthContext);

  const handleCheckOut = (event) => {
    event.preventDefault();
    const form = event.target;
    const name = form.name.value;
    const date = form.date.value;
    const email = form.email.value;
    const booking = {
      customerName: name,
      email,
      date,
      service: title,
      service_id: _id,
      price: price,
      img,
    };
    // console.log(booking);

    fetch("http://localhost:5001/bookings", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(booking),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        if (data.insertedId) {
          toast.success("Service book successfully");
        }
      });
  };

  return (
    <div>
      <h1 className=" text-center text-3xl font-bold">Check Out: {title} </h1>

      <form onSubmit={handleCheckOut} className="card-body">
        <div className=" grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="form-control">
            <label className="label">
              <span className="label-text">Name</span>
            </label>
            <input
              type="text"
              name="name"
              defaultValue={user?.displayName}
              className="input input-bordered"
              required
            />
          </div>
          <div className="form-control">
            <label className="label">
              <span className="label-text">Date</span>
            </label>
            <input
              type="date"
              name="date"
              className="input input-bordered"
              required
            />
          </div>
          <div className="form-control">
            <label className="label">
              <span className="label-text">Email</span>
            </label>
            <input
              type="email"
              name="email"
              defaultValue={user?.email}
              className="input input-bordered"
              required
            />
          </div>
          <div className="form-control">
            <label className="label">
              <span className="label-text">Due Amount</span>
            </label>
            <input
              type="text"
              defaultValue={"$" + price}
              className="input input-bordered"
              required
            />
          </div>
        </div>
        <div className="form-control mt-6">
          <input
            className="btn btn-primary"
            type="submit"
            value="Order confirm"
          />
        </div>
      </form>
    </div>
  );
};

export default CheckOut;
