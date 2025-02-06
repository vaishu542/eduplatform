import React from 'react';
import Button from './Button';
import { useNavigate } from 'react-router-dom';

const CourseCard = ({ id, title, domain, description, price, onEnroll }) => {
    const navigate = useNavigate()
    return (
        <div className="min-w-[320px] min-h-[250px] bg-white p-4 text-white shadow-md hover:shadow-lg hover:-translate-y-1 transition-transform duration-300 rounded-lg text-center border">
            <div className="flex justify-between items-center w-full mb-2">
                <p className="text-gray-800 text-lg font-semibold w-[80%]">{title}</p>
                <span className="bg-orange-500 text-white text-sm px-2 py-1 rounded">{domain}</span>
            </div>

            <p className="text-gray-600 text-sm mb-3">{description}</p>

            <div className="flex flex-col items-center gap-2">
                <p className="text-orange-500 font-bold">{price ? price : "Free"}</p>
                <div className="flex items-center justify-center gap-3">
                    <Button text="Enroll Now" isBlue={true} onClick={onEnroll} />
                    <Button text="Course Details" isBlue={true} onClick={() => navigate(`/course/${id}`)} />
                </div>
            </div>
        </div>
    );
};

export default CourseCard;
