import Postapi from "./Postapi.jsx"
import Getapi from "./Getapi.jsx"
import Putapi from "./Putapi.jsx"
import Deletproduct from "./Deletproduct.jsx"
import Putimgurl from "./Putimgurl.jsx"
import Productbyid from "./Productbyid.jsx"



function Components() {
  return (
    <div>

      <Postapi/>
      <hr />
      <Getapi/>
      <hr />
      <Putapi/>
      <hr />
      <Deletproduct/>
      <hr />
      <Putimgurl/>
      <hr />
      <Productbyid/>
      <hr />
  
    </div>
  
  );
}

export default Components;