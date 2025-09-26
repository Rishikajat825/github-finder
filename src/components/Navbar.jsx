import React, { useContext } from 'react'
import ThemeContext from '../context/theme/ThemeContext'
// import image from '../assets/github-logo.png'
import { FaGithub } from "react-icons/fa"


const Navbar = () => {

    const { theme } = useContext(ThemeContext)

    return (
        <nav className={`${theme?.bgColor} py-2 px-8 border-b-1 border-gray-500 flex space-x-4 items-center `}>
            {/* <img className='h-12 w-12' src={image} alt="" /> */}
            <h1 className={`${theme.color} font-bold text-xl flex items-center `}><FaGithub />Github-Finder</h1>
        </nav>

    )
}

export default Navbar
