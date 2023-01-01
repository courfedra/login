import './App.css'
import { LoginButton, LogoutButton,Profile } from './components/Login'
import { useAuth0 } from '@auth0/auth0-react'
function App() {
  const {isAuthenticated} = useAuth0()

  return (
    <>
      {isAuthenticated
      ?<>
        <Profile/>
        <LogoutButton/>
        </>
      :<LoginButton/>
      }
    </>
  )
}

export default App
