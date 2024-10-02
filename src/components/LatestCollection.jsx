// import React, { useContext, useEffect, useState } from 'react'
// import { ShopContext } from '../context/ShopContext'
// import Title from './Title';
// import ProductItem from './ProductItem';

// const LatestCollection = () => {

//     const { products } = useContext(ShopContext);

//     const [latestproducts,setLatestProducts] = useState([]);

//     useEffect(()=>{
//            setLatestProducts(products.slice(0,10));
//     },[])


//   return (
//     <div className='my-10'>
//       <div className='text-center py-8 text-3xl'>
//           <Title text1={'LATEST'}  text2={'COLLECTION'} />
//           <p className='w-3/4 m-auto text-xs sm:text-sm md:text-base text-gray-600'>
//           Lorem ipsum dolor sit amet consectetur adipisicing elit. Obcaecati, illo.</p>
//       </div>
      
//       <div className='grid grid-cols-2 sm:grid-cols md:grid-cols-4 lg:grid-cols-5 gap-4 gap-y-6'>
//          {
//           latestproducts.map((item,index) => (
//             <ProductItem key={index} id={item._id} image={item.image} name={item.name}  price={item.price} />
//           ))
//          }
//       </div>
//     </div>
//   )
// }

// export default LatestCollection
import React, { useContext, useEffect, useState } from 'react';
import { ShopContext } from '../context/ShopContext';
import Title from './Title';
import ProductItem from './ProductItem';

const LatestCollection = () => {
    const { products } = useContext(ShopContext);
    const [latestProducts, setLatestProducts] = useState([]);

    useEffect(() => {
        // Only set the latest products if the products array is not empty
        if (products.length > 0) {
            setLatestProducts(products.slice(0, 10));
        }
    }, [products]); // Added products as a dependency

    return (
        <div className='my-10'>
            <div className='text-center py-8 text-3xl'>
                <Title text1={'LATEST'} text2={'COLLECTION'} />
                <p className='w-3/4 m-auto text-xs sm:text-sm md:text-base text-gray-600'>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Obcaecati, illo.
                </p>
            </div>

            <div className='grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4 gap-y-6'>
                {latestProducts.length > 0 ? ( // Check if there are latest products
                    latestProducts.map((item) => (
                        <ProductItem 
                            key={item._id} 
                            id={item._id} 
                            image={item.image} 
                            name={item.name}  
                            price={item.price} 
                        />
                    ))
                ) : (
                    <div className='text-center col-span-full'>No products found.</div> // Fallback message
                )}
            </div>
        </div>
    );
}

export default LatestCollection;
