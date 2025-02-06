import React, { useState } from 'react';
import CourseCard from '../components/subcompenets/CourseCard';
import EnrollModal from '../components/EnrollModal';

const Courses = () => {
    const [selectedCourse, setSelectedCourse] = useState(null);

    const courses = [
        { id: 1, title: "Certificate Course in Structured Query Language using MySQL", domain: "SQL", description: "Learn the fundamentals of SQL and how to manage databases effectively." },
        { id: 2, title: "Introduction to Python", domain: "Python", description: "Get started with Python programming, covering basic concepts and practical applications." },
        { id: 3, title: "Certificate Course in Basic Python", domain: "Python", description: "A comprehensive course to build your Python skills from scratch." },
        { id: 4, title: "Advanced Program in Cyber Security", domain: "Cyber Security", description: "Deep dive into advanced concepts in Cyber Security and threat management.", price: 4590 },
        { id: 5, title: "Certificate Course in Linux Server Administration", domain: "Linux", description: "Gain expertise in Linux server management and administration.", price: 850 },
        { id: 6, title: "Certificate Course in Cyber Security", domain: "Cyber Security", description: "Understand the principles of Cyber Security and how to implement them effectively.", price: 1550 },
        { id: 7, title: "AWS Certification Course", domain: "AWS", description: "Master Amazon Web Services and get certified in cloud computing and cloud architecture.", price: 950 },
        { id: 8, title: "HTML Certification Course", domain: "Web Development", description: "Learn HTML, the foundational language of web development, and get certified in building websites.", price: "Free" },
        { id: 9, title: "Javascript Certification Course", domain: "Web Development", description: "Become proficient in JavaScript programming and enhance your web development skills.", price: "Free" },
        { id: 10, title: "Basic AI Certification Course", domain: "AI", description: "Learn the basics of Artificial Intelligence and its applications in the real world.", price: "Free" },
        { id: 11, title: "ReactJS Certification Course", domain: "Web Development", description: "Master ReactJS to build interactive user interfaces and dynamic web applications.", price: "Free" },
        { id: 12, title: "NodeJS Certification Course", domain: "Web Development", description: "Learn how to build server-side applications using Node.js, a powerful backend framework.", price: "Free" },
        { id: 13, title: "React Native Certification Course", domain: "Mobile Development", description: "Get certified in building cross-platform mobile applications using React Native.", price: 650 },
        { id: 14, title: "AngularJS Certification Course", domain: "Web Development", description: "Learn AngularJS to create dynamic, single-page applications with ease.", price: "Free" },
        { id: 15, title: "TypeScript Certification Course", domain: "Web Development", description: "Understand the power of TypeScript to write clean, maintainable, and scalable JavaScript applications.", price: "Free" },
        { id: 16, title: "C Program Certification Course", domain: "Programming", description: "Master the C programming language and become proficient in developing software applications and system-level programming.", price: "Free" }
    ];

    return (
        <div className='py-5 px-4'>
            <div className="courses-description flex flex-col items-center mt-9 mb-2 text-center">
                <p className='text-[2rem] font-bold text-ash'>Our Courses</p>
                <p className="text-lightash text-[1.2rem]">Browse our wide range of free courses and start learning today!</p>
            </div>
            <div className="courses grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5 place-items-center mb-4">
                {courses.map((course, index) => (
                    <CourseCard key={index} {...course} onEnroll={() => setSelectedCourse(course.title)} />
                ))}
            </div>
            {selectedCourse && <EnrollModal title={selectedCourse} onclose={() => setSelectedCourse(null)} />}
        </div>
    );
};

export default Courses;
