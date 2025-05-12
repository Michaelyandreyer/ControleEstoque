import { useForm } from 'react-hook-form';
import { useEffect, useState } from 'react';
import axios from 'axios';
import Button from '../components/Button';
import { faPlus, faTrash } from '@fortawesome/free-solid-svg-icons';

function ProductsPage() {
  const { register, handleSubmit, reset } = useForm();
  const [products, setProducts] = useState([]);

  const fetchProducts = async () => {
    const { data } = await axios.get('http://localhost:5000/api/products');
    setProducts(data);
  };

  useEffect(() => {
    fetchProducts();
  }, []);

  const onSubmit = async (data) => {
    await axios.post('http://localhost:5000/api/products', data);
    fetchProducts();
    reset();
  };

  const deleteProduct = async (id) => {
    await axios.delete(`http://localhost:5000/api/products/${id}`);
    fetchProducts();
  };

  return (
    <div className="min-h-screen bg-gray-100 flex items-center justify-center p-4">
      <div className="w-full max-w-3xl bg-white rounded-2xl shadow-lg p-8 space-y-8">
        <h1 className="text-3xl font-bold text-center text-blue-600">Cadastro de Produtos</h1>

        <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <input
              {...register('name')}
              placeholder="Nome"
              required
              className="w-full px-4 py-2 border rounded-md focus:ring-2 focus:ring-blue-500 outline-none"
            />
            <input
              {...register('description')}
              placeholder="Descrição"
              className="w-full px-4 py-2 border rounded-md focus:ring-2 focus:ring-blue-500 outline-none"
            />
            <input
              {...register('price')}
              placeholder="Preço"
              type="number"
              step="0.01"
              required
              className="w-full px-4 py-2 border rounded-md focus:ring-2 focus:ring-blue-500 outline-none"
            />
            <input
              {...register('barcode')}
              placeholder="Código de Barras"
              className="w-full px-4 py-2 border rounded-md focus:ring-2 focus:ring-blue-500 outline-none"
            />
          </div>
          <Button type="submit" icon={faPlus} variant="success" className="w-full">
            Salvar Produto
          </Button>
        </form>

        <div>
          <h2 className="text-xl font-semibold text-gray-700 mb-3">Lista de Produtos</h2>
          <ul className="divide-y divide-gray-200">
            {products.map((prod) => (
              <li key={prod.id} className="flex justify-between items-center py-2">
                <div>
                  <p className="text-gray-800 font-medium">{prod.name}</p>
                  <p className="text-sm text-gray-500">R$ {Number(prod.price).toFixed(2)}</p>
                </div>
                <Button
                  onClick={() => deleteProduct(prod.id)}
                  icon={faTrash}
                  variant="error"
                  className="px-3 py-1 text-sm"
                >
                  Excluir
                </Button>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}

export default ProductsPage;
