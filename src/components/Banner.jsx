import { Link } from "react-router-dom";
import eashaImg from '../assets/IMG_0sss713.jpg'
import AboutMe from "./AboutMe";
import Projects from "./Projects";
import Contact from "./Contact";

const Banner = () => {
    return (
       
<div id="banner">
<div className="flex flex-col gap-20 lg:flex-row justify-between items-center lg:px-20 pt-36 pb-32">
            <div>
                <h1 className="text-5xl text-black font-bold mb-4 lg:-mt-10">Eheteshamul Easha</h1>
                <p className="text-base font-semibold my-6">I am Frontend and Backend Developer</p>
                <div className="flex gap-4">
                    <Link to="detail" className="text-white bg-orange-300 btn px-6 border-2 border-orange-500"><img className="w-6" src="https://img.icons8.com/?size=30&id=RvJIXPXT3lIV&format=gif" alt="" /> Details</Link>
                    <a className="text-sky-900 bg-sky-300 btn px-4 border-2 border-sky-600"><img className="w-8" src="https://img.icons8.com/?size=48&id=eMJFlZiyvaqY&format=png"/> Resume Download</a>
                </div>
                <div className="flex items-center mt-3 gap-2">
      <a href="https://www.linkedin.com/in/easha-khan-849809345/" target="https://www.linkedin.com/in/easha-khan-849809345/">
      <img src="https://img.icons8.com/?size=48&id=13930&format=png" alt="" />
      </a>
      <a href="https://www.facebook.com/profile.php?id=100010666809633" target="https://www.facebook.com/profile.php?id=100010666809633">
       <img src="https://img.icons8.com/?size=48&id=118497&format=png" alt="" />
      </a>
      <a href="https://github.com/Easha-gif" target="https://github.com/Easha-gif">
       <img className='h-12' src="https://img.icons8.com/?size=80&id=efFfwotdkiU5&format=png" alt="" />
      </a>
    </div>
            </div>
           <div>

           <img
               className='w-72 h-56 border-l-8 border-b-8 border-blue-500  rounded-full object-cover' src={eashaImg} referrerPolicy="no-referrer" alt="" />
</div>
        </div>
        <AboutMe></AboutMe>
        <Projects></Projects>
        <Contact></Contact>
</div>
    );
};

export default Banner;