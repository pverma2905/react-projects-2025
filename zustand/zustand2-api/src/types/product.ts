export interface Product {
  id: number;
  title: string;
  price: number;
  // … other fields
}

export interface ProductState {
  products: Product[];
  loading: boolean;
  error: string | null;

  fetchProducts: () => Promise<void>;
  clearProducts: () => void;
}
