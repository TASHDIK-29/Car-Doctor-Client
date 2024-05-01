import img1 from '../../assets/images/banner/1.jpg'
import img2 from '../../assets/images/banner/2.jpg'
import img3 from '../../assets/images/banner/3.jpg'
import img4 from '../../assets/images/banner/4.jpg'
import img5 from '../../assets/images/banner/5.jpg'
import img6 from '../../assets/images/banner/6.jpg'


const Banner = () => {
    return (
        <div className="carousel w-full">
            <div id="slide1" className="h-screen carousel-item relative w-full bg-gradient-to-r rounded-2xl">
                <img src={img1} className="w-full  rounded-2xl" />
                <div className='absolute w-full h-full  rounded-2xl'>
                    <div className='border w-full h-full flex flex-col justify-center space-y-10 bg-black opacity-70  rounded-2xl'>
                        <h1 className='text-white w-1/3 ml-12  text-6xl font-bold'>Affordable Price For Car Servicing</h1>
                        <p className='text-white  w-1/3 ml-12 text-xl font-semibold'>There are many variations of passages of  available, but the majority have suffered alteration in some form</p>
                        <div className='space-x-4 ml-12 '>
                            <button className="btn btn-secondary">Discover More</button>
                            <button className="btn btn-outline btn-secondary">Latest Project</button>
                        </div>
                    </div>
                </div>
                <div className="absolute flex justify-end space-x-4 transform -translate-y-1/2 left-5 right-5 bottom-0">
                    <a href="#slide6" className="btn btn-circle">❮</a>
                    <a href="#slide2" className="btn btn-circle">❯</a>
                </div>
            </div>
            <div id="slide2" className="h-screen carousel-item relative w-full">
                <img src={img2} className="w-full" />
                <div className='absolute w-full h-full'>
                    <div className='border w-full h-full flex flex-col justify-center space-y-10 bg-black opacity-70'>
                        <h1 className='text-white w-1/3 ml-12  text-6xl font-bold'>Affordable Price For Car Servicing</h1>
                        <p className='text-white  w-1/3 ml-12 text-xl font-semibold'>There are many variations of passages of  available, but the majority have suffered alteration in some form</p>
                        <div className='space-x-4 ml-12 '>
                            <button className="btn btn-secondary">Discover More</button>
                            <button className="btn btn-outline btn-secondary">Latest Project</button>
                        </div>
                    </div>
                </div>
                <div className="absolute flex justify-end space-x-4 transform -translate-y-1/2 left-5 right-5 bottom-0">
                    <a href="#slide1" className="btn btn-circle">❮</a>
                    <a href="#slide3" className="btn btn-circle">❯</a>
                </div>
            </div>
            <div id="slide3" className="h-screen carousel-item relative w-full">
                <img src={img3} className="w-full" />
                <div className='absolute w-full h-full'>
                    <div className='border w-full h-full flex flex-col justify-center space-y-10 bg-black opacity-70'>
                        <h1 className='text-white w-1/3 ml-12  text-6xl font-bold'>Affordable Price For Car Servicing</h1>
                        <p className='text-white  w-1/3 ml-12 text-xl font-semibold'>There are many variations of passages of  available, but the majority have suffered alteration in some form</p>
                        <div className='space-x-4 ml-12 '>
                            <button className="btn btn-secondary">Discover More</button>
                            <button className="btn btn-outline btn-secondary">Latest Project</button>
                        </div>
                    </div>
                </div>
                <div className="absolute flex justify-end space-x-4 transform -translate-y-1/2 left-5 right-5 bottom-0">
                    <a href="#slide2" className="btn btn-circle">❮</a>
                    <a href="#slide4" className="btn btn-circle">❯</a>
                </div>
            </div>
            <div id="slide4" className="h-screen carousel-item relative w-full">
                <img src={img4} className="w-full" />
                <div className='absolute w-full h-full'>
                    <div className='border w-full h-full flex flex-col justify-center space-y-10 bg-black opacity-70'>
                        <h1 className='text-white w-1/3 ml-12  text-6xl font-bold'>Affordable Price For Car Servicing</h1>
                        <p className='text-white  w-1/3 ml-12 text-xl font-semibold'>There are many variations of passages of  available, but the majority have suffered alteration in some form</p>
                        <div className='space-x-4 ml-12 '>
                            <button className="btn btn-secondary">Discover More</button>
                            <button className="btn btn-outline btn-secondary">Latest Project</button>
                        </div>
                    </div>
                </div>
                <div className="absolute flex justify-end space-x-4 transform -translate-y-1/2 left-5 right-5 bottom-0">
                    <a href="#slide3" className="btn btn-circle">❮</a>
                    <a href="#slide5" className="btn btn-circle">❯</a>
                </div>
            </div>
            <div id="slide5" className="h-screen carousel-item relative w-full">
                <img src={img5} className="w-full" />
                <div className='absolute w-full h-full'>
                    <div className='border w-full h-full flex flex-col justify-center space-y-10 bg-black opacity-70'>
                        <h1 className='text-white w-1/3 ml-12  text-6xl font-bold'>Affordable Price For Car Servicing</h1>
                        <p className='text-white  w-1/3 ml-12 text-xl font-semibold'>There are many variations of passages of  available, but the majority have suffered alteration in some form</p>
                        <div className='space-x-4 ml-12 '>
                            <button className="btn btn-secondary">Discover More</button>
                            <button className="btn btn-outline btn-secondary">Latest Project</button>
                        </div>
                    </div>
                </div>
                <div className="absolute flex justify-end space-x-4 transform -translate-y-1/2 left-5 right-5 bottom-0">
                    <a href="#slide4" className="btn btn-circle">❮</a>
                    <a href="#slide6" className="btn btn-circle">❯</a>
                </div>
            </div>
            <div id="slide6" className="h-screen carousel-item relative w-full">
                <img src={img6} className="w-full" />
                <div className='absolute w-full h-full'>
                    <div className='border w-full h-full flex flex-col justify-center space-y-10 bg-black opacity-70'>
                        <h1 className='text-white w-1/3 ml-12  text-6xl font-bold'>Affordable Price For Car Servicing</h1>
                        <p className='text-white  w-1/3 ml-12 text-xl font-semibold'>There are many variations of passages of  available, but the majority have suffered alteration in some form</p>
                        <div className='space-x-4 ml-12 '>
                            <button className="btn btn-secondary">Discover More</button>
                            <button className="btn btn-outline btn-secondary">Latest Project</button>
                        </div>
                    </div>
                </div>
                <div className="absolute flex justify-end space-x-4 transform -translate-y-1/2 left-5 right-5 bottom-0">
                    <a href="#slide5" className="btn btn-circle">❮</a>
                    <a href="#slide1" className="btn btn-circle">❯</a>
                </div>
            </div>
        </div>
    );
};

export default Banner;