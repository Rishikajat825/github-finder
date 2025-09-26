import React, { useContext } from 'react'
import ThemeContext from '../context/theme/ThemeContext'
import UsersListItem from './UsersListItem'
import GithubContext from '../context/github/GithubContext'

const UsersListGroup = () => {

    const {theme} = useContext(ThemeContext)
    const {users} = useContext(GithubContext)



  return (
    <div className={`my-6 ${theme.color}`}>
      {
        users.map(user => 
        <UsersListItem
         key={user.id}
         user={user} 
         />
        )
      }
       
    </div>
  )
}

export default UsersListGroup
