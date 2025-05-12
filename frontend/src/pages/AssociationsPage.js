import { useForm } from 'react-hook-form';
import { useEffect, useState } from 'react';
import axios from 'axios';
import Button from '../components/Button';
import { faLink } from '@fortawesome/free-solid-svg-icons';

function AssociationsPage() {
  const { register, handleSubmit, reset } = useForm();
  const [associations, setAssociations] = useState([]);
  const [products, setProducts] = useState([]);
  const [suppliers, setSuppliers] = useState([]);

  const fetchAll = async () => {
    const [assoc, prod, sup] = await Promise.all([
      axios.get('http://localhost:5000/api/associations'),
      axios.get('http://localhost:5000/api/products'),
      axios.get('http://localhost:5000/api/suppliers'),
    ]);
    setAssociations(assoc.data);
    setProducts(prod.data);
    setSuppliers(sup.data);
  };

  useEffect(() => {
    fetchAll();
  }, []);

  const onSubmit = async (data) => {
    await axios.post('http://localhost:5000/api/associations', data);
    fetchAll();
    reset();
  };

  return (
    <div className="min-h-screen bg-gray-100 flex items-center justify-center p-4">
      <div className="w-full max-w-3xl bg-white rounded-2xl shadow-lg p-8 space-y-8">
        <h1 className="text-3xl font-bold text-center text-blue-600">Associações Produto/Fornecedor</h1>

        <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <select
              {...register('product_id')}
              required
              className="w-full px-4 py-2 border rounded-md focus:ring-2 focus:ring-blue-500 outline-none"
            >
              <option value="">Selecione o Produto</option>
              {products.map(p => (
                <option key={p.id} value={p.id}>{p.name}</option>
              ))}
            </select>

            <select
              {...register('supplier_id')}
              required
              className="w-full px-4 py-2 border rounded-md focus:ring-2 focus:ring-blue-500 outline-none"
            >
              <option value="">Selecione o Fornecedor</option>
              {suppliers.map(s => (
                <option key={s.id} value={s.id}>{s.name}</option>
              ))}
            </select>
          </div>

          <Button type="submit" icon={faLink} variant="info" className="w-full">
            Associar Produto e Fornecedor
          </Button>
        </form>

        <div>
          <h2 className="text-xl font-semibold text-gray-700 mb-3">Associações existentes</h2>
          <ul className="divide-y divide-gray-200">
            {associations.map(a => (
              <li key={`${a.product_id}-${a.supplier_id}`} className="py-2">
                <span className="text-gray-800 font-medium">{a.product_name}</span>{' '}
                <span className="text-sm text-gray-500">fornecido por</span>{' '}
                <span className="text-blue-600">{a.supplier_name}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}

export default AssociationsPage;
