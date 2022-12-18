import { useEffect, useState } from 'react';

export const useResource = (resourceUrl) => {
  const [resourceData, setResourceData] = useState(null);
  useEffect(() => {
     const fetchPromise = fetch(resourceUrl);
     fetchPromise
       .then((response) => {
         return response.json();
       })
       .then((res) => {
         setResourceData(res.data);
         console.log(res.data);
       });
  }, [resourceUrl]);
  return resourceData;
};
