import React, { useState, useEffect, } from "react";
import "./App.css";
import LoginForm from "./components/login";
import Dashboard from "./components/dashboard";
import { useAppDispatch, useAppSelector } from "./app/hooks";

import { Route, Routes, useNavigate } from 'react-router-dom'
import NotFound from "./components/notfound";



function App() {
  const nativation = useNavigate()



  useEffect(() => {
    const chat_app_token = localStorage.getItem('chat_app_token')
    if (chat_app_token) {
      nativation('/home')
    }
    else {
      const rawToken = window.location.pathname.slice(1)
      if (rawToken.includes('Bearer')) {
        const token = rawToken.split('Bearer')[1]
        localStorage.setItem('chat_app_token', token)
        window.location.href = 'home'
      }

    }
  }, [])

  return (
    <div className="App bg-[#333] h-screen text-white font-xs">

      <Routes>
        <Route path="/login" element={<LoginForm />} />
        <Route path="/home" element={<Dashboard />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </div>
  );
}

export default App;
