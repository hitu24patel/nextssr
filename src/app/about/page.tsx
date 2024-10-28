import type { Metadata } from "next";
import React from 'react';

type Product = {
  id: number;
  title: string;
  description: string;
  price: number;
};
export const metadata: Metadata = {
  title: "This is about page title",
  description: "This is about page description",
};

export default async function About() {
  // Fetch product data from the dummyjson API
  const res = await fetch('https://dummyjson.com/products');
  
  // Handle any fetch errors
  if (!res.ok) {
    throw new Error("Failed to fetch data from the API");
  }

  // Parse JSON response and retrieve products
  const data = await res.json();
  const products: Product[] = data.products;

  return (
    <div>
      <h1>About Our Products</h1>
      
      {/* List of products */}
      <section>
        <h2>Products</h2>
        <ul>
          {products.map((product) => (
            <li key={product.id} style={{ marginBottom: '1rem', padding: '1rem', border: '1px solid #ddd' }}>
              <h3>{product.title}</h3>
              <p>{product.description}</p>
              <p><strong>Price:</strong> ${product.price}</p>
            </li>
          ))}
        </ul>
      </section>
    </div>
  );
}


