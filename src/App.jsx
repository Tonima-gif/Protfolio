import { Outlet } from "react-router-dom";
import Navbar from "./shared/Navbar";
import "./App.css"
import Footer from "./shared/Footer";

const App = () => {
  return (
    <>
   <div>
   <Navbar></Navbar>
 <div className="min-h-screen lg:w-11/12 mx-auto">
 <Outlet></Outlet>
 </div>
  <Footer></Footer>
   </div>
    </>
  );
};

export default App;