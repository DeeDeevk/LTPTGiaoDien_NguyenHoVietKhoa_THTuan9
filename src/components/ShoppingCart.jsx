import React, { useState } from "react";
import Cart from "./Cart";
import './ShoppingCart.css'

const sampleProducts = [
  { id: 1, name: "Sản phẩm A", price: 100000 },
  { id: 2, name: "Sản phẩm B", price: 200000 },
];

function ShoppingCart() {
  const [cartItems, setCartItems] = useState([]);

  const addItem = (product) => {
    setCartItems((prev) => {
      const existing = prev.find((item) => item.id === product.id);
      if (existing) {
        return prev.map((item) =>
          item.id === product.id ? { ...item, quantity: item.quantity + 1 } : item
        );
      }
      return [...prev, { ...product, quantity: 1 }];
    });
  };

  const removeItem = (id) => {
    setCartItems((prev) => prev.filter((item) => item.id !== id));
  };

  const updateQuantity = (id, quantity) => {
    setCartItems((prev) =>
      prev.map((item) =>
        item.id === id ? { ...item, quantity: Math.max(1, quantity) } : item
      )
    );
  };

  return (
    <div className="app">
      <h1>Danh sách sản phẩm</h1>
      <ul>
        {sampleProducts.map((product) => (
          <li key={product.id}>
            {product.name} - {product.price.toLocaleString()}đ
            <button onClick={() => addItem(product)}>Thêm vào giỏ</button>
          </li>
        ))}
      </ul>

      <Cart
        cartItems={cartItems}
        removeItem={removeItem}
        updateQuantity={updateQuantity}
      />
    </div>
  );
}

export default ShoppingCart;