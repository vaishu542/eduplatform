import React from 'react';
import Button from './subcompenets/Button';
import { useNavigate } from 'react-router-dom';
import { useClerk, SignedIn, SignedOut } from '@clerk/clerk-react';

const NavBar = () => {
    const navigate = useNavigate();
    const { openSignIn, signOut } = useClerk();

    const handleLogin = () => {
        openSignIn({
            redirectUrl: '/mainpage',
        });
    };
    const handleLogout = () => {
        signOut();
    };

    return (
        <div className='bg-[#007bff] text-white flex justify-between items-center py-2 px-5 flex-col sm:flex-row gap-2'>
            <div className="logo">
                <p className='font-bold text-2xl'>EduPlatform</p>
            </div>
            <div className="btns flex gap-4">
                <SignedOut>
                    <Button text={'Login'} onClick={handleLogin} />
                </SignedOut>
                <SignedIn>
                    <Button text={'Logout'} onClick={handleLogout} />
                </SignedIn>
                <Button text={'Faculty'} onClick={() => navigate('/faculty')} />
                <Button text={'Event'} onClick={() => navigate('/event')} />
            </div>
        </div>
    );
};

export default NavBar;
