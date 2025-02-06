

const Footer = () => {
    return (
//         <footer className="footer bg-slate-200 py-9 items-center p-4">
//   <aside className="grid-flow-col items-center">
//   <a className="text-2xl">
//         <img src="https://img.icons8.com/?size=64&id=J3nZHWgT1e7m&format=png" alt="" />
//       </a>
//     <p className="text-black text-xl font-bold">All right reserved</p>
//   </aside>
//   <nav className="grid-flow-col gap-4 md:place-self-center md:justify-self-end">
//     <a  href="https://www.facebook.com/profile.php?id=100010666809633" className="bg-sky-400 p-2 rounded-md">
//       <svg
//         xmlns="http://www.w3.org/2000/svg"
//         width="24"
//         height="24"
//         viewBox="0 0 24 24"
//         className="fill-current">
//         <path
//           d="M9 8h-3v4h3v12h5v-12h3.642l.358-4h-4v-1.667c0-.955.192-1.333 1.115-1.333h2.885v-5h-3.808c-3.596 0-5.192 1.583-5.192 4.615v3.385z"></path>
//       </svg>
//     </a>
//   </nav>
// </footer>

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
      <a href="https://www.facebook.com/profile.php?id=100010666809633" target="https://www.facebook.com/profile.php?id=100010666809633">
       <img src="https://img.icons8.com/?size=48&id=118497&format=png" alt="" />
      </a>
      <a href="https://github.com/Easha-gif" target="https://github.com/Easha-gif">
       <img className='h-12' src="https://img.icons8.com/?size=80&id=efFfwotdkiU5&format=png" alt="" />
      </a>
    </div>
  </nav>
  </div>
</footer>


    );
};

export default Footer;