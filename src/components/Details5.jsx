

const Details5 = () => {
    return (
        <div className="hero bg-base-200 py-4 mb-10">
        <div className="hero-content flex-col lg:flex-row-reverse">
          <div>
            <h1 className="text-5xl font-bold text-cyan-700 mt-28">Cricket</h1>
            <p className='text-base my-7 font-bold'>Description :This project is focused on building a fantasy cricket platform with a unique player buy system where users can purchase players for their teams based on their available credits. The system includes a limit feature to prevent users from exceeding a certain budget or buying more than the allowed number of players per team. The platform allows users to manage their virtual teams, make strategic buys, and track player performance based on live match data and player stats. The goal is to provide a dynamic, interactive experience for cricket fans who love fantasy sports.</p>
            <div>
              <p  className='text-base my-5 font-semibold'>Technology :
              Html<br></br>
              CSS<br></br>

tailwind css<br></br>

RESTful APIs<br></br>
</p>
            </div>
            <a href="https://lovely-frangipane-28ac5d.netlify.app/" target="https://lovely-frangipane-28ac5d.netlify.app/" className='btn bg-blue-300 px-6 text-base font-bold'>Live site</a>
            <a href="https://github.com/Easha-gif/asset-management" target="https://github.com/Easha-gif/asset-management" className='btn bg-blue-300 px-6 text-base font-bold'>Github</a>
        
        <p className='text-black text-lg font-bold py-4'>Challenges : <span className='text-base text-gray-700 m-2'>
        1.Implementing a player buy system with real-time data synchronization to ensure accurate player availability and cost.
        </span>
        <span className='text-base text-gray-700 m-2'>
        2.Designing the limit system to ensure users can only buy within their budget or team restrictions.
        </span>
        <span className='text-base text-gray-700 m-2'>
        3.Handling dynamic updates as players values change based on their real-life performance.
        </span>
<span className='text-base text-gray-700 m-2'>4.Developing a smooth, intuitive UI to show the remaining budget, available players, and transaction history.</span>
        </p>
        <p className='text-black text-lg font-bold py-4'>Potential improvements and future plans  : <span className='text-base text-gray-700 m-2'>
        1.Plan to introduce different player tiers (e.g., star players, underperforming players) that affect their buying cost.
        </span>
        <span className='text-base text-gray-700 m-2'>
        2.Add functionality for users to trade players between teams and manage team strategies.
        </span>
        <span className='text-base text-gray-700 m-2'>
        3.Introduce a daily/weekly limit where users can only buy a limited number of players during that period.
        </span>
        </p>
          </div>
        </div>
      </div>
    );
};

export default Details5;