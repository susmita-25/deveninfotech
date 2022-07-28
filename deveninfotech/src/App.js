import React from 'react'
import { Route, Routes } from 'react-router-dom'

import LandingPage from './components/pages/LandingPage'
import LoginPage from './components/pages/LoginPage'
import RegisterPage from './components/pages/RegisterPage'
import HomePage from './components/pages/HomePage'

import './App.css'

export default function App() {
    return (
        <div>
                <Routes>
                    <Route exact path="/" element={<LandingPage/>} />
                    <Route path="/login" element={<LoginPage/>} />
                    <Route path="/register" element={<RegisterPage/>} />
                    <Route path="/home" element={<HomePage/>} />
                </Routes>
            </div>
    )
}