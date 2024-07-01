import { useEffect, useState } from 'react';

export const useData = (url) => {
    const [data, setData] = useState([]);
    const [error, setError] = useState();
    const [loading, setLoading] = useState(true);
  
    useEffect(() => {
      const dataFetch = async () => {
          try {
            const response = await (await fetch(url)).json();
            setTimeout(() => {
                setData(response);
                setLoading(false)
            }, 2000);
        } catch (error) {
            setError(error.toString());
            setLoading(false)
        }
      };
  
      dataFetch();
    }, [url]);
    
  
    return { data, error, loading };
  };