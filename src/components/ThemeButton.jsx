import React, { useContext, useState } from 'react'
import { FaPalette } from 'react-icons/fa'
import ThemeContext from '../context/theme/ThemeContext'

const ThemeButton = () => {

    const { dispatch } = useContext(ThemeContext)

    const [themeChangeShow, setThemeChangeShow] = useState(false)

    const handleThemeSwitch = (themeType) => {
        dispatch({
            type : themeType
        })
        setThemeChangeShow(false)
    }



    return (
        <div className='fixed bottom-5 left-5 '>

            <ul className={themeChangeShow ? 'my-4 space-y-2' : 'my-4 space-y-2 hidden'}>
                <li onClick={() => handleThemeSwitch("MODERN_THEME" )} className='bg-gray-200 p-2 rounded-md text-center hover:bg-gray-300 cursor-pointer'>Modern Theme</li>
                <li onClick={() => handleThemeSwitch("CLASSIC_THEME" )} className='bg-gray-200 p-2 rounded-md text-center hover:bg-gray-300 cursor-pointer'>Classic Theme</li>
                <li onClick={() => handleThemeSwitch("BLUEISH_THEME" )} className='bg-gray-200 p-2 rounded-md text-center hover:bg-gray-300 cursor-pointer'>Blueish Theme</li>
            </ul>

            <button onMouseOver={() => setThemeChangeShow(true)} className='bg-black text-white py-2 px-2 h-10 w-10 rounded-full flex items-center justify-center hover:scale-125 duration-200 cursor-pointer'><FaPalette /></button>
        </div>
    )
}

export default ThemeButton
