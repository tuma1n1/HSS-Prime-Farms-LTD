import React from 'react'
import { Routes, Route } from 'react-router-dom'

import Navbar from './components/Navbar'
import Footer from './components/Footer'
import Home from './pages/Home'
import Agribusiness from './pages/Agribusiness'
import Poultry from './pages/Poultry'
import Meats from './pages/Meats'
import Outlets from './pages/Outlets'
import About from './pages/About'
import Contact from './pages/Contact'


export default function App(){
    return (
        <div>
            <Navbar />
            <Routes>
                <Route path='/' element={<Home/>} />
                <Route path='/agribusiness' element={<Agribusiness/>} />
                <Route path='/poultry' element={<Poultry/>} />
                <Route path='/meats' element={<Meats/>} />
                <Route path='/outlets' element={<Outlets/>} />
                <Route path='/about' element={<About/>} />
                <Route path='/contact' element={<Contact/>} />
            </Routes>
            <Footer />
        </div>
    )
}