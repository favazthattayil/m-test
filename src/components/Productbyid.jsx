import React, { useState, useEffect } from 'react';
import axios from 'axios';

const ProductView = () => {
  const [product, setProduct] = useState(null);
  const [productId, setProductId] = useState('');

  const fetchProduct = async () => {
    try {
      const response = await axios.get(`http://apitextile.eyeterp.com/product/deletproduct/productViewById?id=${productId}`);
      setProduct(response.data);
    } catch (error) {
      console.error('Error fetching product:', error);
    }
  };

  useEffect(() => {
    if (productId) {
      fetchProduct();
    }
  }, [productId]);

  const handleSubmit = (e) => {
    e.preventDefault();
    fetchProduct();
  };

  if (!product) {
    return (
      <div className='grid-centre'>
        <form onSubmit={handleSubmit}>
          <input
            type="text"
            value={productId}
            onChange={(e) => setProductId(e.target.value)}
            placeholder="Enter Product ID"
          />
          <button className='prdct-btn grid-centre' type="submit">View Product</button>
        </form>
        
      </div>
    );
  }

  return (
    <div>
      <h2>{product.name}</h2>
      <p>{product.description}</p>
     
    </div>
  );
};

export default ProductView;


