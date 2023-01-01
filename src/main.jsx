import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import {Auth0Provider} from "@auth0/auth0-react"
import './index.css'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Auth0Provider
      domain="dev-altmzbyipx5l7eow.us.auth0.com"
      clientId="vBTvOtMzq6r3zRiBwyZwUTtYOHSbfALR"
      redirectUri={window.location.origin}
    >
      <App />
    </Auth0Provider>
  </React.StrictMode>,
)
