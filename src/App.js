import Home from './pages/Home'
import Clientes from './pages/Clientes'
import Config from './pages/Config'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'

function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/clientes" element={<Clientes />} />
          <Route path="/config" element={<Config />} />
        </Routes>
      </Router>
    </>
  )
}

export default App
