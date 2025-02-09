
import { useUser } from '@clerk/clerk-react';
import React from 'react'

const DashBoard = () => {

  const { user, isSignedIn } = useUser();

  return (
    <div>
      {isSignedIn ? (
        <div className="text-2xl font-medium">
          Welcome to your dashboard  <span className='font-bold'>{user.fullName} </span>!
        </div>)
        :
        (
          <div className="">
            Welcome Guest to your dashboard !
          </div>
        )}
    </div>
  )
}

export default DashBoard
