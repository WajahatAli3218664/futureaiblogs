import React from 'react'
import { FaFacebook, FaGithub, FaInstagram, FaLinkedin } from 'react-icons/fa';

const AuthorCard = () => {
  return (
    <>
    <div className='bg-slate-100 shadow-lg rounded-lg p-6 mt-12'>
        <div className='flex items-center animation-fadeIn'>

            <img 
            src="/images/fari.webp" 
            alt="Author Images"
            className='w-16 h-16 rounded-full mr-4 object-cover border-4 border-[#2A254B]' 
            />

            <div>
                <h3 className='text-xl font-bold'>Farah</h3>
                <p className='text-slate-500'>
                     {""}
                    Blogger | Content Writer
                </p>
            </div>
        </div>

        <p className='mt-4 text-black leading-relaxed'>
        Passionate about uncovering hidden gems and weaving stories that ignite wanderlust, this blogger brings destinations to life through vivid words and heartfelt experiences!
        </p>

        <div className='mt-4 flex space-x-3'>
            <a 
            href="https://www.linkedin.com/in/farah-asghar-9992442ba?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app" target='blank'
            className='px-4 py-2 text-white bg-[#2A254B] rounded-full hover:bg-amber-600 transition duration-300'>

             <FaLinkedin size={18}/>
            </a>
            <a 
            href="https://www.facebook.com" target='blank'
            className='px-4 py-2 text-white bg-[#2A254B] rounded-full hover:bg-amber-600 transition duration-300'>

             <FaFacebook size={18}/>
            </a>
            <a 
            href="https://www.instagram.com" target='blank'
            className='px-4 py-2 text-white bg-[#2A254B] rounded-full hover:bg-amber-600 transition duration-300'>

             <FaInstagram size={18}/>
            </a>
            <a 
            href="https://github.com" target='blank'
            className='px-4 py-2 text-white bg-[#2A254B] rounded-full hover:bg-amber-600 transition duration-300'>

             <FaGithub size={18}/>
            </a>
            
        </div>

    </div>
    </>
  );
}

export default AuthorCard
