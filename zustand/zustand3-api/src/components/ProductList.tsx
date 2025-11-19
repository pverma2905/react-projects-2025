// src/components/products/ProductList.tsx
import { useEffect, useState } from "react";
import ProductForm from "./ProductForm";
import { productApi } from "../api/productApi";
import { useAppStore } from "../store/useAppStore";


export default function ProductList() {
  const { products, setProducts, deleteProduct, loading, setLoading } =
    useAppStore();

  const [editId, setEditId] = useState<number | null>(null);

  const fetchProducts = async () => {
    setLoading(true);
    const data = await productApi.getProducts();
    setProducts(data);
    setLoading(false);
  };

  useEffect(() => {
    if (products.length === 0) fetchProducts();
  }, []);

  const handleDelete = async (id: number) => {
    await productApi.deleteProduct(id);
    deleteProduct(id);
  };

  if (loading) return <p>Loading Products...</p>;

  return (
    <div>
      <h2>Products</h2>

      <button onClick={() => setEditId(0)}>Add Product</button>

      {editId !== null && (
        <ProductForm editId={editId} close={() => setEditId(null)} />
      )}

      {products.map((p) => (
        <div key={p.id} style={{ marginTop: 10 }}>
          <strong>{p.title}</strong>

          <button onClick={() => setEditId(p.id)} style={{ marginLeft: 10 }}>
            Edit
          </button>

          <button
            onClick={() => handleDelete(p.id)}
            style={{ marginLeft: 10, color: "red" }}
          >
            Delete
          </button>
        </div>
      ))}
    </div>
  );
}
