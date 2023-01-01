import React from "react";
import { useAuth0 } from "@auth0/auth0-react";
import styled from 'styled-components'

const LoginBtn = styled.button`
    background-color:red
`

export const LoginButton=()=>{
    const {loginWithRedirect} = useAuth0()
    return(
        <LoginBtn onClick={loginWithRedirect}>Login</LoginBtn>
    )
}

export const LogoutButton=()=>{
    const {logout} = useAuth0()
    return(
        <button onClick={()=>{logout({returnTo:window.location.origin})}}>Logout</button>
    )
}

export const Profile=()=>{
    const {user, isAuthenticated,isLoading} = useAuth0()
    if (isLoading){
        return(
            <div>Loading...</div>
        )
    }
    return(
        isAuthenticated &&
        <div>
            <img src={user.picture} alt={user.name}/>
            <h2>{user.name}</h2>
            <p>{user.email}</p>
        </div>
    )
}
