import React from 'react'
import Layout from './components/layout'

const App = () => {
  return (
    <main>
      <Layout>
        <div>
          <img src="https://avatars.githubusercontent.com/u/77677763?v=4" alt="Avatar of user" />
          <h1> Joan Medeiros </h1>
          <h3> Username: </h3>
          <span>joanmdrs</span>
          <div>
            <div>
              <h4>Followers</h4>
              <span>5</span>
            </div>

            <div>
              <h4>Starred</h4>
              <span>5</span>
            </div>
          </div>
        </div>
        <div>Repositories</div>
        <div>Starreds</div>
      </Layout>
    </main>
  )
}

export default App