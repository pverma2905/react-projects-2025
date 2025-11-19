// src/components/products/ProductForm.tsx
import { useEffect, useState } from "react";

import { productApi } from "../api/productApi";
import { useAppStore, type Product } from "../store/useAppStore";


interface Props {
  editId: number;
  close: () => void;
}

export default function ProductForm({ editId, close }: Props) {
  const { products, addProduct, updateProduct } = useAppStore();

  const editingProduct: Product | undefined = products.find(
    (p) => p.id === editId
  );

  const [form, setForm] = useState<Partial<Product>>({
    title: "",
  });

  useEffect(() => {
    if (editingProduct) setForm(editingProduct);
  }, [editId]);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setForm({ ...form, title: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (editingProduct) {
      const updated = await productApi.updateProduct(editId, form);
      updateProduct(updated);
    } else {
      const created = await productApi.createProduct(form);
      addProduct(created);
    }

    close();
  };

  return (
    <form onSubmit={handleSubmit} style={{ marginTop: 20 }}>
      <h3>{editingProduct ? "Update Product" : "Add Product"}</h3>

      <input
        name="title"
        placeholder="Product Title"
        value={form.title || ""}
        onChange={handleChange}
        required
      />

      <button type="submit" style={{ marginLeft: 10 }}>
        Save
      </button>
    </form>
  );
}
