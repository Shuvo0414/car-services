import { Outlet } from "react-router-dom";
import Footer from "../Shared/Footer/Footer";
import NavBar from "../Shared/NavBar/NavBar";
import { Toaster } from "react-hot-toast";

const MainLayout = () => {
  return (
    <div>
      <div className=" container mx-auto">
        <NavBar></NavBar>
        <Outlet></Outlet>
      </div>

      <Footer></Footer>
      <Toaster position="top-right" reverseOrder={false} />
    </div>
  );
};

export default MainLayout;
