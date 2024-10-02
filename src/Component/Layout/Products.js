import React, { useEffect, useState } from 'react';
import Skeleton from 'react-loading-skeleton';
import { useCart } from './CartContext'; // Import the custom hook
import { Link } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';

const Products = () => {
  const { cart, setCart } = useCart(); // Use the cart context
  const [data, setData] = useState([]);
  const [filter, setFilter] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const getProducts = async () => {
      const response = await fetch('https://fakestoreapi.com/products');
      const products = await response.json();
      setData(products);
      setFilter(products);
      setLoading(false);
    };
    getProducts();
  }, []);

  const Loading = () => (
    <div className="row">
      {[...Array(4)].map((_, index) => (
        <div key={index} className="col-md-3">
          <Skeleton height={350} />
        </div>
      ))}
    </div>
  );

  const filterProduct = (cat) => {
    const updatedList = data.filter((x) => x.category === cat);
    setFilter(updatedList);
  };

  const addToCart = (product) => {
    const existingProduct = cart.find((item) => item.id === product.id);
    if (existingProduct) {
      setCart(cart.map((item) =>
        item.id === product.id ? { ...item, quantity: item.quantity + 1 } : item
      ));
    } else {
      setCart([...cart, { ...product, quantity: 1 }]);
    }
  };

  const ShowProducts = () => (
    <>
      {/* Buttons for filtering products */}
      <div className='buttons d-flex justify-content-center mb-5 py-5'>
        <button className='btn ms-2 btn-outline-dark' onClick={() => setFilter(data)}>All Products</button>
        <button className='btn ms-2 btn-outline-dark' onClick={() => filterProduct("men's clothing")}>Men's Clothing</button>
        <button className='btn ms-2 btn-outline-dark' onClick={() => filterProduct("women's clothing")}>Women's Clothing</button>
        <button className='btn ms-2 btn-outline-dark' onClick={() => filterProduct("jewelery")}>Jewellery</button>
        <button className='btn ms-2 btn-outline-dark' onClick={() => filterProduct("electronics")}>Electronics</button>
      </div>

      {/* Display products in a card format */}
      <div className="row">
        {filter.map((product) => (
          <div className="col-md-3 mb-4" key={product.id}>
            <div className="card h-100">
              <img src={product.image} className="card-img-top" alt={product.title} />
              <div className="card-body">
                <h5 className="card-title">{product.title.substring(0, 20)}...</h5>
                <p className="card-text">Category: {product.category}</p>
                <p className="card-text"><strong>Price: ${product.price}</strong></p>
                <button className='btn btn-primary' onClick={() => addToCart(product)}>
                  Add to Cart
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
      <Link to="/cart" className="btn btn-success  mt-3">
      <i class="fa fa-folder me-2"></i
      >Go to Cart
      </Link>
    </>
  );

  return (
    <div>
      <div className='container my-5 py-5'>
        <div className='row'>
          <div className='col-12 mb-5'>
            <h1 className='display-6 fw-bolder text-center'>Products</h1>
            <hr />
          </div>
        </div>
        <div className='row justify-content-center'>
          {loading ? <Loading /> : <ShowProducts />}
        </div>
      </div>
    </div>
  );
};

export default Products;









{/* 
// import React, { useEffect, useState } from 'react';
// import Skeleton from 'react-loading-skeleton';

// const Products = () => {
//   const [data, setData] = useState([]);
//   const [filter, setFilter] = useState([]);
//   const [loading, setLoading] = useState(true);

//   useEffect(() => {
//     const getProducts = async () => {
//       const response = await fetch('https://fakestoreapi.com/products');
//       const products = await response.json();
//       setData(products);
//       setFilter(products);
//       setLoading(false);
//     };
//     getProducts();
//   }, []);

//   const Loading = () => (
//     <>
//       <Skeleton height={350} count={4} />
//     </>
//   );

//   const filterProduct = (cat) => {
//     const updatedList = data.filter((x) => x.category === cat);
//     setFilter(updatedList);
//   };

//   const ShowProducts = () => (
//     <>
//       <div className='buttons d-flex justify-content-center mb-5 py-5'>
//         <button className='btn ms-2 btn-outline-dark' onClick={() => setFilter(data)}>All Products</button>
//         <button className='btn ms-2 btn-outline-dark' onClick={() => filterProduct("men's clothing")}>Men's Clothing</button>
//         <button className='btn ms-2 btn-outline-dark' onClick={() => filterProduct("women's clothing")}>Women's Clothing</button>
//         <button className='btn ms-2 btn-outline-dark' onClick={() => filterProduct("jewelery")}>Jewellery</button>
//         <button className='btn ms-2 btn-outline-dark' onClick={() => filterProduct("electronics")}>Electronics</button>
//       </div>
//       <table className="table">
//   <thead>
//     <tr>
//       <th>ID</th>
//       <th>Title</th>
//       <th>Category</th>
//       <th>Price</th>
//       <th>Image</th>
//     </tr>
//   </thead>
//   <tbody>
//     {filter.map((product) => (
//       <tr key={product.id}>
//         <td>{product.id}</td>
//         <td>{product.title.substring(0, 20)}...</td>
//         <td>{product.category}</td>
//         <td>${product.price}</td>
//         <td>
//           <img src={product.image} alt={product.title} width="50" height="50" />
//         </td>
//       </tr>
//     ))}
//   </tbody>
// </table>

//     </>
//   );

//   return (
//     <div>
//       <div className='container my-5 py-5'>
//         <div className='row'>
//           <div className='col-12 mb-5'>
//             <h1 className='display-6 fw-bolder text-center'>Products</h1>
//             <hr />
//           </div>
//         </div>
//         <div className='row justify-content-center'>
//           {loading ? <Loading /> : <ShowProducts />}
//         </div>
//       </div>
//     </div>
//   );
// };




// export default Products;


 */}
