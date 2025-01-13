import { Link } from "react-router-dom";
import eashaImg from '../assets/IMG_0sss713.jpg'
import eashaImg2 from '../assets/easha2.jpg'
import { motion } from "motion/react"
import AboutMe from "./AboutMe";
import Projects from "./Projects";
import Contact from "./Contact";

const Banner = () => {
    return (
       
<div>
<div className="bg-zinc-100 flex flex-col gap-20 lg:flex-row justify-between items-center lg:px-20 py-28 rounded-b-[180px]">
            <div>
                <h1 className="text-5xl text-black font-bold mb-4 lg:-mt-10">Eheteshamul Easha</h1>
                <p className="text-base font-semibold my-6">I am Frontend and Backend Developer</p>
                <div className="flex gap-4">
                    <Link to="detail" className="text-white bg-orange-300 btn px-6 border-2 border-orange-500"><img className="w-6" src="https://img.icons8.com/?size=30&id=RvJIXPXT3lIV&format=gif" alt="" /> Details</Link>
                    <a href="/src/resume.pdf" download className="text-sky-900 bg-sky-300 btn px-4 border-2 border-sky-600"><img className="w-8" src="https://img.icons8.com/?size=48&id=eMJFlZiyvaqY&format=png"/> Resume Download</a>
                </div>
            </div>
           <div>

           <motion.img
               animate={{ y:[ 0, -50, 0] }}
               transition={{ duration: 15 ,delay:3, repeat:Infinity}}
               className='w-72 h-48 mt-10 border-l-8 border-b-8 border-blue-500 rounded-t-[40px]  rounded-br-[40px] object-cover' src={eashaImg} referrerPolicy="no-referrer" alt="" />
          
          <motion.img
           animate={{ x:[ 0, 60, 0] }}
           transition={{ duration: 15,delay:3 ,repeat:Infinity}}
          className='w-72 h-48 border-l-8 border-b-8 border-orange-400 rounded-t-[40px]  rounded-br-[40px] object-cover' src={eashaImg2} referrerPolicy="no-referrer" alt="" />

           </div>
        </div>
        <AboutMe></AboutMe>
        <Projects></Projects>
        <Contact></Contact>
</div>
    );
};

export default Banner;