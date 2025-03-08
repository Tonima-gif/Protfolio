

const Footer = () => {
    return (
<footer className="footer bg-gray-200 text-black p-10 rounded-md flex flex-col lg:flex-row justify-between items-center">
<div>
  
<img className="w-24" src="https://img.icons8.com/?size=64&id=J3nZHWgT1e7m&format=png" alt="" />
    <p className="text-2xl font-bold">
    Portfolio
    </p>
</div>
  <div>
  <nav>
    <h6 className="text-lg font-bold text-gray-700 py-3">Social Links</h6>
    <div className="grid grid-flow-col gap-4">
      <a href="https://www.linkedin.com/in/easha-khan-849809345/" target="https://www.linkedin.com/in/easha-khan-849809345/">
      <img src="https://img.icons8.com/?size=48&id=13930&format=png" alt="" />
      </a>
      <a href="https://github.com/Tonima-gif" target="https://github.com/Tonima-gif">
       <img className='h-12' src="https://img.icons8.com/?size=80&id=efFfwotdkiU5&format=png" alt="" />
      </a>
    </div>
  </nav>
  </div>
</footer>


    );
};

export default Footer;