import React, { useState, useEffect } from 'react'
import axios from 'axios'

import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'

import Home from './pages/Home'
import Clientes from './pages/Clientes'
import Config from './pages/Config'
import Login from './pages/Login'
import Cadastrar from './pages/CadastrarUsuario'
import NovoChamado from './pages/NovoChamado'
import EditarChamado from './pages/EditarChamado'

function App() {
  const [isAuthenticated, setIsAuthenticated] = useState(false)
  const [clientes, setClientes] = useState([])

  function handleLogin() {
    setIsAuthenticated(true)
  }

  useEffect(() => {
    const token = localStorage.getItem('chave_secreta_do_token')
    if (token) {
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

  async function listarClientes() {
    try {
      const response = await axios.get('http://localhost:8000/clientes')
      return response.data
    } catch (error) {
      console.error(error)
    }
  }

  useEffect(() => {
    async function carregaClientes() {
      const data = await listarClientes()
      setClientes(data)
    }

    carregaClientes()
  }, [])

  const createRoute = (path, component) => {
    return isAuthenticated ? (
      <Route path={path} element={component} />
    ) : (
      <Route path={path} element={<Login handleLogin={handleLogin} />} />
    )
  }

  return (
    <Router>
      <Routes>
        {createRoute('/', <Home />)}
        {createRoute('/clientes', <Clientes clientes={clientes} />)}
        {createRoute('/config', <Config />)}
        {createRoute('/novo-chamado', <NovoChamado clientes={clientes} />)}
        {createRoute('/editar-chamado', <EditarChamado clientes={clientes} />)}
        <Route path="/login" element={<Login handleLogin={handleLogin} />} />
        <Route path="/nova-conta" element={<Cadastrar />} />
      </Routes>
    </Router>
  )
}

export default App
