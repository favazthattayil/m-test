import React, { useEffect, useState } from 'react';
import axios from 'axios';

const GetApi = () => {
  const [data, setData] = useState(null);


  //fetch dat using axios
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get('http://apitextile.eyeterp.com/product/viewproduct');
        setData(response.data);
        console.log('Fetched data:', response.data);

        //console the error
      } catch (error) {
        console.error('Error:', error);
      }
    };

    fetchData();
  }, []);


  //show message when no data avilble from api
  if (!data) {
    return <div className='grid-centre'>Sorry, no products are available now. We will update soon.</div>;
  }

  return (
    <div>
      <h1>Product Details</h1>
      <p>Name: {data.name}</p>
      <p>Price: {data.price}</p>
      
    </div>
  );
};

export default GetApi;

