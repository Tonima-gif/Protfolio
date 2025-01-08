import { Link } from "react-router-dom";
import game from '../assets/Screenshot (42).png'

const Details2 = () => {
    return (
        <div className="hero bg-base-200 min-h-screen">
        <div className="hero-content flex-col lg:flex-row-reverse">
          <img
            src={game}
            className="rounded-lg shadow-2xl w-[600px] h-[300px]" />
          <div>
            <h1 className="text-5xl font-bold text-cyan-700 mt-28">Game Reviews</h1>
            <p className='text-lg my-7 font-bold'>Description : In this site you add game reviews and explore game reviews.......
            </p>
            <div>
              <p  className='text-sm my-5 font-semibold'>Features :
              React JS<br></br>

Express JS<br></br>

React Awesome Reveal<br></br>

React tooltip<br></br>

React typeWriter<br></br>

tailwind css<br></br>

React Icons<br></br>

daisyUI</p>
            </div>
            <Link to="https://chipper-biscotti-e72f6a.netlify.app/" className='btn bg-pink-300 px-6 text-base font-bold'>Live site</Link>
          </div>
        </div>
      </div>
    );
};

export default Details2;