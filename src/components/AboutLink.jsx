

const AboutLink = () => {
    return (
        <div>
            <h1 className="text-4xl font-bold text-center pt-24">About Me</h1>
            <p className="text-xl text-center text-gray-600 font-bold lg:px-20 mb-10">
I’m Eheteshamul Easha, a Web Developer with a passion for creating beautiful websites.

I specialize in JavaScript, React, and Node.js UI/UX design and love turning ideas into reality.

When I’m not working, I enjoy traveling,reading,exploring new technologies.

Let’s work together to make something great!
</p>

<h1 className="text-3xl mb-10 font-bold flex justify-center items-center"><img src="https://img.icons8.com/?size=80&id=GSRBDg1Wm6Dn&format=png" alt="" /> Education</h1>
<div className="flex flex-col lg:flex-row justify-center items-center gap-16">
<div>
<p className="text-xl font-bold ">Hsc</p>
<p className="text-sm font-semibold ">Rajshahi collage</p>
</div>
<div>
<p className="text-xl font-bold ">Bss Honors</p>
<p className="text-sm font-semibold">Varendra University</p>
</div>
</div>
        </div>
    );
};

export default AboutLink;