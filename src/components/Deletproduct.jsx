import React, { useState } from 'react';
import axios from 'axios';

function ProductDeleteButton({ productId }) {
  const [isLoading, setIsLoading] = useState(false);

  const handleDelete = () => {
    setIsLoading(true);

    axios.delete(`http://apitextile.eyeterp.com/product/deletproduct/${productId}`, {
      headers: {
        'Content-Type': 'application/json',
      },
    })
      .then(response => {
        console.log('Product deleted successfully.');       
      })
      .catch(error => {
        console.log('Failed to delete the product:', error);        
      })
      .finally(() => {
        setIsLoading(false);
      });
  };

  return (
    <div className="grid-centre">

      <h2>button for dleting an object from array of the api using id</h2>
      <p>this button for every product so when you click it the product id will trigger the "handleDelete"</p>
      <button className='dlt-btn' onClick={handleDelete} disabled={isLoading}>
      {isLoading ? 'Deleting...' : 'Delete Product'}
    </button>
    </div>
    
  );
}

export default ProductDeleteButton;
