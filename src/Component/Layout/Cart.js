import React from 'react';
import { useCart } from './CartContext'; // Import the custom hook

const Cart = () => {
  const { cart, setCart } = useCart(); // Use the cart context

  const removeFromCart = (id, size) => {
    setCart(cart.filter(item => !(item.id === id && item.size === size))); // Remove item from cart based on id and size
  };

  const increaseQuantity = (id, size) => {
    setCart(cart.map(item => 
      item.id === id && item.size === size ? { ...item, quantity: item.quantity + 1 } : item
    ));
  };

  const decreaseQuantity = (id, size) => {
    setCart(cart.map(item => 
      item.id === id && item.size === size && item.quantity > 1 
        ? { ...item, quantity: item.quantity - 1 } 
        : item
    ));
  };

  // Calculate the total price of the cart
  const calculateTotal = () => {
    return cart.reduce((total, item) => total + (item.price * item.quantity), 0).toFixed(2);
  };

  return (
    <div className="container mt-5"> {/* Bootstrap container and margin top */}
      <h1 className="text-center mb-4">Your Cart </h1> {/* Centered title */}

      {/* Conditional Rendering: Show message if cart is empty */}
      {cart.length === 0 ? (
        <p className="text-center">Your cart is empty</p> /* your cart is empty centered */
      ) : (
        <>
          <table className="table table-striped text-center">
            <thead>
              <tr>
                <th>Image</th>
                <th>Title</th>
                <th>Price</th>
                <th>Size</th>
                <th>Quantity</th>
                <th>Total Price</th>
                <th>Action</th>
              </tr>
            </thead>
            <tbody>
              {cart.map(item => (
                <tr key={`${item.id}-${item.size}`}>
                  <td>
                    <img src={item.image} alt={item.title} width="50" height="50" />
                  </td>
                  <td>{item.title}</td>
                  <td>${item.price}</td>
                  <td>{item.size}</td>
                  <td>
                    <div className="d-flex justify-content-center align-items-center">
                      <button 
                        className="btn btn-outline-secondary btn-sm mx-2"
                        onClick={() => decreaseQuantity(item.id, item.size)}
                      >
                        <i className="fa fa-minus"></i> {/* FontAwesome minus icon */}
                      </button>
                      <span>{item.quantity}</span>
                      <button 
                        className="btn btn-outline-secondary btn-sm mx-2"
                        onClick={() => increaseQuantity(item.id, item.size)}
                      >
                        <i className="fa fa-plus"></i> {/* FontAwesome plus icon */}
                      </button>
                    </div>
                  </td>
                  <td>${(item.price * item.quantity).toFixed(2)}</td>
                  <td>
                    <button 
                      className="btn btn-danger btn-sm"
                      onClick={() => removeFromCart(item.id, item.size)}
                    ><i  className="fa fa-trash"></i> {/* FontAwesome trash icon */}

                      Remove
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>

          {/* Display Grand Total */}
          <div className="text-end mt-4">
            <h3>Total: ${calculateTotal()}</h3>
          </div>
        </>
      )}
    </div>
  );
};

export default Cart;
