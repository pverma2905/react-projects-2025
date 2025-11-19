import React, { useEffect } from "react";
import { useProductStore } from "../stores/useProductStore";
import type { Product } from "../types/product";

export const ProductsList: React.FC = () => {
  const { products, loading, error, fetchProducts, clearProducts } = useProductStore();

  useEffect(() => {
    fetchProducts();
  }, [fetchProducts]);

  return (
    <div>
      <h2>Products</h2>
      {loading && <p>Loading products...</p>}
      {error && <p style={{ color: "red" }}>{error}</p>}
      {products.length === 0 && !loading && <p>No products loaded.</p>}
      <ul>
        {products.map((p:Product) => (
          <li key={p.id}>
            {p.title} — ${p.price}
          </li>
        ))}
      </ul>
      <button onClick={clearProducts}>Clear Products</button>
    </div>
  );
};
