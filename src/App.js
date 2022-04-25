import React from 'react'
import Layout from './components/Layout'
import Profile from './components/Profile'
import Repositories from './components/Repositories'
import { ResetCSS } from './Global/resetCSS'

const App = () => {
  return (
    <main>
      <ResetCSS />
      <Layout>
        <Profile />
        <Repositories />
      </Layout>
    </main>
  )
}

export default App