
import adopt from '../assets/Screenshot (41).png'

const ProjectsDetails = () => {
    return (
        <div className="hero bg-base-200 py-4 mb-10">
  <div className="hero-content flex-col lg:flex-row-reverse">
    <img
      src={adopt}
      className="rounded-lg shadow-2xl w-[600px] h-[300px]" />
    <div>
      <h1 className="text-5xl font-bold text-cyan-700 mt-28">Adoption Pets</h1>
      <p className='text-lg my-7 font-bold'>Description : Here you Adopt pets in yous Choice.We have three types of pets here Dogs,Cats and Rabbits. They are high quality and attractive.You can buy them from us at cheap prices.
      </p>
      <div>
        <p  className='text-sm my-5 font-semibold'>Features :

In this project we have three to four types of Category Buttons on which click on the buttons you will see the pets of that category.
We have different types of pets cards in this project, each of the cards has a Details button, click on the details, you will get all types of information about pets.
And by clicking the Adopt button you can adopt that pet.
You can mark the page image of your choice by clicking on the like button.
You can click on the Short By Price button to know the price of pets from the highest to the lowest.
ES6 Features: 1.Const 2.Let 3.forEach 4.async function 5.Arrow function 6.Default parameter.</p>
      </div>
      <a href="https://dainty-rugelach-14c1de.netlify.app/" target='https://dainty-rugelach-14c1de.netlify.app/' className='btn bg-blue-300 px-6 text-base font-bold'>Live site</a>
    </div>
  </div>
</div>
    );
};

export default ProjectsDetails;