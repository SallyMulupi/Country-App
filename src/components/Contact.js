import React from 'react'
import { HiOutlineMail } from 'react-icons/hi';
import { BsFillPersonLinesFill } from 'react-icons/bs';
import { FaGithub,FaLinkedin,FaFacebook} from 'react-icons/fa'

const Contact = () => {
    return (
      <div className={'hidden lg:flex fixed flex-col top-[35%] left-3'}>
      <ul>
        <li className='w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-[9DAAF2]' >
          <a className='flex justify-between items-center w-full text-[#FF6A3D]' href="https://www.linkedin.com/in/sally-mulupi-4a1556220/">Linkedin <FaLinkedin size={30} /></a></li>
          <li className='w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-[9DAAF2]' >
          <a className='flex justify-between items-center w-full text-[#FF6A3D]' href="https://www.facebook.com/sally.mulupi.3">Facebook <FaFacebook size={30} /></a></li>
          <li className='w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-[9DAAF2]' >
          <a className='flex justify-between items-center w-full text-[#FF6A3D]' href="https://github.com/SallyMulupi">GitHub <FaGithub size={30} /></a></li>
          <li className='w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-[9DAAF2]' >
          <a className='flex justify-between items-center w-full text-[#FF6A3D]' href="/">Email <HiOutlineMail size={30} /></a></li>
          <li className='w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-[9DAAF2]' >
          <a className='flex justify-between items-center w-full text-[#FF6A3D]' href="/">Resume <BsFillPersonLinesFill size={30} /></a></li>
      
     </ul>
    </div>
)
}

    

  
  export default Contact