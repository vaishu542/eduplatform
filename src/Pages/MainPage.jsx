import React, { useState } from 'react';
import Header from '../components/LSM/Header';
import DashBoard from '../components/LSM/DashBoard';
import ActiveCourses from '../components/LSM/EnrolledCourses';
import Assignments from '../components/LSM/Assignments';
import Progress from '../components/LSM/Progress';
import Questions from '../components/LSM/Questions';
import Settings from '../components/LSM/Settings';
import ChangePassword from '../components/LSM/ChangePassword';
import Logout from '../components/LSM/Logout';

const MainPage = () => {
    const [selectedItem, setSelectedItem] = useState('Dashboard');
    const [selectedSubItem, setSelectedSubItem] = useState('');

    const renderContent = () => {
        if (selectedItem === 'Settings' && selectedSubItem) {
            return selectedSubItem === 'Change Password' ? <ChangePassword /> : <Logout />;
        }

        switch (selectedItem) {
            case 'Dashboard': return <DashBoard />;
            case 'Courses': return <ActiveCourses />;
            case 'Assignments': return <Assignments />;
            case 'Progress': return <Progress />;
            case 'Questions': return <Questions />;
            case 'Settings': return <Settings />;
            default: return <div>Select an option from the sidebar.</div>;
        }
    };

    return (
        <div className="flex flex-col h-screen bg-gray-100 font-sans text-gray-900">
            <div className="flex flex-1">
                {/* Sidebar */}
                <aside className="w-64 bg-gray-800 text-white  px-3 text-xl flex flex-col pt-12">
                    {['Dashboard', 'Courses', 'Assignments', 'Progress', 'Questions', 'Settings'].map((item) => (
                        <div key={item} className="mb-3">
                            <button
                                className={`w-full text-left p-2 rounded-md transition duration-200 ${selectedItem === item ? 'bg-gray-700' : 'hover:bg-gray-700'}`}
                                onClick={() => {
                                    setSelectedItem(item);
                                    setSelectedSubItem('');
                                }}
                            >
                                {item}
                            </button>
                            {/* Sub-menu for Settings */}
                            {item === 'Settings' && selectedItem === 'Settings' && (
                                <div className="ml-4 mt-2 text-sm">
                                    <button
                                        className="block text-gray-300 hover:text-white py-1"
                                        onClick={() => setSelectedSubItem('Change Password')}
                                    >
                                        Change Password
                                    </button>
                                    <button
                                        className="block text-gray-300 hover:text-white py-1"
                                        onClick={() => setSelectedSubItem('Logout')}
                                    >
                                        Logout
                                    </button>
                                </div>
                            )}
                        </div>
                    ))}
                </aside>

                {/* Main Content */}
                <main className="flex-1 ">
                    <header className="bg-blue-600 text-white py-4 pr-4 text-center text-xl font-semibold">
                        <Header />
                    </header>
                    <div className="bg-white p-6 rounded-lg shadow-lg">{renderContent()}</div>
                </main>
            </div>
        </div>
    );
};

export default MainPage;
