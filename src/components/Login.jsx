import React from "react";
import { useAuth0 } from "@auth0/auth0-react";
import styled from 'styled-components'

const LoginBtn = styled.button`
    background-color:#101010;
    color:#f5f5f5;
    transition: all .15s ease-in-out;
    &:hover{
        background:#101010aa;
        border: 1.5px solid #101010;
    }
`

const LoginImg = styled.img`
    padding: 5px;
    margin: 5px;
`

export const LoginButton=()=>{
    const {loginWithRedirect} = useAuth0()
    return(
    <>
        <LoginImg src="https://i.ibb.co/McFX1qT/Logo-Frontend-removebg-preview.png" alt="LogoFAdev" />
        <LoginBtn onClick={loginWithRedirect}>Login with Auth0 - Google</LoginBtn>
    </>
    )
}

const LogoutButton=()=>{
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
        <>
            <div>
                <img src={user.picture} alt={user.name}/>
                <h2>{user.name}</h2>
                <p>{user.email}</p>
            </div>
            <LogoutButton/>
        </>
    )
}
