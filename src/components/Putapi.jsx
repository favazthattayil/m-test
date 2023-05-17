import React, { useState } from 'react';
import axios from 'axios';

const Table = () => {
  const [data, setData] = useState([
    { key: 'ProductName', value: '', description: '' },
    { key: 'Description', value: '', description: '' },
    { key: 'Price', value: '', description: '' },
    { key: 'id', value: '', description: '' }
  ]);

  const handleValueChange = (event, index) => {
    const updatedData = [...data];
    updatedData[index].value = event.target.value;
    setData(updatedData);
  };

  const handleDescriptionChange = (event, index) => {
    const updatedData = [...data];
    updatedData[index].description = event.target.value;
    setData(updatedData);
  };

  const handleUpdate = () => {
    const payload = data.reduce((result, item) => {
      result[item.key.toLowerCase()] = item.value;
      result[`${item.key.toLowerCase()}_description`] = item.description;
      return result;
    }, {});

    console.log('Table data:', payload);

    axios.put('http://apitextile.eyeterp.com/product/addproduct', payload)
      .then(response => {
        console.log(response.data);
      })
      .catch(error => {
        console.error(error);
      });
  };

  return (
    <div className='post '>
      <table style={{ borderCollapse: 'collapse', width: '100%' }}>
        <thead>
          <tr >
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
              <td >
                <input
                  type="text"
                  value={item.description}
                  onChange={(event) => handleDescriptionChange(event, index)}
                />
              </td>
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

export default Table;


