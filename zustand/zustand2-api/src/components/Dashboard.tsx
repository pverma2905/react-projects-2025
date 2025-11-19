import React from "react";
import { UsersList } from "./UserList";
import { ProductsList } from "./ProductList";


export const Dashboard: React.FC = () => {
  return (
    <div>
      <h1>Dashboard</h1>
      <UsersList />
      <ProductsList />
    </div>
  );
};
