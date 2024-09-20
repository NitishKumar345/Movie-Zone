import React, { useEffect, useState } from 'react'



function fecthApi() {
    // // const [apiData, setApiData] = useState([]);
      useEffect(() => {
         const fetchData = async()=>{
           const api= await fetch("https://jsonplaceholder.typicode.com/users");
            const result = await api.json();
            // setApiData(data);
            console.log("my data= ",result);
         };
         fecthApi();
      }, []);
      
  return (
    <div>fecthApi</div>
  )
}

export default fecthApi;