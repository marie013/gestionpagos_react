import React, { useContext } from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import Pagos from './pages/RegistrarPago';
import Clientes from './pages/clientes/Clientes';
import RegistrarCliente from './pages/clientes/RegistrarCliente';
import Proveedores from './pages/Proveedores';
import Login from './components/Login';
import Comprobantes from './pages/comprobantes';
import Recibo from './components/recibo';
import { AutContext } from './context/AutContext';
import EditarCliente from './pages/clientes/EditarCliente';

function App() {
  const { esAutenticado } = useContext(AutContext);

  const ProtectedRoute = ({ children }) => {
    return esAutenticado ? children : <Navigate to="/" />;
  };

  return (
    <Router>
      {esAutenticado && <Navbar />}
      <div className="main-content">
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/home" element={<ProtectedRoute><Home /></ProtectedRoute>} />
          <Route path="/registrarPago" element={<ProtectedRoute><Pagos /></ProtectedRoute>} />
          <Route path="/clientes" element={<><Clientes /></>} />
          <Route path="/editar/:id" element={<ProtectedRoute><EditarCliente/></ProtectedRoute>} />
          <Route path="/registrarCliente" element={<ProtectedRoute><RegistrarCliente /></ProtectedRoute>} />
          <Route path="/registrar-proveedor" element={<ProtectedRoute><RegistrarCliente /></ProtectedRoute>} />
          <Route path="/pagos" element={<ProtectedRoute><Comprobantes /></ProtectedRoute>} />
          <Route path="/proveedores" element={<ProtectedRoute><Proveedores /></ProtectedRoute>} />
          <Route path="/recibo" element={<ProtectedRoute><Recibo /></ProtectedRoute>} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
