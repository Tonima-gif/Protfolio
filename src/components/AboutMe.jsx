import { motion } from "motion/react"


const AboutMe = () => {
    return (
        <div  id="about">
            <div className="lg:w-80 mx-auto my-10">
            <h1 className="text-4xl text-blue-950 font-bold border-y-2 border-blue-500 rounded-2xl py-4 text-center">About Me</h1>
       </div>

<p className="text-xl text-center text-blue-950 font-bold lg:px-20 mb-10">
Hello! Im Mst.Tonima Tajrin, a frontend developer with a passion for creating beautiful, user-friendly interfaces. My programming journey started with a fascination for how design and functionality come together to enhance the user experience. Over the years, I’ve honed my skills in HTML, CSS, JavaScript , ReactJs , Next.Js , Mongodb ,and modern frontend frameworks to build websites and web applications that are both visually appealing and easy to use.

I specialize in crafting intuitive, responsive designs, and I thrive on the challenge of turning complex requirements into seamless, interactive experiences. Whether its optimizing performance or ensuring that a design looks great on any device, I enjoy every aspect of the frontend development process.

Outside of programming, I love sports, photography, drawing, traveling, etc. These activities help me maintain a balanced life and fuel my creativity, which I bring into my work.

I believe in continuous learning and staying up-to-date with the latest frontend trends. Let’s connect and create something amazing together!
</p>
<div className="flex justify-center">
</div>
<div id="skill" className="bg-gray-100 lg:rounded-b-[160px] rounded-t-[160px] pb-16 mt-9">

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
    <div className="text-center border-2 border-sky-300 rounded-2xl p-5 bg-sky-50 shadow-lg">
        <img className="mx-auto" src="https://img.icons8.com/?size=48&id=biSzm3zgI5HM&format=png" alt="" />
        <h1 className="text-3xl font-bold mb-3 mt-3">Next JS</h1>
        <p className="text-sm font-semibold">Proficient in Next.js for building scalable, high-performance web applications. Experienced with server-side rendering (SSR), static site generation (SSG), API routes, and dynamic routing. Skilled in integrating Tailwind CSS, and state management solutions like React Query. Strong understanding of authentication (NextAuth.js) and deployment on Vercel or AWS.</p>
    </div>
    <div className="text-center border-2 border-sky-300 rounded-2xl p-5 bg-sky-50 shadow-lg">
        <img className="mx-auto" src="https://img.icons8.com/?size=80&id=9AHxUOg7E9q2&format=png" alt="" />
        <h1 className="text-3xl font-bold mb-3 mt-3">Firebase</h1>
        <p className="text-sm font-semibold">Experienced in Firebase services, including Firestore, Authentication, Cloud Functions, and Hosting. Skilled in real-time database management, serverless architecture, and seamless integration with Next.js and React applications. Proficient in implementing security rules, optimizing queries, and leveraging Firebase for scalable backend solutions.</p>
    </div>
</div>


</div>
        </div>
    );
};

export default AboutMe;
