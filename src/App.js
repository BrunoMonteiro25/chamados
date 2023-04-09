import Home from './pages/Home'
import Clientes from './pages/Clientes'
import Config from './pages/Config'
import Login from './pages/Login'
import Cadastrar from './pages/CadastrarUsuario'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'

function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/clientes" element={<Clientes />} />
          <Route path="/config" element={<Config />} />
          <Route path="/login" element={<Login />} />
          <Route path="/nova-conta" element={<Cadastrar />} />
        </Routes>
      </Router>
    </>
  )
}

export default App
