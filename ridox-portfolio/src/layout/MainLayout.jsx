import { Button } from "@/components/ui/button";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Outlet } from "react-router-dom";

const MainLayout = () => {
  return (
    <div>
      <Navbar />
      <div className="md:px-[118px] px-[20px] mt-[80px]">
        <Outlet />
      </div>
      <Footer />
    </div>
  );
};

export default MainLayout;
