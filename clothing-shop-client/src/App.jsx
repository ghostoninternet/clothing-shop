import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import { Fragment } from 'react'

import { publicRoutes } from './routes'
import { DefaultLayout } from './components/Layout'
import UserContext from './context/UserContext'

function App() {
  return (
    <Router>
      <div className="app">
        <UserContext>
          <Routes>
            {publicRoutes.map((route, index) => {
              const Page = route.component
              let Layout = DefaultLayout

              if (route.layout) {
                Layout = route.layout
              } else if (route.layout === null) {
                Layout = Fragment
              }

              return (
                <Route 
                  key={index} 
                  path={route.path} 
                  element={
                    <Layout>
                      <Page />
                    </Layout>
                  }
                />
              )
            })}
          </Routes>
        </UserContext>
      </div>
    </Router>
  )
}

export default App
