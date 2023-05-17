import React, { useState } from 'react';

const Table = () => {


  // Initialize the table data state
  const [data, setData] = useState([
    { key: 'Product', value: '', description: '' },
    { key: 'Details', value: '', description: '' },
    { key: 'Price', value: '', description: '' },
    { key: 'File', value: '', description: '' },
    { key: 'File', value: '', description: '' }

  ]);


  // Handle value changes in the table cells
  const handleValueChange = (event, index) => {
    const updatedData = [...data];
    updatedData[index].value = event.target.value;
    setData(updatedData);
  };


  // Handle description changes in the table cells
  const handleDescriptionChange = (event, index) => {
    const updatedData = [...data];
    updatedData[index].description = event.target.value;
    setData(updatedData);
  };

  // Handle form submission
  const handleSubmit = () => {

    // Prepare the payload object from table data
    const payload = data.reduce((result, item) => {
      result[item.key.toLowerCase()] = item.value;
      result[`${item.key.toLowerCase()}_description`] = item.description;
      return result;
    }, {});

    console.log('Table data:', payload);



    // Send a POST request to the API endpoint
    fetch('http://apitextile.eyeterp.com/product/addproduct', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(payload)
    })
      .then(response => response.json())
      .then(data => {
        // Handle the response from the API
        console.log(data);
      })
      .catch(error => {
        // Handle any errors that occurred during the request
        console.error(error);
      });
  };

  return (
    <div className='post '>
      <table  style={{ borderCollapse: 'collapse', width: '100%' }}>
        <thead>
          <tr>
            <th >Key</th>
            <th >Value</th>
            <th >Description</th>
          </tr>
        </thead>
        <tbody>
          {data.map((item, index) => (
            <tr key={index}>
              <td className='clr-red' >{item.key}</td>
              <td >
                <input
                  type="text"
                  value={item.value}
                  onChange={(event) => handleValueChange(event, index)}
                />
              </td>
              <td style={{ border: '1px solid black', padding: '8px' }}>
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
      <button className='post-btn' onClick={handleSubmit}>Submit</button>
    </div>
  );
};

export default Table;

