import React from 'react'

const UsersListItem = ({user}) => {
  return (
   <div className='my-4 border flex space-x-8  border-gray-500 rounded-lg shadow-2xl p-4'>

        <img className='h-32 rounded-full ' src={user?.avatar_url} alt="" />
        <div>
            <p className='text-gray-600 text-sm'>#id: {user?.id}</p>
            <h1 className='text-2xl font-bolt my-2'>{user?.login}</h1>
            <a href={user?.url} className='text-center text-sm mt-4 bg-blue-600 w-full rounded-lg p-2 text-white font-semibolt cursor-pointer hover:bg-blue-800'>View</a>
        </div>

      </div>
  )
}

export default UsersListItem
