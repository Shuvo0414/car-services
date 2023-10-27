import { Outlet } from "react-router-dom";
import Footer from "../Shared/Footer/Footer";
import NavBar from "../Shared/NavBar/NavBar";
import { Toaster } from "react-hot-toast";

const MainLayout = () => {
  return (
    <div>
      <NavBar></NavBar>
      <Outlet></Outlet>
      <Footer></Footer>
      <Toaster position="top-right" reverseOrder={false} />
    </div>
  );
};

export default MainLayout;
