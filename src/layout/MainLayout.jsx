import { Outlet } from "react-router-dom";
import Footer from "../pages/shared/Footer";
import NavBar from "../pages/shared/NavBar";





const MainLayout = () => {
    return (
        <div >
           <div className="container mx-auto px-4">
           <NavBar/>
            <Outlet/>
           </div>
           <div>
           <Footer/>
           </div>
        </div>
    );
};

export default MainLayout;