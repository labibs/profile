import React from 'react'
// import Tilt from 'react-tilt'
import { motion } from 'framer-motion';

import { styles } from '../styles';
import { services } from '../constans';
import { fadeIn, textVariant } from '../utils/motion';


const About = () => {
  return (
    <>
      <motion.div variants={textVariant()}>
        <p className={styles.sectionSubText}>PENGENALAN</p>
        <h2 className={styles.sectionHeadText}>Gambaran Umum.</h2>
      </motion.div>
      <motion.p
        variants={fadeIn('', '', 0.1, 1)}
        className='mt-4 text-secondary text-[17px] '
      >
        Selamat datang di profil saya! Saya seorang lulusan S1 Teknik Informatika dengan pengalaman 3 tahun di bidang web development. Saya ahli dalam PHP, JavaScript, dan CSS, serta menggunakan framework seperti Laravel, React.js, dan Bootstrap.

        Saya memiliki bakat dalam menciptakan pengalaman pengguna yang menarik dan responsif. Dalam karir saya, saya telah terlibat dalam proyek-proyek sukses mulai dari pembuatan website perusahaan hingga aplikasi web kompleks.

        Saya sangat senang bekerja dalam tim kolaboratif dan memiliki kemampuan komunikasi yang kuat. Saya siap menghadapi tantangan baru dalam pengembangan web dan menciptakan solusi inovatif.

        Terima kasih telah mengunjungi profil saya. Jika Anda tertarik untuk bekerja sama atau memiliki pertanyaan, jangan ragu untuk menghubungi saya. Saya siap untuk menciptakan pengalaman web yang menarik bersama Anda
      </motion.p>
    </>
  )
}

export default About