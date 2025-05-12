import { useForm } from 'react-hook-form';
import { useEffect, useState } from 'react';
import { faPlus } from "@fortawesome/free-solid-svg-icons";
import { faTrash } from "@fortawesome/free-solid-svg-icons";
import Button from 'components/Button';
import axios from 'axios';

function SuppliersPage() {
  const { register, handleSubmit, reset } = useForm();
  const [suppliers, setSuppliers] = useState([]);

  const fetchSuppliers = async () => {
    const { data } = await axios.get('http://localhost:5000/api/suppliers');
    setSuppliers(data);
  };

  useEffect(() => {
    fetchSuppliers();
  }, []);

  const onSubmit = async (data) => {
    await axios.post('http://localhost:5000/api/suppliers', data);
    fetchSuppliers();
    reset();
  };

  const deleteSupplier = async (id) => {
    await axios.delete(`http://localhost:5000/api/suppliers/${id}`);
    fetchSuppliers();
  };

  return (
    <div className="min-h-screen bg-gray-100 flex items-center justify-center p-4">
      <div className="w-full max-w-3xl bg-white rounded-2xl shadow-lg p-8 space-y-8">
        <h1 className="text-3xl font-bold text-center text-blue-600">Cadastro de Fornecedores</h1>

        <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <input
              {...register('name')}
              placeholder="Nome"
              required
              className="w-full px-4 py-2 border rounded-md focus:ring-2 focus:ring-blue-500 outline-none"
            />
            <input
              {...register('cnpj')}
              placeholder="CNPJ"
              className="w-full px-4 py-2 border rounded-md focus:ring-2 focus:ring-blue-500 outline-none"
            />
            <input
              {...register('address')}
              placeholder="Endereço"
              className="w-full px-4 py-2 border rounded-md focus:ring-2 focus:ring-blue-500 outline-none"
            />
            <input
              {...register('contact')}
              placeholder="Contato"
              className="w-full px-4 py-2 border rounded-md focus:ring-2 focus:ring-blue-500 outline-none"
            />
          </div>
          <Button type="submit" icon={faPlus}>
             Salvar Fornecedor
          </Button>

        </form>

        <div>
          <h2 className="text-xl font-semibold text-gray-700 mb-3">Lista de Fornecedores</h2>
          <ul className="divide-y divide-gray-200">
            {suppliers.map((sup) => (
              <li key={sup.id} className="flex justify-between items-center py-2">
                <div>
                  <p className="text-gray-800 font-medium">{sup.name}</p>
                  <p className="text-sm text-gray-500">{sup.contact}</p>
                </div>
                <Button
                  onClick={() => deleteSupplier(sup.id)}
                  variant="error"
                  icon={faTrash}
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

export default SuppliersPage;
