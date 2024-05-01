import person from '../../assets/images/about_us/person.jpg'
import parts from '../../assets/images/about_us/parts.jpg'
const About = () => {
    return (
        <div className="hero h-screen bg-white">
            <div className="hero-content h-full flex-col lg:flex-row">
                <div className='w-2/5 h-4/6 relative'>
                    <img src={person} className="w-4/5 h-full rounded-lg " />
                    <img src={parts} className="w-3/5 h-2/3 border-8 border-white absolute right-0 top-1/2 rounded-lg " />
                </div>
                <div className='w-3/5 space-y-2'>
                    <h1 className="text-xl text-[#FF3811] font-bold">About Us</h1>
                    <h1 className="text-5xl font-bold">We are qualified <br /> & of experience <br /> in this field</h1>
                    <p className="py-6 w-2/3">There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. </p>
                    <p className="py-6 w-2/3">There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. </p>
                    <button className="btn bg-[#FF3811] hover:bg-[#FF3811] text-white font-semibold text-lg">Get More Info</button>
                </div>
            </div>
        </div>
    );
};

export default About;