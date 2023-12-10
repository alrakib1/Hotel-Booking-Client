import { Outlet } from "react-router-dom";
import Navbar from "../components/Nabar/Navbar";
import Footer from "../components/Footer/Footer";

const MainLayout = () => {
  return (
    <div>
      <Navbar />
      <div className="min-h-screen max-w-screen-xl mx-auto">
        <Outlet />
      </div>
      <Footer/>
    </div>
  );
};

export default MainLayout;
