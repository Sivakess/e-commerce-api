import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { useCart } from './CartContext'; // Ensure you import your cart context

const Home = () => {
  const { cart, setCart } = useCart(); // Use cart context

  // Example array of product details
  const products = [
    {
      id: 1,
      image: "/Img/1 pic.jpg",
      title: "Product 1",
      price: 19.99,
    },
    {
      id: 2,
      image: "/Img/3pic.jpg", // Replace with actual image URL
      title: "Product 2",
      price: 29.99,
    },
    {
      id: 3,
      image: "/Img/jwel2.webp", // Replace with actual image URL
      title: "Product 3",
      price: 39.99,
    },
    {
      id: 4,
      image: "/Img/4 pic.jpg", // Replace with actual image URL
      title: "Product 4",
      price: 49.99,
    },
  ];

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

  return (
    <div className="container my-5">
      {/* Carousel Section */}
      <div id="carouselExample" className="carousel slide" data-bs-ride="carousel">
        <div className="carousel-inner">
          <div className="carousel-item active">
            <img src="/Img/pic 2.jpg" className="d-block w-100" alt="First slide" />
            <div className="carousel-caption d-none d-md-block">
              <h5>First Slide Label</h5>
              <p>Some representative placeholder content for the first slide.</p>
            </div>
          </div>
          <div className="carousel-item">
            <img src="/Img/pic4.jpg" className="d-block w-100" alt="Second slide" />
            <div className="carousel-caption d-none d-md-block">
              <h5>Second Slide Label</h5>
              <p>Some representative placeholder content for the second slide.</p>
            </div>
          </div>
          <div className="carousel-item">
            <img src="/Img/pic6.jpg" className="d-block w-100" alt="Second slide" />
            <div className="carousel-caption d-none d-md-block">
              <h5>Second Slide Label</h5>
              <p>Some representative placeholder content for the second slide.</p>
            </div>
          </div>
          <div className="carousel-item">
            <img src="/Img/jwel.webp" className="d-block w-100" alt="Third slide" />
            <div className="carousel-caption d-none d-md-block">
              <h5>Third Slide Label</h5>
              <p>Some representative placeholder content for the third slide.</p>
            </div>
          </div>
          <div className="carousel-item">
            <img src="/Img/pc coffe.jpg" className="d-block w-100" alt="Fourth slide" />
            <div className="carousel-caption d-none d-md-block">
              <h5>Fourth Slide Label</h5>
              <p>Some representative placeholder content for the fourth slide.</p>
            </div>
          </div>
          <div className="carousel-item">
            <img src="/Img/pic 5.avif" className="d-block w-100" alt="Fourth slide" />
            <div className="carousel-caption d-none d-md-block">
              <h5>Fourth Slide Label</h5>
              <p>Some representative placeholder content for the fourth slide.</p>
            </div>
          </div>
          <div className="carousel-item">
            <img src="/Img/pic51.avif" className="d-block w-100" alt="Fourth slide" />
            <div className="carousel-caption d-none d-md-block">
              <h5>Fourth Slide Label</h5>
              <p>Some representative placeholder content for the fourth slide.</p>
            </div>
          </div>
          <div className="carousel-item">
            <img src="/Img/pic3.jpg" className="d-block w-100" alt="Third slide" />
            <div className="carousel-caption d-none d-md-block">
              <h5>Third Slide Label</h5>
              <p>Some representative placeholder content for the third slide.</p>
            </div>
          </div>
          <div className="carousel-item">
            <img src="/Img/pic 1.jpg" className="d-block w-100" alt="Third slide" />
            <div className="carousel-caption d-none d-md-block">
              <h5>Third Slide Label</h5>
              <p>Some representative placeholder content for the third slide.</p>
            </div>
          </div>
          <div className="carousel-item">
            <img src="/Img/pic7.jpg" className="d-block w-100" alt="Third slide" />
            <div className="carousel-caption d-none d-md-block">
              <h5>Third Slide Label</h5>
              <p>Some representative placeholder content for the third slide.</p>
            </div>
          </div>
        </div>
        <button className="carousel-control-prev" type="button" data-bs-target="#carouselExample" data-bs-slide="prev">
          <span className="carousel-control-prev-icon" aria-hidden="true"></span>
          <span className="visually-hidden">Previous</span>
        </button>
        <button className="carousel-control-next" type="button" data-bs-target="#carouselExample" data-bs-slide="next">
          <span className="carousel-control-next-icon" aria-hidden="true"></span>
          <span className="visually-hidden">Next</span>
        </button>
      </div>

      {/* Featured Products Section */}
      <div className="mt-5">
        <h2>Featured Products</h2>
        <div className="row">
          {products.map((product) => (
            <div className="col-md-3 mb-4" key={product.id}>
              <div className="card h-100">
                <img src={product.image} className="card-img-top" alt={product.title} />
                <div className="card-body">
                  <h5 className="card-title">{product.title}</h5>
                  <p className="card-text">${product.price.toFixed(2)}</p>
                  <button 
                    className="btn btn-outline-primary" 
                    onClick={() => addToCart(product)}
                  >
                    Add to Cart
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Home;
