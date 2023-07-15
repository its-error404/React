import { useState,useEffect } from "react";

const useFetch = (url) =>
{
    const [Loading, SetLoading] = useState(true)
    const [Data, setData] = useState([]);
    const [error, SetError] = useState(null)

      useEffect(() => 
        {
          const AbortControllerMethod = new AbortController();
          setTimeout(() => 
            {  
                //fetch(url)
                fetch(url, {signal: AbortControllerMethod.signal})
                
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
                        SetError(null)
                     }
                      )
          
                .catch((err) =>
                    {
                        if (err.name === 'AbortError')
                            {
                                console.log("Abortttt")
                            }
                        else
                            {
                                SetLoading(false)
                                SetError(err.message)
                            }
                    }
                      )
          
            }, 1000);

            return ()=> AbortControllerMethod.abort();
          }, [url]);

  return {Data,Loading,error,setData}
}

export default useFetch;