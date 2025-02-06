import React from 'react';
import Button from '../components/subcompenets/Button';
import CourseFooter from '../components/subcompenets/CourseFooter';
import { useParams } from 'react-router-dom';
import { coursesData } from './subcompenets/coursesData';
import white from '../assets/white.jpg';
import { motion } from "framer-motion";



const CoursePage = () => {
    const { id } = useParams();
    const courseData = coursesData[id];

    if (!courseData) {
        return (
            <div className="h-screen flex items-center justify-center">
                <p className="text-2xl text-gray-600">Course not found</p>
            </div>
        );
    }


    return (
        <div className="bg-[#F5F5F5]">
            <div className='max-w-[1200px] mx-auto pt-10'>

                <div className="img relative w-full overflow-hidden shadow-imgShadow rounded-xl">
                    <div className="w-full">
                        <img
                            src={courseData.image ? courseData.image : white}
                            alt={courseData.title}
                            className="w-full h-[480px] sm:h-full object-cover rounded-xl"
                        />
                    </div>
                    <div className="absolute inset-0 flex flex-col md:gap-5 items-center justify-start mt-0 sm:mt-12 md:mt-24 p-5 bg-gradient-to-t rounded-xl to-transparent text-white">
                        <motion.h1
                            initial={{ opacity: 0, y: 50 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 1.5, ease: "easeOut", delay: 0.5 }}
                            className="text-4xl sm:text-5xl md:text-6xl [text-shadow:1px_1px_3px_rgba(0,0,0,0.7)] mb-2 text-ash font-bold text-center w-[85%]"
                        >
                            {courseData.title}
                        </motion.h1>

                        <motion.p
                            initial={{ opacity: 0, y: 50 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 1.5, ease: "easeOut", delay: 0.7 }}
                            className="mb-4 md:text-2xl text-center font-semibold [text-shadow:1px_1px_3px_rgba(0,0,0,0.7)] w-[90%]"
                        >
                            {courseData.description}
                        </motion.p>

                        <motion.div
                            initial={{ opacity: 0, y: 50 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 1.5, ease: "easeOut", delay: 0.9 }}
                        >
                            <Button text="Enroll Now" className="md:text-xl md:px-7 md:py-3" />
                        </motion.div>
                    </div>
                </div>

                {/* Course Section */}
                <div className="course-sec mt-16 flex flex-col gap-6">
                    <div className="flex gap-6 flex-col md:flex-row">
                        {/* About Course */}
                        <div className="about-course w-full text-blueCol bg-white text-center shadow-imgShadow rounded-xl py-7 px-10 md:w-1/2  hover:-translate-y-2 transition-transform duration-300">
                            <h1 className="text-3xl text-center font-bold mb-3">About this Course</h1>
                            <p className="text-ash mb-3">{courseData.description}</p>
                            {courseData.aboutCourse.map((about, index) => (
                                <div key={index} className="mb-3 flex items-center gap-3">
                                    <svg stroke="currentColor" fill="currentColor" strokeWidth="0" viewBox="0 0 512 512" height="16px" width="16px" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M504 256c0 136.967-111.033 248-248 248S8 392.967 8 256 119.033 8 256 8s248 111.033 248 248zM227.314 387.314l184-184c6.248-6.248 6.248-16.379 0-22.627l-22.627-22.627c-6.248-6.249-16.379-6.249-22.628 0L216 308.118l-70.059-70.059c-6.248-6.248-16.379-6.248-22.628 0l-22.627 22.627c-6.248 6.248-6.248 16.379 0 22.627l104 104c6.249 6.249 16.379 6.249 22.628.001z"></path>
                                    </svg>
                                    <p className="text-ash text-lg">{about}</p>
                                </div>
                            ))}
                            <Button text="Enroll Now" />
                        </div>

                        {/* LMS Info */}
                        <div className="lms text-blueCol bg-white text-center shadow-imgShadow rounded-xl py-7 px-10 w-full md:w-1/2">
                            <h1 className="text-3xl text-center font-bold mb-3">Explore Our LMS Courses</h1>
                            <p className="text-ash mb-3">Our LMS platform offers affordable and high-quality learning opportunities to boost your career! Here's what you need to know about our course access and rewards:</p>
                            <div className="text-ash mb-3">
                                <p className="mb-1 text-lg font-bold">
                                    Affordable Fee: <span className="font-normal">Enroll in our courses for just ₹108 + GST.</span>
                                </p>
                                <p className="mb-1 text-lg font-bold">
                                    Exclusive Offer: <span className="font-normal">Achieve 95% or more in the exam, and you'll be eligible for an exclusive 65% discount on all courses.</span>
                                </p>
                                <p className="mb-2 text-lg font-bold">
                                    Certification: <span className="font-normal">Pass the test and earn a prestigious Certificate of Achievement, a testament to your hard work and knowledge.</span>
                                </p>
                                <p className="text-base font-medium">Don't miss this opportunity to learn, excel, and save while enhancing your skills!</p>
                            </div>
                            <Button text="Get Mock Test" />
                        </div>
                    </div>

                    {/* Instructor Section */}
                    <div className="instructor text-blueCol bg-white text-center shadow-imgShadow rounded-xl py-7 px-10 w-full md:w-1/2 hover:-translate-y-2 transition-transform duration-300">
                        <h1 className="text-3xl text-center font-bold mb-3">Instructor</h1>
                        <div className="instructor-details flex flex-col lg:flex-row items-center lg:items-start p-8 bg-[#F5F5F5] rounded-xl shadow-shadowcustom">
                            <img src="/images/john-smith.jpg" alt={courseData.instructor.name} className="rounded-full" />
                            <div className="instructor-description w-[90%] space-y-2">
                                <h1 className="text-3xl font-bold">{courseData.instructor.name}</h1>
                                <p className="text-ash font-medium text-lg">{courseData.instructor.bio}</p>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Reviews Section */}
                <div className="reviews text-blueCol text-center mt-12">
                    <h1 className='font-bold text-3xl'>Student Reviews</h1>
                    {courseData.reviews.map((review, index) => (
                        <div key={index} className="bg-white py-3 w-full shadow-shadowcustom mt-4 rounded-lg">
                            <h1 className='font-bold text-xl'>{review.name} - {review.rating} Stars</h1>
                            <p className='text-ash'>{review.comment}</p>
                        </div>
                    ))}
                </div>

                {/* Program Outcomes */}
                <div className="prg-outcomes text-white bg-blue-gradient px-8 py-5 rounded-xl mt-12">
                    <h1 className='font-bold text-4xl text-center'>Program Outcomes</h1>
                    <div className="prg mt-3 flex items-center flex-col md:flex-row">
                        <div className="prg-list text-orangeCol">
                            {courseData.programOutcomes.map((outcome, index) => (
                                <div key={index} className="mb-3 flex items-center gap-3 hover:translate-x-2 transition-transform duration-300">
                                    <svg stroke="currentColor" fill="currentColor" strokeWidth="0" viewBox="0 0 512 512" height="16px" width="16px" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M504 256c0 136.967-111.033 248-248 248S8 392.967 8 256 119.033 8 256 8s248 111.033 248 248zM227.314 387.314l184-184c6.248-6.248 6.248-16.379 0-22.627l-22.627-22.627c-6.248-6.249-16.379-6.249-22.628 0L216 308.118l-70.059-70.059c-6.248-6.248-16.379-6.248-22.628 0l-22.627 22.627c-6.248 6.248-6.248 16.379 0 22.627l104 104c6.249 6.249 16.379 6.249 22.628.001z"></path>
                                    </svg>
                                    <p className="text-lg text-white">{outcome}</p>
                                </div>
                            ))}
                        </div>
                        <div className="prg-img ml-12">
                            <img src="/images/prg-img.jpg" alt="Program Outcomes-Python" />
                        </div>
                    </div>
                </div>

                <CourseFooter />
            </div>
        </div>
    );
};

export default CoursePage;