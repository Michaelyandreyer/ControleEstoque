// App.tsx
import { BrowserRouter as Router, Routes, Route, NavLink } from 'react-router-dom';
import ProductsPage from './pages/ProductsPage';
import SuppliersPage from './pages/SuppliersPage';
import AssociationsPage from './pages/AssociationsPage';

function App() {
  return (
    <Router>
      <div className="min-h-screen flex bg-gray-100">
        {/* Sidebar */}
        <aside className="w-64 bg-white shadow-lg p-6 space-y-4">
          <h2 className="text-2xl font-bold text-blue-600 mb-6">Painel Admin</h2>
          <nav className="flex flex-col space-y-2">
            <NavLink
              to="/produtos"
              className={({ isActive }) =>
                `px-4 py-2 rounded-md ${isActive ? 'bg-blue-600 text-white' : 'text-gray-700 hover:bg-blue-100'}`
              }
            >
              Produtos
            </NavLink>
            <NavLink
              to="/fornecedores"
              className={({ isActive }) =>
                `px-4 py-2 rounded-md ${isActive ? 'bg-blue-600 text-white' : 'text-gray-700 hover:bg-blue-100'}`
              }
            >
              Fornecedores
            </NavLink>
            <NavLink
              to="/associacoes"
              className={({ isActive }) =>
                `px-4 py-2 rounded-md ${isActive ? 'bg-blue-600 text-white' : 'text-gray-700 hover:bg-blue-100'}`
              }
            >
              Associações
            </NavLink>
          </nav>
        </aside>

        {/* Main content */}
        <main className="flex-1 p-6">
          <Routes>
            <Route path="/produtos" element={<ProductsPage />} />
            <Route path="/fornecedores" element={<SuppliersPage />} />
            <Route path="/associacoes" element={<AssociationsPage />} />
            <Route path="*" element={<ProductsPage />} /> {/* Fallback para Produtos */}
          </Routes>
        </main>
      </div>
    </Router>
  );
}

export default App;
