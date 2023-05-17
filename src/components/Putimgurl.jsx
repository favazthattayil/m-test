import React, { useState } from 'react';
import axios from 'axios';

const YourComponent = () => {
  const [data, setData] = useState([
    { key: 'delet url', value: '', description: 'image url to be updated' },
    { key: 'add url', value: '', description: 'file to be uploaded' },
    { key: 'id', value: '', description: 'primary key of product' },
  ]);

  const handleValueChange = (event, index) => {
    const updatedData = [...data];
    updatedData[index].value = event.target.value;
    setData(updatedData);
  };

  const handleUpdate = () => {
    data.forEach(item => {
      axios.post('http://apitextile.eyeterp.com/product/deletproduct/updateImageUrl', {
        key: item.key,
        value: item.value,
        description: item.description
      })
        .then(response => {
          // Handle successful response
          console.log(response.data);
        })
        .catch(error => {
          // Handle error
          console.error(error);
        });
    });
  };

  return (
    <div className='post'>
      <table style={{ borderCollapse: 'collapse', width: '100%' }}>
        <thead>
          <tr>
            <th className='clr-red'>Key</th>
            <th className='clr-red'>Value</th>
            <th className='clr-red'>Description</th>
          </tr>
        </thead>
        <tbody>
          {data.map((item, index) => (
            <tr key={index}>
              <td className='clr-red'>{item.key}</td>
              <td>
                <input
                  type="text"
                  value={item.value}
                  onChange={(event) => handleValueChange(event, index)}
                />
              </td>
              <td className='clr-red'>{item.description}</td>
            </tr>
          ))}
        </tbody>
      </table>
      <button className='post-btn' onClick={handleUpdate}>
        Update
      </button>
    </div>
  );
};

export default YourComponent;
