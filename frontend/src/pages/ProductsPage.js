import { useForm } from 'react-hook-form';
import { useEffect, useState } from 'react';
import axios from 'axios';

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
    <div>
      <h1>Produtos</h1>
      <form onSubmit={handleSubmit(onSubmit)}>
        <input {...register('name')} placeholder="Nome" required />
        <input {...register('description')} placeholder="Descrição" />
        <input {...register('price')} placeholder="Preço" type="number" step="0.01" required />
        <input {...register('barcode')} placeholder="Código de Barras" />
        <button type="submit">Salvar</button>
      </form>

      <ul>
        {products.map(prod => (
          <li key={prod.id}>
            {prod.name} - R${prod.price}
            <button onClick={() => deleteProduct(prod.id)}>Excluir</button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default ProductsPage;
