import React from 'react';
import Button from './subcompenets/Button';

const Hero = () => {
    return (
        <div className="relative w-full">
            
            <div className="hero-overlay-img">
                <img
                    src="https://lms.codevocado.in/static/media/header.b6b686e72d983bb6c9dc.webp"
                    alt="hero"
                    className="object-cover w-full h-[270px] lg:h-[300px] xl:h-[330px]"
                />
            </div>

            
            <div className="absolute inset-0 flex pt-10 pl-10 md:pl-20  bg-black/45 text-white ">
                <div className="flex flex-col justify-center md:justify-normal items-center gap-4 w-max">
                    <p className='text-ash text-[2rem] md:text-[2.5rem] font-bold'>Learn with Us</p>
                    <p className='md:text-xl '>Discover your potential with our expert-curated courses.</p>
                    <Button text={"Explore Courses"} />
                </div>
            </div>
        </div>
    );
};

export default Hero;
