import { useState,useEffect } from "react";

const useFetch = (url) =>

{

const [Loading, SetLoading] = useState(true)
const [Data, setData] = useState([]);
const [error, SetError] = useState(null)

    useEffect(() => 
  {
    setTimeout(() => 
    {  
      fetch(url)
      
        .then (response => 
          {
            if(!response.ok)
            {
              throw Error("Could not get the data")
            }
          return response.json()
          }
          )
          
        .then((data) => 
        {
          setData(data);
          SetLoading(false);
          //console.log(SetError)
          SetError(null)
        })
        
        .catch((err)=>
        {
          SetError(err.message)
        })
        
    }, 1000);
  }, [url]);

  return {Data,Loading,error}

}



export default useFetch;