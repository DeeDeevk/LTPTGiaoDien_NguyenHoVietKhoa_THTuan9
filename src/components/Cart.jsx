import React from "react";

function Cart({ cartItems, removeItem, updateQuantity }) {
  const totalQuantity = cartItems.reduce((sum, item) => sum + item.quantity, 0);
  const totalPrice = cartItems.reduce(
    (sum, item) => sum + item.price * item.quantity,
    0
  );

  return (
    <div className="cart">
      <h2>Giỏ hàng</h2>
      {cartItems.length === 0 ? (
        <p>Giỏ hàng trống</p>
      ) : (
        <ul>
          {cartItems.map((item) => (
            <li key={item.id}>
              {item.name} - {item.price.toLocaleString()}đ x{" "}
              <input
                type="number"
                min="1"
                value={item.quantity}
                onChange={(e) => updateQuantity(item.id, parseInt(e.target.value))}
              />
              <button onClick={() => removeItem(item.id)}>Xoá</button>
            </li>
          ))}
        </ul>
      )}
      <p>
        <strong>Tổng số lượng:</strong> {totalQuantity}
      </p>
      <p>
        <strong>Tổng tiền:</strong> {totalPrice.toLocaleString()}đ
      </p>
    </div>
  );
}

export default Cart;