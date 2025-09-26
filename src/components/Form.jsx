import React, { useContext, useState } from 'react'
import ThemeContext from '../context/theme/ThemeContext'
import { searchUsers } from '../context/github/GithubService'
import GithubContext from '../context/github/GithubContext'

const Form = () => {

    const {theme} = useContext(ThemeContext)

    const {dispatch} = useContext(GithubContext)

    const [text , setText] = useState("")

    const handleSearch = async (e) => {
      e.preventDefault()
      const data = await searchUsers(text)
     dispatch({
      type : "SEARCH_USERS",
      payload : data
     })
     setText("")
    }





  return (
    <form onSubmit={handleSearch} className={`p-4 rounded-lg shadow-xl border border-gray-600 ${theme.color} `}>
        <h1 className='text-center font-black text-2xl my-4'>Search User Here</h1>
        <input value={text} onChange={(e) => setText(e.target.value)} className='border border-gray-600 w-full p-4 rounded-lg my-4 outline-none' type="text" placeholder='search user' required />
        <button className='bg-green-600 hover:bg-green-500 cursor-pointer text-white font-bold w-full p-3 rounded-lg mb-6'>
           search
        </button>
      
    </form>
  )
}

export default Form
