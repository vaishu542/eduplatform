import React from 'react'
import { motion } from 'framer-motion'  
import EventCard from '../components/subcompenets/EventCard'

const Event = () => {

  const animationProps = {
    initial: { opacity: 0, y: 50 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 1, ease: 'easeOut' }
  }

  return (
    <div className='h-screen py-16'>
      <div className="faculty-title text-center">
        <motion.h1
          {...animationProps}
          className="text-3xl sm:text-4xl md:text-5xl font-bold bg-text-gradient bg-clip-text text-transparent uppercase"
        >
          Upcoming Events
        </motion.h1>
      </div>

      <div className="event-card w-full grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 place-content-center gap-10 lg:gap-0 mt-8 md:mt-16 justify-items-center items-center">
        <motion.div {...animationProps}> 
          <EventCard
            title={"Tech Talk: AI Innovations"}
            date={12}
            description={"Join us for a fascinating session on AI innovations by industry experts."} />
        </motion.div>

        <motion.div {...animationProps}>
          <EventCard
            title={"Workshop: Web Development Bootcamp"}
            date={12}
            description={"A hands-on workshop covering web development essentials like HTML, CSS, and JavaScript."} />
        </motion.div>

        <motion.div {...animationProps}>
          <EventCard
            title={"Seminar: Data Science and Machine Learning"}
            date={12}
            description={"Dive into the world of data science and machine learning with expert-led sessions."} />
        </motion.div>
      </div>
    </div>
  )
}

export default Event
