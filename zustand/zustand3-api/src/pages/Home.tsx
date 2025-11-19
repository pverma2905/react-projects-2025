import React from "react";
import UserList from "../components/UserList";
import ProductList from "../components/ProductList";


const Home: React.FC = () => {
  return (
    <div>
      <h2>Dashboard</h2>
      <UserList />
      <ProductList />
    </div>
  );
};

export default Home;
