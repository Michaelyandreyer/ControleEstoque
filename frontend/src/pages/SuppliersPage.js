import { useForm } from 'react-hook-form';
import { useEffect, useState } from 'react';
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
    <div>
      <h1>Fornecedores</h1>
      <form onSubmit={handleSubmit(onSubmit)}>
        <input {...register('name')} placeholder="Nome" required />
        <input {...register('cnpj')} placeholder="CNPJ" />
        <input {...register('address')} placeholder="Endereço" />
        <input {...register('contact')} placeholder="Contato" />
        <button type="submit">Salvar</button>
      </form>

      <ul>
        {suppliers.map(sup => (
          <li key={sup.id}>
            {sup.name}
            <button onClick={() => deleteSupplier(sup.id)}>Excluir</button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default SuppliersPage;
