import React, {useState, useEffect} from 'react'
import Navigation from './components/Navigation/Navigation'
import {Routes, Route} from 'react-router-dom';

import './App.css'
import Customers from './pages/Customers/Customers';
import Invoices from './pages/Invoices/Invoices'

const App = () => {
  const [currentTab, setCurrentTab] = useState('index')

  return (
    <div className='appWrapper'>
        <Navigation currentTab={currentTab} setCurrentTab={setCurrentTab} />

        <Routes>
          <Route path="/" element={<h1>HOME</h1>} />
          <Route path="/invoices" element={<Invoices setCurrentTab={setCurrentTab} />} />
          <Route path="/customers" element={<Customers setCurrentTab={setCurrentTab} />} />

        </Routes>
    </div>
  )
}

export default App