import React from 'react'


const FacultyCard = ({ img, name, designation, description }) => {

  return (
    <div className="card w-[340px] min-h-[420px] sm:w-[380px] bg-purple-gradient text-center py-5 flex flex-col justify-between rounded-2xl hover:bg-orange-gradient hover:-translate-y-2 transition-transform duration-300">
      <div className="card-context p-2 flex flex-col items-center gap-2">
        <div className="img">
          <img
            src={img}
            alt={name}
            className="w-28 h-28 rounded-full border-[5px] border-white transform transition-all duration-300 hover:scale-105"
          />
        </div>
        <div className="prof-name space-y-2">
          <h1 className="text-3xl text-ash font-bold hover:text-orangeCol">{name}</h1>
          <p className="text-lightash hover:text-orangeCol">{designation}</p>
        </div>
        <div className="description w-[80%] text-[#555] text-justify hover:text-orangeCol">
          <p>{description}</p>
        </div>
      </div>

      <div className="contact w-full flex justify-end ">
        <button className="bg-white w-[90%] py-2 h-full flex items-center justify-center gap-2 text-blueCol hover:text-orangeCol">
          <svg
            stroke="currentColor"
            fill="currentColor"
            strokeWidth="0"
            viewBox="0 0 512 512"
            className="w-6 h-6"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path d="M502.3 190.8c3.9-3.1 9.7-.2 9.7 4.7V400c0 26.5-21.5 48-48 48H48c-26.5 0-48-21.5-48-48V195.6c0-5 5.7-7.8 9.7-4.7 22.4 17.4 52.1 39.5 154.1 113.6 21.1 15.4 56.7 47.8 92.2 47.6 35.7.3 72-32.8 92.3-47.6 102-74.1 131.6-96.3 154-113.7zM256 320c23.2.4 56.6-29.2 73.4-41.4 132.7-96.3 142.8-104.7 173.4-128.7 5.8-4.5 9.2-11.5 9.2-18.9v-19c0-26.5-21.5-48-48-48H48C21.5 64 0 85.5 0 112v19c0 7.4 3.4 14.3 9.2 18.9 30.6 23.9 40.7 32.4 173.4 128.7 16.8 12.2 50.2 41.8 73.4 41.4z"></path>
          </svg>
          <p className="text-inherit font-semibold">Contact</p>
        </button>
      </div>
    </div>
  )
}

export default FacultyCard
