import React, { useContext } from 'react'
import ThemeContext from './context/theme/ThemeContext'
import Navbar from './components/Navbar'
import ThemeButton from './components/ThemeButton'
import Form from './components/Form'
import { GithubProvider } from './context/github/GithubContext'
import UsersListGroup from './components/UsersListGroup'

const App = () => {

  const { theme } = useContext(ThemeContext)

  let customStyle = {
    fontFamily: theme?.font
  }

  return (
    <GithubProvider>
      <div style={customStyle}>
      <Navbar />
      <ThemeButton />
      <div className={`min-h-screen ${theme.bgColor} p-8`}>
    <Form />
    <UsersListGroup />
      </div>

    </div>
    </GithubProvider>
  )
}

export default App
