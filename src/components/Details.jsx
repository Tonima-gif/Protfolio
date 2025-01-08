import { Link } from "react-router-dom";


const Details = () => {
    return (
        <div className="text-center pt-28">
            <h1 className="text-3xl font-bold mb-6">Information about me</h1>
            <p className="text-base font-semibold"><span>Name : </span>Eheteshamul Easha</p>
            <p  className="text-base font-semibold"><span>Age : </span>24</p>
            <p  className="text-base font-semibold"><span>Education : </span>Bss Honours</p>
            <p  className="text-base font-semibold"><span>Location : </span>Rajshahi ,Bangladesh</p>

<p className="text-2xl font-bold mt-9 text-sky-500">I am Frontend Developer</p>
<div className="flex justify-center items-center mt-6">
<Link to="/contact" className="text-red-700 btn px-5 bg-red-300">Contact Me</Link>
</div>
        </div>
    );
};

export default Details;