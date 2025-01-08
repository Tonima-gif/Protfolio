import { Outlet } from "react-router-dom";
import Navbar from "./shared/Navbar";
import "./App.css"
import Footer from "./shared/Footer";

const App = () => {
  return (
    <>
    <Navbar></Navbar>
  <Outlet></Outlet>
  <Footer></Footer>
    </>
  );
};

export default App;