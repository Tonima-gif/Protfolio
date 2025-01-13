import { Link } from "react-router-dom";


const Details = () => {
    return (
        <div className="text-center pt-28">
            <h1 className="text-3xl font-bold mb-6">Information about me</h1>
            <p className="text-base font-semibold"><span>Name : </span>Eheteshamul Easha</p>
            <p  className="text-base font-semibold"><span>Age : </span>24</p>
            <p  className="text-base font-semibold pt-2"><span>Education : </span>Bss Honours</p>
            <p  className="text-base font-semibold py-2"><span>Location : </span>Rajshahi ,Bangladesh</p>

<p className="text-2xl font-bold mt-9 text-sky-500">I am Frontend and Backend Developer</p>
<div className="flex justify-center items-center mt-6">
<Link to="/contact" className=" btn px-5 bg-blue-300">Contact Me</Link>
<div className="grid grid-flow-col gap-2 ml-4">
      <a href="https://www.linkedin.com/in/easha-khan-849809345/" target="https://www.linkedin.com/in/easha-khan-849809345/">
      <img src="https://img.icons8.com/?size=48&id=13930&format=png" alt="" />
      </a>
      <a href="https://www.facebook.com/profile.php?id=100010666809633" target="https://www.facebook.com/profile.php?id=100010666809633">
       <img src="https://img.icons8.com/?size=48&id=118497&format=png" alt="" />
      </a>
    </div>
</div>
        </div>
    );
};

export default Details;