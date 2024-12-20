import React from 'react'
import { Link, useNavigate } from 'react-router-dom'



function Buttons() {

  const navigate = useNavigate()

  return <div className=" button-container flex justify-center  gap-x-2 mt-3 items-center">
    <button className="  w-18 disabled: text-lg font-mono bg-black hover:bg-gray-800 text-white font-semibold py-2 px-4  disabled:cursor-not-allowed" disabled>
      projects
    </button>
    <button onClick={() => {
      navigate('/links')
    }} className=" w-18  text-lg font-mono bg-black hover:bg-gray-800 text-white font-semibold py-2 px-4    ">
      links
    </button></div>
}

export default Buttons