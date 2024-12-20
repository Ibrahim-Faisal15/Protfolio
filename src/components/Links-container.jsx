import React from 'react'
import Link from './Link'



function Links() {
  return (
    <div className='h-[100vh] bg-black flex justify-center flex-col  items-center text-white' >
      <div className="LINKS text-[5rem] mb-[-4rem] font-mono">Links!</div>
      <div className="links-container  w-[60%] h-[70%] flex flex-col justify-center items-center ">
        <Link subject="GitHub" Icon="FaGithub" link={"https://github.com/Ibrahim-Faisal15"}></Link>
        <Link subject="Instagram" Icon="FaInstagram" link={"https://www.instagram.com/__ibrahimfaisal__/"}></Link>
        <Link subject="Discord" Icon="FaDiscord" link="https://discord.com/channels/@me"></Link>
        <Link subject="Linkdin" Icon="FaLinkedin" link="https://www.linkedin.com/in/ibrahim-faisal-49193425b/"></Link>


      </div>


    </div>
  )
}

export default Links