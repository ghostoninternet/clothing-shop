import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import { BrowserRouter } from 'react-router-dom'
import UserContext from './context/UserContext.jsx'

import GlobalStyles from './components/Globalstyles/index.jsx'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <GlobalStyles>
      <BrowserRouter>
        <UserContext>
          <App />
        </UserContext>
      </BrowserRouter>
    </GlobalStyles>
  </React.StrictMode>
)
