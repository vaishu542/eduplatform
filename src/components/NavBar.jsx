import React from 'react'
import Button from './subcompenets/Button'
import { useNavigate } from 'react-router-dom'

const NavBar = () => {
    const navigate = useNavigate()
    return (
        <div className='bg-[#007bff] text-white flex justify-between items-center py-2 px-5 flex-col sm:flex-row gap-2'>
            <div className="logo">
                <p className='font-bold text-2xl'>EduPlatform</p>
            </div>
            <div className="btns flex gap-4 ">
                <Button text={'Login'} onClick={() => navigate('/login')} />
                <Button text={'Faculty'} onClick={() => navigate('/faculty')} />
                <Button text={'Event'} onClick={() => navigate('/event')} />
            </div>
        </div>
    )
}

export default NavBar