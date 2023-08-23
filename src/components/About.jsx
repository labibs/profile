import React from 'react'
// import Tilt from 'react-tilt'
import { motion } from 'framer-motion';

import { styles } from '../styles';
import { services } from '../constans';
import { fadeIn, textVariant } from '../utils/motion';
import { Tilt } from 'react-tilt';
import { SectionWrapper } from '../hoc'

const ServiceCard = ({ index, title, icon }) => {
  return (
    <Tilt className="xs:w-[333px] w-full">
      <motion.div
        variants={fadeIn("right", "spring", 0.5 * index, 0.75)}
        className='w-full green-pink-gradient p-[1px] rounded-[20px] shadow-card'
      >
        <div
          options={{
            max: 45,
            scale: 1,
            spedd: 450
          }}
          className="bg-tertiary rounded-[20px] py-5 px-12 min-h-[280px] flex justify-evenly items-center flex-col"
        >
          <img src={icon} alt={title} className='w-16 h-16 object-contain' />
          <h3 className='text-white text-[20px] font-bold text-center'>{title}</h3>
        </div>
      </motion.div>

    </Tilt>
  )
}

const About = () => {
  return (
    <>
      <motion.div variants={textVariant()}>
        <p className={styles.sectionSubText}>PERKENALAN</p>
        <h2 className={styles.sectionHeadText}>Tentang Saya.</h2>
      </motion.div>
      <motion.p
        variants={fadeIn("", "", 0.1, 1)}
        className='mt-4 text-secondary text-[17px] max-w-3xl leading-[30px]'
      >
        Selamat datang di profil saya! Saya seorang lulusan S1 Teknik Informatika dengan pengalaman 3 tahun di bidang web development. Saya ahli dalam PHP, JavaScript, dan CSS, serta menggunakan framework seperti Laravel, React.js, dan Bootstrap.

        Saya memiliki bakat dalam menciptakan pengalaman pengguna yang menarik dan responsif. Dalam karir saya, saya telah terlibat dalam proyek-proyek sukses mulai dari pembuatan website perusahaan hingga aplikasi web kompleks.

        Saya sangat senang bekerja dalam tim kolaboratif dan memiliki kemampuan komunikasi yang kuat. Saya siap menghadapi tantangan baru dalam pengembangan web dan menciptakan solusi inovatif.

        Terima kasih telah mengunjungi profil saya. Jika Anda tertarik untuk bekerja sama atau memiliki pertanyaan, jangan ragu untuk menghubungi saya. Saya siap untuk menciptakan pengalaman web yang menarik bersama Anda
      </motion.p>
      <div className="mt-20 flex flex-wrap gap-10">
        {services.map((service, index) => (
          <ServiceCard key={service.title} index={index} {...service} />
        ))}
      </div>
    </>
  )
}

export default SectionWrapper(About, "about")