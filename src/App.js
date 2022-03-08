import React from 'react'
import Layout from './components/Layout'
import Profile from './components/Profile'

const App = () => {
  return (
    <main>
      <Layout>
        <Profile />
        <div>Repositories</div>
        <div>Starreds</div>
      </Layout>
    </main>
  )
}

export default App