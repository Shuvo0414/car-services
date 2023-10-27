import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../Providers/AuthProvider";

const Bookings = () => {
  const { user } = useContext(AuthContext);

  const [booking, setBookings] = useState([]);

  const url = `http://localhost:5001/bookings?email=${user.email}`;

  useEffect(() => {
    fetch(url)
      .then((res) => res.json())
      .then((data) => console.log(data));
  }, [url]);

  return (
    <div>
      <h1>this is bookings</h1>
    </div>
  );
};

export default Bookings;
