import person from '../assets/images/about_us/person.jpg'
import parts from '../assets/images/about_us/parts.jpg'


const AboutUs = () => {
  return (
    <div className=''>
      <div className=" flex flex-col lg:flex-row gap-6 justify-between ">
        <div className='w-full relative'>
        <img
          src={person}
          className=" rounded-lg shadow-2xl w-4/5 h-[40vh]"
        />
         <img
          src={parts}
          className=" w-1/2 rounded-lg shadow-2xl absolute right-5 top-1/2 h-[30vh] bg-white p-2"
        />
        </div>
        <div className='w-full space-y-5 '>
            <h2 className='text-[#FF3811] text-xl font-bold '>About Us</h2>
          <h1 className="text-5xl font-bold ">We are qualified & of experience in this field</h1>
          <p  className='text-[#737373] capitalize'>
          There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomized words which do not look even slightly believable. 
          </p>
          <p className='text-[#737373] capitalize'>The majority have suffered alteration in some form, by injected humour, or randomized words which do not  look even slightly believable. </p>
          <button className="btn bg-[#FF3811] text-white font-bold text-xl">Get More Info</button>
        </div>
      </div>
    </div>
  );
};

export default AboutUs;
