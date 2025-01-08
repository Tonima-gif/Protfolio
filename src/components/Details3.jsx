import { Link } from "react-router-dom";
import volunteer from '../assets/Screenshot (43).png'

const Details3 = () => {
    return (
        <div className="hero bg-base-200 min-h-screen">
        <div className="hero-content flex-col lg:flex-row-reverse">
          <img
            src={volunteer}
            className="rounded-lg shadow-2xl w-[600px] h-[300px]" />
          <div>
            <h1 className="text-5xl font-bold text-cyan-700 mt-28">Volunteer</h1>
            <p className='text-lg my-7 font-bold'>Description : In this site you can be volunteer and search a volunteer....</p>
            <div>
              <p  className='text-sm my-5 font-semibold'>Features :
              React JS<br></br>

Express JS<br></br>

React Awesome Reveal<br></br>

Sweetalart<br></br>

Mongodb<br></br>

tailwind css<br></br>

React Icons<br></br>

daisyUI</p>
            </div>
            <Link to="https://sparkly-rolypoly-810eb2.netlify.app/" className='btn bg-pink-300 px-6 text-base font-bold'>Live site</Link>
          </div>
        </div>
      </div>
    );
};

export default Details3;