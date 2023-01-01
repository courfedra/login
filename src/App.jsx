import './App.css'
import { LoginButton, Profile } from './components/Login'
import { useAuth0 } from '@auth0/auth0-react'
import styled from 'styled-components'

function App() {
  const {isAuthenticated} = useAuth0()
  const Card = styled.div`
    width:50vw;
    min-height:100%;
    padding:10px;
    display:flex;
    flex-direction:column;
    justify-content:center;
    align-items:center;
    background-color:#ababab33;
    border-radius:15px;
`


  return (
    <Card>
      {isAuthenticated
      ?<Profile/>
      :<LoginButton/>
      }
    </Card>
  )
}

export default App
