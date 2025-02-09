import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import { SignedIn, SignedOut, useClerk, UserButton, useUser } from '@clerk/clerk-react';

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const { user, isSignedIn } = useUser();
  const { signOut } = useClerk();

  const handleSignOut = () => {
    signOut();
  };

  return (
    <header className="flex justify-between items-center bg-[#1f3a5b] text-white p-3">
      <div>
        <NavLink to={'/'}>EduPlatform</NavLink>
      </div>
      <div className="flex items-center">
        <SignedIn>
          {isSignedIn && (
            <>
              <img
                src={user.imageUrl || 'avatar.png'}
                alt="User Profile"
                className="w-10 h-10 rounded-full mr-3"
              />
              <div className="mr-3">{user.fullName || 'John Doe'}</div>
            </>
          )}

          <div className="relative">
            <button
              className="bg-transparent text-white focus:outline-none hover:bg-gray-700 px-4 py-1 rounded-lg"
              onClick={() => setIsOpen(!isOpen)}
            >
              Account
            </button>

            {isOpen && (
              <div className="absolute right-0 mt-2 w-max bg-white rounded-md shadow-md">
                <NavLink
                  to="/user"
                  className="block px-4 py-2 text-gray-700 rounded-md hover:bg-gray-100"
                >
                  Manage Account
                </NavLink>
                <button
                  onClick={handleSignOut}
                  className="block w-full text-left px-4 py-2 text-gray-700 rounded-md hover:bg-gray-100"
                >
                  Logout
                </button>
              </div>
            )}
          </div>
        </SignedIn>

      </div>
    </header>
  );
};

export default Header;
