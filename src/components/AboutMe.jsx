import { motion } from "motion/react"
import { Link } from "react-router-dom";


const AboutMe = () => {
    return (
        <div>
            <div className="lg:w-80 mx-auto mt-10 mb-20">
            <h1 className="text-4xl text-orange-950 font-bold border-y-2 border-orange-500 rounded-2xl py-4 text-center">About Me</h1>
       </div>

<p className="text-xl text-center text-orange-800 font-bold lg:px-20 mb-10">
I’m Eheteshamul Easha, a Web Developer with a passion for creating beautiful websites.

I specialize in JavaScript, React, and Node.js UI/UX design and love turning ideas into reality.

When I’m not working, I enjoy traveling,reading,exploring new technologies.

Let’s work together to make something great!
</p>
<div className="flex justify-center">
<Link to="about" className="text-center text-cyan-200 text-base mt-9 btn px-5 bg-orange-700">Learn More</Link>
</div>
<div className="bg-gray-100 rounded-b-[160px] rounded-t-[160px] pb-20 mt-9">

<motion.div
    animate={{ y:[ 10, 100, 10] }}
    transition={{ duration: 25 ,delay:2, repeat:Infinity}}
>
    <motion.h1
     animate={{background:["#A294F9","#4F1787","#8D77AB","#FFF9BF","#80C4E9","#DC0083"]}}
     transition={{ duration: 5 ,delay:1, repeat:Infinity}}
    className="text-4xl w-60 text-white font-bold ml-28 mt-20 mb-40 border-y-2 border-sky-500 rounded-2xl py-4 text-center flex items-center gap-3 justify-center"><img src="https://img.icons8.com/?size=50&id=52234&format=png" alt="" /> Skills</motion.h1>
</motion.div>
<div className="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 lg:px-20">
<div className="text-center border-2 border-sky-300 rounded-2xl p-5 bg-sky-50 shadow-lg">
        <img className="mx-auto" src="https://img.icons8.com/?size=50&id=10246&format=png" alt="" />
        <h1 className="text-3xl font-bold mb-3 mt-3">HTML</h1>
        <p className="text-sm font-semibold">Proficient in crafting semantic, accessible, and SEO-friendly HTML structures for web development. Skilled in creating responsive layouts, integrating multimedia elements, and ensuring cross-browser compatibility.</p>
    </div>
<div className="text-center border-2 border-sky-300 rounded-2xl p-5 bg-sky-50 shadow-lg">
        <img className="mx-auto" src="https://img.icons8.com/?size=48&id=11935&format=png" alt="" />
        <h1 className="text-3xl font-bold mb-3 mt-3">CSS</h1>
        <p className="text-sm font-semibold">Proficient in writing clean, responsive, and maintainable CSS for modern web design. Skilled in using CSS3 features like Flexbox, Grid, animations, transitions, and pseudo-classes. Experienced in implementing mobile-first design, cross-browser compatibility, and pre-processors like SASS or frameworks like Tailwind CSS.</p>
    </div>
<div className="text-center border-2 border-sky-300 rounded-2xl p-5 bg-sky-50 shadow-lg">
        <img className="mx-auto" src="https://img.icons8.com/?size=48&id=4PiNHtUJVbLs&format=png" alt="" />
        <h1 className="text-3xl font-bold mb-3 mt-3">Tailwind css</h1>
        <p className="text-sm font-semibold">Proficient in using Tailwind CSS to create responsive, utility-first designs with a focus on speed and consistency. Skilled in customizing themes, applying advanced layouts, and integrating Tailwind with frameworks like React for modern, visually appealing web applications.</p>
    </div>
<div className="text-center border-2 border-sky-300 rounded-2xl p-5 bg-sky-50 shadow-lg">
        <img className="mx-auto" src="https://img.icons8.com/?size=48&id=74402&format=png" alt="" />
        <h1 className="text-3xl font-bold mb-3 mt-3">Mongodb</h1>
        <p className="text-sm font-semibold">Experienced in designing and managing NoSQL databases with MongoDB, including creating schemas, managing collections, and writing efficient queries. Proficient in using MongoDB Atlas, aggregation pipelines, indexing, and integrating MongoDB with backend frameworks like Express.js for building scalable applications.</p>
    </div>
    <div className="text-center border-2 border-sky-300 rounded-2xl p-5 bg-sky-50 shadow-lg">
        <img className="mx-auto" src="https://img.icons8.com/?size=64&id=Nkym0Ujb8VGI&format=png" alt="" />
        <h1 className="text-3xl font-bold mb-3 mt-3">JavaScript</h1>
        <p className="text-sm font-semibold">Proficient in JavaScript programming, including DOM manipulation, event handling, asynchronous operations with Promises/async-await, ES6+ syntax, and debugging. Experienced in creating dynamic web applications and integrating APIs.</p>
    </div>
    <div className="text-center border-2 border-sky-300 rounded-2xl p-5 bg-sky-50 shadow-lg">
        <img className="mx-auto" src="https://img.icons8.com/?size=64&id=p57acgidi9bj&format=png" alt="" />
        <h1 className="text-3xl font-bold mb-3 mt-3">React</h1>
        <p className="text-sm font-semibold">Experienced in building dynamic user interfaces with React, including component-based architecture, state management using hooks (useState, useEffect, etc.), React Router for navigation, and integrating REST APIs. Proficient in optimizing performance and managing global state with tools like Redux or Context API.</p>
    </div>
    <div className="text-center border-2 border-sky-300 rounded-2xl p-5 bg-sky-50 shadow-lg">
        <img className="mx-auto" src="https://img.icons8.com/?size=64&id=2ZOaTclOqD4q&format=png" alt="" />
        <h1 className="text-3xl font-bold mb-3 mt-3">Express JS</h1>
        <p className="text-sm font-semibold">Skilled in building robust backend applications with Express.js, including creating RESTful APIs, middleware integration, routing, and database connectivity with MongoDB or other databases. Experienced in implementing authentication, error handling, and performance optimization for scalable web applications.</p>
    </div>
</div>


</div>
        </div>
    );
};

export default AboutMe;
