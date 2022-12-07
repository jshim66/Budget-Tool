import React from 'react'

import {Analysis, Brand, Expense , Graph, Navbar} from './components';
import './app.css';

const App = () => {
  return (
    <div className = "App">
        <div className = "header-bg">
            <Brand />
            <Navbar />
        </div>
        <div className = "tracker-bg">
            <h1 className = "tracker-title">Tracker</h1>
            <Expense />
        </div>
        <div className='analysis-bg'>
            <Analysis />
            <Graph />
        </div>
        
        

    </div>
  )
}

export default App