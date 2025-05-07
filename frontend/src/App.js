import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import ProductsPage from './pages/ProductsPage';
import SuppliersPage from './pages/SuppliersPage';
import AssociationsPage from './pages/AssociationsPage';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<ProductsPage />}>
          <Route path="produtos" element={<ProductsPage />} />
          <Route path="fornecedores" element={<SuppliersPage />} />
          <Route path="associacoes" element={<AssociationsPage />} />
        </Route>
      </Routes>
    </Router>
  );
}

export default App;
