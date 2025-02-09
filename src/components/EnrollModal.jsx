import React, { useState } from 'react';
import Button from './subcompenets/Button';
import { useUser } from '@clerk/clerk-react';

const EnrollModal = ({ title, onclose }) => {
    const { user, isSignedIn } = useUser();

    const [formData, setFormData] = useState({
        name: '',
        email: '',
        mobile: '',
        role: '',
        reason: '',
    });

    const [errors, setErrors] = useState({});

    const validateForm = () => {
        const newErrors = {};

        if (!formData.name.trim()) newErrors.name = "Name is required.";
        if (!formData.email.match(/^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/))
            newErrors.email = "Enter a valid email.";
        if (!formData.mobile.match(/^\d{10}$/)) newErrors.mobile = "Enter a valid 10-digit number.";
        if (!formData.role) newErrors.role = "Please select a role.";
        if (!formData.reason.trim()) newErrors.reason = "Reason cannot be empty.";

        setErrors(newErrors);
        return Object.keys(newErrors).length === 0;
    };

    const handleInputChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
        setErrors({ ...errors, [e.target.name]: '' });
    };

    const handleEnroll = () => {
        if (!validateForm()) return;

        console.log(formData);
        setFormData({
            name: '',
            email: '',
            mobile: '',
            role: '',
            reason: '',
        });
    };

    return (
        <>
            {!isSignedIn && (
                <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 transition-opacity duration-300 p-4">
                    <div className="bg-[#F5F5F5] p-4 sm:p-6 rounded-md shadow-md w-full text-ash max-w-md transform transition-all duration-300">
                        <div className="flex justify-end">
                            <Button text={"Close"} onClick={onclose} className={"mb-2 sm:mb-4 rounded-3xl text-sm sm:text-base"} />
                        </div>
                        <div className="text-ash">
                            <h2 className="text-lg sm:text-2xl font-bold mb-3 sm:mb-4 text-center break-words">{`ENROLL IN ${title}`}</h2>
                        </div>
                        <input
                            type="text"
                            name="name"
                            value={formData.name}
                            onChange={handleInputChange}
                            placeholder="Your Name"
                            className="border rounded-md px-2 sm:px-3 py-1.5 sm:py-2 w-full mb-1 sm:mb-2 text-sm sm:text-base"
                        />
                        {errors.name && <p className="text-red-500 text-xs sm:text-sm mb-3">{errors.name}</p>}

                        <input
                            type="email"
                            name="email"
                            value={formData.email}
                            onChange={handleInputChange}
                            placeholder="Your Email"
                            className="border rounded-md px-3 py-2 w-full mb-1 sm:mb-2"
                        />
                        {errors.email && <p className="text-red-500 text-xs sm:text-sm mb-3">{errors.email}</p>}

                        <input
                            type="tel"
                            name="mobile"
                            value={formData.mobile}
                            onChange={handleInputChange}
                            placeholder="Your Mobile Number"
                            className="border rounded-md px-3 py-2 w-full mb-1 sm:mb-2"
                        />
                        {errors.mobile && <p className="text-red-500 text-xs sm:text-sm mb-3">{errors.mobile}</p>}

                        <select
                            name="role"
                            value={formData.role}
                            onChange={handleInputChange}
                            className="border rounded-md px-2 sm:px-3 py-1.5 sm:py-2 w-full mb-1 sm:mb-2 text-sm sm:text-base"
                        >
                            <option value="">Select your Job Role</option>
                            <option value="student">Student</option>
                            <option value="software_engineer">Software Engineer</option>
                            <option value="other">Other</option>
                        </select>
                        {errors.role && <p className="text-red-500 text-xs sm:text-sm mb-3">{errors.role}</p>}

                        <textarea
                            name="reason"
                            value={formData.reason}
                            onChange={handleInputChange}
                            placeholder="Why are you taking this course?"
                            className="border rounded-md px-2 sm:px-3 py-1.5 sm:py-2 w-full mb-1 sm:mb-2 text-sm sm:text-base"
                            rows={3}
                        />
                        {errors.reason && <p className="text-red-500 text-xs sm:text-sm mb-3">{errors.reason}</p>}

                        <Button
                            text={"ENROLL"}
                            onClick={handleEnroll}
                            className={`w-full rounded-3xl font-bold py-2 sm:py-3 text-sm sm:text-base ${Object.keys(errors).length ? 'bg-gray-400 cursor-not-allowed' : ''
                                }`}
                            disabled={Object.keys(errors).length > 0}
                        />
                    </div>
                </div>
            )}
        </>
    );
};

export default EnrollModal;
