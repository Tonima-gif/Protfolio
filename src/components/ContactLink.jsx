import { useRef } from "react";
import Swal from "sweetalert2";
import emailjs from '@emailjs/browser';

const ContactLink = () => {
    const form = useRef();
    const sendEmail = (e) => {
      e.preventDefault();

   emailjs
        .sendForm('service_yig0szq', 'template_3cv1vcv', form.current, {
          publicKey: "J2PdFFxWhaOrI8leI",
        })
        .then(
          () => {
            Swal.fire({
                title: "Email  Successfully Send!",
                icon: "success",
                draggable: true
              });
          },
          (error) => {
            Swal.fire({
                icon: "error",
                title: "Oops...",
                text: `${error.message}`
              });
          },
        );
    };
    return (
        <div className="mb-36 pt-16">
            <h1 className="text-4xl font-bold mt-16 mb-10 text-center">Contact Me</h1>
           <div className="flex flex-col lg:flex-row gap-16 justify-center items-center lg:px-16">
           <form ref={form} onSubmit={sendEmail} className="flex flex-col gap-5 w-full px-3 lg:w-1/2">
               <input type="text" placeholder="Name" className="input input-bordered" name="name" /> 
               <input type="email" placeholder="Email" className="input input-bordered" name="email" /> 
               <textarea name="message" placeholder="Message" className="border-2 rounded-md px-2" cols="5" rows="5"></textarea>
               <button className="btn bg-sky-300">Send</button>
            </form>
            <div className="w-full px-3 lg:w-1/2">
                <p className="text-xl font-bold flex items-center gap-3 justify-start"><img src="https://img.icons8.com/?size=40&id=30568&format=png" alt="" /> Rajshahi ,Bangladesh</p>
                <p className="text-base font-semibold flex items-center gap-2 justify-start"><img src="https://img.icons8.com/?size=80&id=108806&format=png" alt="" /> eashakhan000@gmail.com</p>
                <p className="text-base font-semibold flex items-center gap-3 justify-start"><img src="https://img.icons8.com/?size=48&id=58pGdHAS6Va3&format=gif" alt="" /> 01622990670</p>
                <p  className="text-base font-semibold flex items-center gap-3 justify-start"><img src="https://img.icons8.com/?size=48&id=16713&format=png" alt="" /> 01622990670</p>
            </div>
           </div>
        </div>
    );
};

export default ContactLink;