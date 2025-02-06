import React from 'react'
import { delay, motion } from 'framer-motion'  
import FacultyCard from '../components/subcompenets/FacultyCard'

const Faculty = () => {
  
  const animationProps = {
    initial: { opacity: 0, y: 50 }, 
    animate: { opacity: 1, y: 0 },  
    transition: { duration: 1, ease: 'easeOut'  }
  }

  return (
    <div className='h-screen py-16'>
      <div className="faculty-title text-center">
        <motion.h1 
          {...animationProps}  
          className="text-3xl sm:text-4xl md:text-5xl font-bold bg-text-gradient bg-clip-text text-transparent"
        >
          MEET OUR VIBRANT FACULTY
        </motion.h1>
      </div>

      <div className="faculty w-full grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 place-content-center gap-6 mt-10 justify-items-center items-center">
        <motion.div {...animationProps}> 
          <FacultyCard
            img={"https://lms.codevocado.in/static/media/photo_2024-07-04_15-29-44.07c6f568893cc77e7cda.jpg"}
            name={"Mr. Raghavendra Upadhyay"}
            designation={"Professor of Computer Science"}
            description={"Dr. John has over 20 years of experience in software engineering and has worked with several leading tech companies."} 
          />
        </motion.div>

        <motion.div {...animationProps}>
          <FacultyCard
            name={"Prof. Shalini Singh"}
            designation={"Assistant Professor of Data Science"}
            description={"Prof. Jane specializes in artificial intelligence and machine learning, with numerous research papers in top journals."} 
          />
        </motion.div>

        <motion.div {...animationProps}>
          <FacultyCard
            name={"Mr. Samuel Harris"}
            designation={"Lecturer in Web Development"}
            description={"Mr. Samuel has a passion for web development and has worked on various real-world projects involving React and Node.js."} 
          />
        </motion.div>
      </div>
    </div>
  )
}

export default Faculty
