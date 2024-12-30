import React from 'react'

import { FaFacebookSquare, FaInstagram, FaLinkedin, FaPinterest, FaSkype, FaTwitter } from 'react-icons/fa'

const Footer = () => {
  return (
    <div className='bg-[#2A254B] text-white mb-4 mt-28'>
        <div className='grid grid-cols-1 lg:grid-cols-4 py-6 px-16'>
            {/* Section 1 */}
            <div>
                <h2 className='py-3 font-bold text-amber-300'>Explore</h2>
                <ul className='space-y-2'>
                    <li>Latest Blogs</li>
                    <li>Trending Topics</li>
                    <li>Featured Articles</li>
                    <li>Editor's Picks</li>
                    <li>All Blogs</li>
                </ul>
            </div>

            {/* Section 2 */}
            <div>
                <h2 className='py-3 font-bold text-amber-300'>Categories</h2>
                <ul className='space-y-2'>
                    <li>Technology</li>
                    <li>Travel</li>
                    <li>Health & Wellness</li>
                    <li>Food & Recipes</li>
                    <li>Education</li>
                </ul>
            </div>

            {/* Section 3 */}
            <div>
                <h2 className='py-3 font-bold text-amber-300'>About Us</h2>
                <ul className='space-y-2'>
                    <li>Our Story</li>
                    <li>Meet the Team</li>
                    <li>Careers</li>
                    <li>Contact Us</li>
                    <li>Terms & Conditions</li>
                </ul>
            </div>

            {/* Section 4 - Email */}
            <div>
                <h3 className='font-bold py-3 text-amber-300'>Join us on Email</h3>
                <a href="mailto:info@blogsphere.com" className="underline">farahtaurus259@gmail.com </a>
            </div>
        </div>

        <div className="border-b-2 bg-neutral-50 mt-10 font-extralight mr-10 ml-10"></div>

        <div className='flex flex-col lg:flex-row justify-between items-center py-4 px-4'>
            <p className='text-center lg:text-left ml-8 mr-10'>© 2024 FarahBlogsAI LTD. All rights reserved</p>
            
            {/* Social Icons */}
            <div className='flex gap-6 mt-4 lg:mt-0 mr-8 ml-8 hover:scale-105 duration-300'>
                <a href='https://www.linkedin.com/in/farah-asghar-9992442ba?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app' target='blank'>
                    <FaLinkedin size={25} />
                </a>
                <FaFacebookSquare size={18}/>
                <FaInstagram size={18} />
                <FaSkype size={18} />
                <FaTwitter size={18} />
                <FaPinterest size={18} />
            </div>
        </div>
    </div>
  )
}

export default Footer
