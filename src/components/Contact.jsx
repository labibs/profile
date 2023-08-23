import emailjs from '@emailjs/browser'
import { motion } from 'framer-motion'
import React, { useState, useRef } from 'react'

import { styles } from '../styles'
import { EarthCanvas, StarsCanvas } from './canvas'
import { SectionWrapper } from '../hoc'
import { slideIn } from '../utils/motion'

//template_5ps34ij
//service_8mr13qt
//SxIDW1ohi24q5oSij

const Contact = () => {
  const formRef = useRef();
  const [form, setForm] = useState({
    name: '',
    email: '',
    message: '',
  });
  const [loading, setLoading] = useState(false);

  const handleChange = (e) => { 
    const { name, value } = e.target;

    setForm({...form, [name]: value})
   }

  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true);

    emailjs.send(
      'service_8mr13qt',
      'template_5ps34ij',
      {
        from_name: form.name,
        to_name: 'Labib',
        from_email: form.email,
        to_email: 'visioner.lv@gmail.com',
        message: form.message,
      },
      'SxIDW1ohi24q5oSij'
    )
    .then(() => {
      setLoading(false);
      alert('Trimakasih atas pesan anda, akan kami konfirmasi sesegera mungkin');

      setForm({
        name: '',
        email: '',
        message:'',
      })
    }, (error) => {
      setLoading(false)

      console.log(error);

      alert('Mohon maaf Terdapat Gangguan di system kami')
    })
  }

  return (
    <div className="xl:mt-12 xl:flex-row flex-col-reverse flex gap-10 overflow-hidden">
      
      <motion.div
          variants={slideIn('left', "tween", 0.2, 1)}
          className='flex-[0.75] bg-black-100 p-8 rounded-2xl'
      >
        <p className={styles.sectionSubText}> Hubungi Saya</p>
        <h3 className={styles.sectionHeadText}>Contact.</h3>

        <form 
          ref={formRef}
          onSubmit={handleSubmit}
          className='mt-12 flex flex-col gap8'  
        >
          <label className='flex flex-col'>
            <span className='text-white font-medium mb-4'>Nama Mu</span>
            <input 
              type="text" 
              name='name'
              value={form.name}
              onChange={handleChange}
              placeholder='Siapa nama mu ?'
              className='bg-tertiary py-4 px-6 placeholder:text-secondary text-white rounded-lg outlined-none border-none font-medium' 
            />
          </label>
          <label className='flex flex-col py-4'>
            <span className='text-white font-medium mb-4'>Email Mu</span>
            <input 
              type="email" 
              name='email'
              value={form.email}
              onChange={handleChange}
              placeholder='Apa email mu ?'
              className='bg-tertiary py-4 px-6 placeholder:text-secondary text-white rounded-lg outlined-none border-none font-medium' 
            />
          </label>
          <label className="flex flex-col">
            <span className="text-white font-medium mb-4">Pesan Mu</span>
            <textarea 
              rows="7"
              name="message"
              value={form.message}
              onChange={handleChange}
              placeholder='Pesan mu ?'
              className="bg-tertiary py-4 px-6 placeholder:text-secondary text-white rounded-lg outlined-none border-none font-medium" 
            />
          </label>
          <button
            type='submit'
            className='bg-tertiary py-3 px-8 mt-4 outline-none w-fit text-white font-bold shadow-md shadow-primary rounded-xl'
          >
            {loading ? 'Sending ...' : 'Send'}
          </button>
        </form>
      </motion.div>
      <motion.div
        variants={slideIn('right', "tween", 0.2, 1)}
        className='xl:flex-1 xl:h-auto md:h-[55px] h-[350px]'
      >
        <EarthCanvas />
      </motion.div>

    </div>
  )
}

export default SectionWrapper(Contact, "contact");