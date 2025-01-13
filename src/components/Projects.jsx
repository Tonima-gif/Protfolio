import { Link } from "react-router-dom";
import adopt from '../assets/Screenshot (41).png'
import game from '../assets/Screenshot (42).png'
import volunteer from '../assets/Screenshot (79).png'
import gadget from '../assets/Screenshot (44).png'
import cricket from '../assets/Screenshot (45).png'

const Projects = () => {
    return (
        <div className="bg-sky-100 py-10 lg:rounded-b-[180px] mt-14">
            <h1 className="text-4xl text-blue-950 font-bold text-center mb-8 flex justify-center items-center"><img src="https://img.icons8.com/?size=48&id=MLsI9Dal53Hu&format=png" alt="" /> Projects</h1>
           <div className="lg:px-28">
<Link to="detail1">

<div className="bg-slate-200 py-4  p-4 mb-6 border border-dotted border-gray-600 rounded-xl flex flex-col lg:flex-row gap-10 justify-center items-center">
<div>
<h1 className="text-3xl font-bold mb-3 text-black">Adoption Pets</h1>
<p className="text-sm mb-4">In this project created by me, everyone can buy Pet adopt at different prices...</p>
<img className="w-16" src="https://img.icons8.com/?size=80&id=fpfhPa17RxDw&format=png" alt="" />
<Link to="detail1" className="btn bg-cyan-500 mt-4">View Details</Link>
</div>

<div>
    <img className="w-96" src={adopt} alt="" />
</div>
</div>

</Link>
<Link to="detail2">
<div className="bg-slate-200 py-4 mb-6 p-4 border border-dotted border-gray-600 rounded-xl flex flex-col lg:flex-row gap-10 justify-center items-center">
<div>
<h1 className="text-3xl font-bold mb-3 text-black">Game Reviews</h1>
<p className="text-sm mb-4">In this project created by me, everyone can give reviews on different games...</p>
<img className="w-16" src="https://img.icons8.com/?size=48&id=jByggJU3XaEM&format=png" alt="" />
<Link to="detail2" className="btn bg-cyan-500 mt-4">View Details</Link>
</div>
<div>
    <img className="w-96" src={game} alt="" />
</div>
</div>
</Link>
<Link to="detail3">
<div className="bg-slate-200 py-4  p-4 mb-6 border border-dotted border-gray-600 rounded-xl flex flex-col lg:flex-row gap-10 justify-center items-center">
<div>
<h1 className="text-3xl font-bold  mb-3 text-black">Volunteer</h1>
<p className="text-sm mb-4">In this project created by me, Anyone can join as a volunteer and search a volunteer...</p>
<img className="w-16" src="https://image.shutterstock.com/image-vector/heart-human-hand-charity-color-260nw-2498316639.jpg" alt="" />
<Link to="detail3" className="btn bg-cyan-500 mt-4">View Details</Link>
</div>
<div>
    <img className="w-96" src={volunteer} alt="" />
</div>
</div>
</Link>
<Link to="detail4">
<div className="bg-slate-200 py-4  p-4 mb-6 border border-dotted border-gray-600 rounded-xl flex flex-col lg:flex-row gap-10 justify-center items-center">
<div>
<h1 className="text-3xl font-bold mb-3 text-black">Gadget Heaven</h1>
<p className="text-sm mb-4">In this project created by me,Everyone can get any kind of gadget and search many gadget...</p>
<img src="https://img.icons8.com/?size=50&id=58025&format=png" alt="" />
<Link to="detail4" className="btn bg-cyan-500 mt-4">View Details</Link>
</div>
<div>
    <img className="w-96" src={gadget} alt="" />
</div>
</div>
</Link>
<Link to="detail5">
<div className="bg-slate-200 py-4  p-4 mb-6 border border-dotted border-gray-600 rounded-xl flex flex-col lg:flex-row gap-10 justify-center items-center">
<div>
<h1 className="text-3xl font-bold mb-3 text-black">Cricket</h1>
<p className="text-sm mb-4">In this project created by me, Everyone can choose the player they want and search players...</p>
<img src="https://img.icons8.com/?size=48&id=12982&format=png" alt="" />
<Link to="detail5" className="btn bg-cyan-500 mt-4">View Details</Link>
</div>
<div>
    <img className="w-96" src={cricket} alt="" />
</div>
</div>
</Link>

   </div> 
        </div>
    );
};

export default Projects;