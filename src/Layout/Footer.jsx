import React from 'react'
import {GrFacebook} from 'react-icons/gr'
import {ImInstagram} from 'react-icons/im'
import {AiOutlineTwitter} from 'react-icons/ai'
import {AiFillYoutube} from 'react-icons/ai'

function Footer() {
  return (
    <>
        <div className="bg-[#141414]">
            <div className='mx-auto container-footer'>
                <div className='py-[20px] flex justify-start items-center text-gray-400'>
                    <a href="https://www.facebook.com/" className='pr-[16px] hover:opacity-80 hover:text-blue-600'><GrFacebook size={24}/></a>                
                    <a href="https://www.instagram.com/" className='pr-[16px] hover:opacity-80 hover:text-red-600'><ImInstagram size={24}/></a>                
                    <a href="https://www.twitter.com/"className='pr-[16px] hover:opacity-80 hover:text-blue-700'><AiOutlineTwitter size={24}/></a>                
                    <a href="https://www.youtube.com/"className='hover:opacity-80 hover:text-red-700'><AiFillYoutube size={24}/></a>                
                </div>
                
                <div className="flex content-center justify-between w-100">
                    <ul className='text-gray-400 text-[13px] font-normal mb-[20px]'>
                        <li className='pb-[15px]'>
                            <a href="#" className='hover:text-red-600 active:text-red-600'>Audio and Subtitles</a>
                        </li>
                        <li className='pb-[15px]'>
                           <a href="#" className='hover:text-red-600 active:opacity-95'>Media Center</a>
                        </li>
                        <li className='pb-[15px]'>
                            <a href="#" className='hover:text-red-600 active:opacity-95'>Security</a>    
                        </li>
                        <li>
                            <a href="#" className='hover:text-red-600 active:opacity-95'>Contact Us</a>
                        </li>
                    </ul>
                    <ul className='text-gray-400 text-[13px] font-normal pb-[20px]'>
                        <li className='pb-[15px]'>
                            <a href="#" className='hover:text-red-600 active:opacity-95'>Audio Description</a>
                        </li>
                        <li className='pb-[15px]'>
                           <a href="#" className='hover:text-red-600 active:opacity-95'>Investor Relations</a>
                        </li>
                        <li>
                            <a href="#" className='hover:text-red-600 active:opacity-95'>Legal Provisions</a>    
                        </li>
                    </ul>
                    <ul className='text-gray-400 text-[13px] font-normal pb-[20px]'>
                        <li className='pb-[15px]'>
                            <a href="#" className='hover:text-red-600 active:opacity-95'>Help center</a>
                        </li>
                        <li className='pb-[15px]'>
                           <a href="#" className='hover:text-red-600 active:opacity-95'>Job Opportunities</a>
                        </li>
                        <li>
                            <a href="#" className='hover:text-red-600 active:opacity-95'>Cookie Preferences</a>    
                        </li>
                    </ul>
                    <ul className='text-gray-400 text-[13px] font-normal pb-[20px]'>
                        <li className='pb-[15px]'>
                            <a href="#" className='hover:text-red-600 active:opacity-95'>Cookie Preferences</a>
                        </li>
                        <li className='pb-[15px]'>
                           <a href="#" className='hover:text-red-600 active:opacity-95'>Terms of Use</a>
                        </li>
                        <li>
                            <a href="#" className='hover:text-red-600 active:opacity-95'>Corporate Information</a>    
                        </li>
                    </ul>
                </div>
                <button className='px-5 py-2 text-gray-400 border border-red-600 rounded active:opacity-95 hover:border-gray-400 hover:text-red-600 text-[13px]'>Service Code</button>
                <p className='py-[20px] text-gray-400 text-[11px]'>© 1997-2023 Netflix, by ZuhDeV</p>
            </div>
        </div> 
    </>
  )
}

export default Footer