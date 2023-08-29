import React, { useEffect } from 'react'
import { Tilt } from 'react-tilt'
import { github } from '../assets'
import { projects } from '../constans'
import { SectionWrapper } from '../hoc'
import { motion } from 'framer-motion'
import { fadeIn, textVariant } from '../utils/motion'
import { styles } from '../styles'

const ProjectCard = ({ index, name, description, tags, image, source_code_link }) => {
  return (
    <motion.div variants={fadeIn("up", "spring", index * 0.5, 0.75)}>
      <Tilt
        options={{
          max: 45,
          scale: 1,
          speed: 450
        }}
        className="bg-tertiary p-5 rounded-2xl sm:w-[360px] w-full"
      >
        <div 
          onClick={() => window.open(source_code_link, "_blank")} 
          className="relative w-full h-[230px]">
          <img src={image} alt={name} className='w-full h-full object-cover rounded-2xl' />
          <div className="absolute inset-0 flex justify-end card-img_hover">
            {/* <div 
              onClick={() => window.open(source_code_link, "_blank")}
              className="black-gradient w-10 h-10 rounded-full flex justify-center items-center cursor-pointer">
              <img src={github} alt="github" className='w-1/2 h-1/2 object-contain' />
            </div> */}
          </div>
        </div>
        
        <div className="mt-5">
          <h3 className='text-white font-bold text-[24px]'>{name}</h3>
          <p className='mt-2 text-secondary text-[14px]'>{description}</p>
        </div>

        <div className="mt-4 flex flex-wrap gap-2">
          {tags.map((tag) => (
            <p key={tag.name} className={`text-[14px] ${tag.color}`}>
              #{tag.name}
            </p>
          ))}
        </div>
      </Tilt>
    </motion.div>
  )
}
const Works = () => {
  useEffect(() => {
    // Ambil ID dari URL
    const url = window.location.href;
    const idIndex = url.indexOf('#');
    if (idIndex !== -1) {
      const id = url.slice(idIndex + 1);
      const element = document.getElementById(id);
      if (element) {
        // Gulir ke elemen dengan ID yang sesuai dengan offset negatif
        element.scrollIntoView({ behavior: 'smooth', block: 'start', inline: 'nearest', inlineFragment: 'nearest', offset: { top: -100 } });
      }
    }
  }, []);
  return (
    <div id="portofolio" className='mb-10'>
    <>
      <motion.div variants={textVariant()}>
        <p className={styles.sectionSubText}>
          kARYA Saya
        </p>
          <h2 className={styles.sectionHeadText}>
            Portofolio.
          </h2>
      </motion.div>
      <div className="w-full flex">
        <motion.p
          variants={fadeIn("", "", 0.1, 1)}
          className="mt-3 text-secondary text-[17px] max-w-3xl leading-[30px]">
            Project yang pernah saya selesaikan    </motion.p>
      </div>
      <div className="mt-20 flex flex-wrap gap-7">
        {projects.map((project, index) => (
          <ProjectCard
            key={'project-${index}'}
            index={index}
            {...project}
            />
        ))}
      </div>
    </>
    </div>
  )
}

export default SectionWrapper(Works,"");