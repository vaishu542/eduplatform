import React from 'react'
import calender from '../../assets/calender.svg'

const EventCard = ({ title, date, description }) => {
    return (
        <div className="ease-[cubic-bezier(0.25,0.8,0.25,1)] hover:shadow-imgShadow hover:rounded-xl transform hover:skew-x-2 duration-300">
            <div className="card w-[340px] min-h-[340px]  sm:w-[380px] bg-white shadow-shadowcustom text-center py-5 flex flex-col hover:bg-[#fff2f2] justify-center rounded-2xl transform-style-preserve-3d relative overflow-hidden">
                <div className="card-context p-2 flex flex-col gap-5 items-center transform-style-preserve-3d">
                    <div className="img ">
                        <img
                            src="https://via.placeholder.com/300"
                            alt={title}
                            className="shadow-shadowcustom"
                        />
                    </div>
                    <div className="prof-name space-y-4 transform transition-transform duration-500 hover:translate3d-[0,0,40px]">
                        <h1 className="text-3xl text-ash font-bold">{title}</h1>

                        <p className="text-lightash flex items-center gap-2 justify-center font-medium">
                            <img src={calender} alt="date " />
                            <span>12/{date}/2024</span>
                        </p>
                    </div>
                    <div className="description w-[80%] text-[#555] text-justify transform transition-transform duration-500 hover:translate3d-[0,0,30px]">
                        <p>{description}</p>
                    </div>
                </div>

                <div className="contact w-full flex justify-end transform transition-transform duration-500 hover:translate3d-[0,0,20px]">
                    <button className="w-[90%] py-2 h-full flex items-center justify-center gap-2 text-orangeCol">
                        <svg stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 512 512" className="icon" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg">
                            <path d="M256 8C119.043 8 8 119.083 8 256c0 136.997 111.043 248 248 248s248-111.003 248-248C504 119.083 392.957 8 256 8zm0 110c23.196 0 42 18.804 42 42s-18.804 42-42 42-42-18.804-42-42 18.804-42 42-42zm56 254c0 6.627-5.373 12-12 12h-88c-6.627 0-12-5.373-12-12v-24c0-6.627 5.373-12 12-12h12v-64h-12c-6.627 0-12-5.373-12-12v-24c0-6.627 5.373-12 12-12h64c6.627 0 12 5.373 12 12v100h12c6.627 0 12 5.373 12 12v24z"></path>
                        </svg>
                        <p className="text-inherit font-semibold">More Info</p>
                    </button>
                </div>
            </div>
        </div>
    )
}

export default EventCard