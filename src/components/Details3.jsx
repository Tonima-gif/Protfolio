


const Details3 = () => {
    return (
      <div className="hero bg-base-200 py-4 mb-10">
      <div className="hero-content flex-col lg:flex-row-reverse">
        <div>
          <h1 className="text-5xl font-bold text-cyan-700 mt-28">Volunteer</h1>
          <p className='text-base my-7 font-bold'>Description :Volunteer Connect is a platform designed to help organizations manage their volunteer programs effectively. It allows users to browse upcoming volunteer events, sign up for opportunities, and track their volunteering hours. Organizations can create and manage events, track volunteer participation, and communicate with volunteers through the platform. The website aims to connect passionate individuals with meaningful volunteer opportunities, helping them make a positive impact in their communities.</p>
          <div>
            <p  className='text-base my-5 font-semibold'>Technology :
            Html<br></br>
            CSS<br></br>

tailwind css<br></br>

MongoDb<br></br>
Firebase<br></br>
Express Js<br></br>
</p>
          </div>
          <a href="https://sparkly-rolypoly-810eb2.netlify.app/" target="https://sparkly-rolypoly-810eb2.netlify.app/" className='btn bg-blue-300 px-6 text-base font-bold'>Live site</a>
          <a href="https://github.com/Tonima-gif/volunteer-client" target="https://github.com/Tonima-gif/volunteer-client" className='btn bg-blue-300 px-6 text-base font-bold'>Github</a>
      
      <p className='text-black text-lg font-bold py-4'>Challenges : <span className='text-base text-gray-700 m-2'>
      1.Designing a user-friendly interface for both volunteers and organizations to navigate and manage events.
      </span>
      <span className='text-base text-gray-700 m-2'>
      2.Implementing the sign-up system where users can register for events, while considering the capacity limits for each event.
      </span> </p>
      <p className='text-black text-lg font-bold py-4'>Potential improvements and future plans  : <span className='text-base text-gray-700 m-2'>
      1.Plan to add a volunteer profile feature where users can track their volunteer hours and achievements.
      </span>
      <span className='text-base text-gray-700 m-2'>
      2.Incorporate a rating and feedback system for volunteers and event organizers to improve future experiences.
      </span>
      <span className='text-base text-gray-700 m-2'>
      3.Introduce event reminders via email/SMS for volunteers before the event day
      </span>
      </p>
        </div>
      </div>
    </div>
    );
};

export default Details3;