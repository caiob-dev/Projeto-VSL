/* import { useState } from 'react' */
import React from 'react'
import Header from './components/Header'
import Main from './pages/Main'
import Footer from './components/Footer'
import Produtos from './components/Produtos'
import Testemunhas from './components/Testemunhas'
import Checkout from './pages/Checkout'
import Agradecimento from './pages/Agradecimento'
import { Route, Routes } from 'react-router-dom'

export default function App() {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />

      <Routes>
        <Route
          path="/"
          element={
            <>
              <Main />
              <Produtos />
              <Testemunhas />
            </>
          }
        />
        <Route path="/checkout" element={<Checkout />} />
        <Route path="/agradecimento" element={<Agradecimento />} />
      </Routes>
      <Footer />
    </div>
  )
}

