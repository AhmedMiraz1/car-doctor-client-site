import img1 from '../assets/images/banner/1.jpg'
import img2 from '../assets/images/banner/2.jpg'
import img3 from '../assets/images/banner/3.jpg'
import img4 from '../assets/images/banner/4.jpg'
// import img5 from '../assets/images/banner/5.jpg'
// import img6 from '../assets/images/banner/6.jpg'


const Banner = () => {
  return (
    <div className="carousel w-full h-full md:h-[80vh] rounded-xl">
      <div id="slide1" className="carousel-item relative w-full">
        <img
          src={img1}
          className="w-full rounded-xl"
        />
        <div className="absolute rounded-xl flex flex-col h-full left-0 pl-28 py-28 right-5 bottom-0 bg-gradient-to-r from-[#151515] to-[rgba(21, 21, 21, 0.00)]">
            <div className='w-1/2'>
                <h2 className='text-6xl font-bold text-white '>Affordable <br /> Price For Car <br /> Servicing</h2>
                <p className='my-6 text-white'>There are many variations of passages of  available, but the majority have suffered alteration in some form</p>
            </div>
        
          <div>
            <button className='btn btn-primary mr-5'>Discover More</button>
            <button className='btn btn-outline btn-secondary'>Latest Project</button>
          </div>
        </div>
        <div className="absolute flex justify-end transform -translate-y-1/2 left-5 right-5 bottom-0">
          <a href="#slide4" className="btn btn-circle mr-5">
            ❮
          </a>
          <a href="#slide2" className="btn btn-circle">
            ❯
          </a>
        </div>
      </div>
      <div id="slide2" className="carousel-item relative w-full">
        <img
          src={img2}
          className="w-full rounded-xl"
        />
         <div className="absolute  rounded-xl flex flex-col h-full left-0 pl-28 py-28 right-5 bottom-0 bg-gradient-to-r from-[#151515] to-[rgba(21, 21, 21, 0.00)]">
            <div className='w-1/2'>
                <h2 className='text-6xl font-bold text-white '>Affordable <br /> Price For Car <br /> Servicing</h2>
                <p className='my-6 text-white'>There are many variations of passages of  available, but the majority have suffered alteration in some form</p>
            </div>
        
          <div>
            <button className='btn btn-primary mr-5'>Discover More</button>
            <button className='btn btn-outline btn-secondary'>Latest Project</button>
          </div>
        </div>
        <div className="absolute flex justify-end transform -translate-y-1/2 left-5 right-5 bottom-0">
          <a href="#slide1" className="btn btn-circle mr-5">
            ❮
          </a>
          <a href="#slide3" className="btn btn-circle">
            ❯
          </a>
        </div>
      </div>
      <div id="slide3" className="carousel-item relative w-full">
        <img
          src={img3}
          className="w-full rounded-xl"
        />
         <div className="absolute  rounded-xl flex flex-col h-full left-0 pl-28 py-28 right-5 bottom-0 bg-gradient-to-r from-[#151515] to-[rgba(21, 21, 21, 0.00)]">
            <div className='w-1/2'>
                <h2 className='text-6xl font-bold text-white '>Affordable <br /> Price For Car <br /> Servicing</h2>
                <p className='my-6 text-white'>There are many variations of passages of  available, but the majority have suffered alteration in some form</p>
            </div>
        
          <div>
            <button className='btn btn-primary mr-5'>Discover More</button>
            <button className='btn btn-outline btn-secondary'>Latest Project</button>
          </div>
        </div>
         <div className="absolute flex justify-end transform -translate-y-1/2 left-5 right-5 bottom-0">
          <a href="#slide2" className="btn btn-circle mr-5">
            ❮
          </a>
          <a href="#slide4" className="btn btn-circle">
            ❯
          </a>
        </div>
      </div>
      <div id="slide4" className="carousel-item relative w-full">
        <img
          src={img4}
          className="w-full rounded-xl"
        />
         <div className="absolute rounded-xl flex flex-col h-full left-0 pl-28 py-28 right-5 bottom-0 bg-gradient-to-r from-[#151515] to-[rgba(21, 21, 21, 0.00)]">
            <div className='w-1/2'>
                <h2 className='text-6xl font-bold text-white '>Affordable <br /> Price For Car <br /> Servicing</h2>
                <p className='my-6 text-white'>There are many variations of passages of  available, but the majority have suffered alteration in some form</p>
            </div>
        
          <div>
            <button className='btn btn-primary mr-5'>Discover More</button>
            <button className='btn btn-outline btn-secondary'>Latest Project</button>
          </div>
        </div>
        <div className="absolute flex justify-end transform -translate-y-1/2 left-5 right-5 bottom-0">
          <a href="#slide3" className="btn btn-circle mr-5">
            ❮
          </a>
          <a href="#slide1" className="btn btn-circle">
            ❯
          </a>
        </div>
      </div>
      
    </div>
  );
};

export default Banner;
