import React from 'react'
import { SectionWrapper } from '../hoc'
import { motion } from 'framer-motion'
import { fadeIn, textVariant } from '../utils/motion'
import { styles } from '../styles'

const Works = () => {
  return (
    <>
      <motion.div variants={textVariant()}>
        <p className={styles.sectionSubText}>
          Pekerjaan Saya
        </p>
          <h2 className={styles.sectionHeadText}>
            Projects.
          </h2>
      </motion.div>
    </>
  )
}

export default SectionWrapper(Works,"");