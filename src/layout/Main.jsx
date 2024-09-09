import { Outlet } from "react-router-dom";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

const Main = () => {
  return <div>
    <Navbar></Navbar>
    <div className="h-screen bg-[#fff5f0] container mx-auto">
        <Outlet></Outlet>
    </div>
    <Footer></Footer>
  </div>;
};
export default Main;