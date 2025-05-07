import { useForm } from 'react-hook-form';
import { useEffect, useState } from 'react';
import axios from 'axios';

function AssociationsPage() {
  const { register, handleSubmit, reset } = useForm();
  const [associations, setAssociations] = useState([]);
  const [products, setProducts] = useState([]);
  const [suppliers, setSuppliers] = useState([]);

  const fetchAll = async () => {
    const assoc = await axios.get('http://localhost:5000/api/associations');
    const prod = await axios.get('http://localhost:5000/api/products');
    const sup = await axios.get('http://localhost:5000/api/suppliers');
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
    <div>
      <h1>Associações Produto/Fornecedor</h1>
      <form onSubmit={handleSubmit(onSubmit)}>
        <select {...register('product_id')} required>
          <option value="">Selecione o Produto</option>
          {products.map(p => (
            <option key={p.id} value={p.id}>{p.name}</option>
          ))}
        </select>

        <select {...register('supplier_id')} required>
          <option value="">Selecione o Fornecedor</option>
          {suppliers.map(s => (
            <option key={s.id} value={s.id}>{s.name}</option>
          ))}
        </select>

        <button type="submit">Associar</button>
      </form>

      <ul>
        {associations.map(a => (
          <li key={`${a.product_id}-${a.supplier_id}`}>
            {a.product_name} fornecido por {a.supplier_name}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default AssociationsPage;
