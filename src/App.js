import React, { useState, useEffect } from 'react'
import axios from 'axios'

import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from 'react-router-dom'

import Home from './pages/Home'
import Clientes from './pages/Clientes'
import Config from './pages/Config'
import Login from './pages/Login'
import Cadastrar from './pages/CadastrarUsuario'
import NovoChamado from './pages/NovoChamado'
import EditarChamado from './pages/EditarChamado'

// import jwt_decode from 'jwt-decode'

function App() {
  const [isAuthenticated, setIsAuthenticated] = useState(false)

  function handleLogin() {
    setIsAuthenticated(true)
  }

  useEffect(() => {
    const token = localStorage.getItem('chave_secreta_do_token')
    if (token) {
      // const decoded = jwt_decode(token)
      axios
        .post('http://localhost:8000/verificar-token', { token })
        .then((response) => {
          setIsAuthenticated(response.data.isAuthenticated)
        })
        .catch((error) => {
          console.log(error)
          setIsAuthenticated(false)
        })
    } else {
      setIsAuthenticated(false)
    }
  }, [])

  return (
    <Router>
      <Routes>
        <Route
          path="/"
          element={isAuthenticated ? <Home /> : <Navigate to="/login" />}
        />
        <Route
          path="/clientes"
          element={isAuthenticated ? <Clientes /> : <Navigate to="/login" />}
        />
        <Route
          path="/config"
          element={isAuthenticated ? <Config /> : <Navigate to="/login" />}
        />
        <Route
          path="/novo-chamado"
          element={isAuthenticated ? <NovoChamado /> : <Navigate to="/login" />}
        />
        <Route
          path="/editar-chamado"
          element={
            isAuthenticated ? <EditarChamado /> : <Navigate to="/login" />
          }
        />
        <Route path="/login" element={<Login handleLogin={handleLogin} />} />
        <Route path="/nova-conta" element={<Cadastrar />} />
      </Routes>
    </Router>
  )
}

export default App
