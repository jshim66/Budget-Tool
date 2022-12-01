import React from 'react'

import {Brand, Feature, Graph, Navbar} from './components';
const App = () => {
  return (
    <div className = "App">
        <div className = "gradient__bg">
            <Navbar />
        </div>
        <Brand />
        <Graph />
        <Feature />

    </div>
  )
}

export default App