import axios from 'axios';
import { useEffect, useState } from 'react';

export const useResource = (resourceUrl) => {
  const [resourceData, setResourceData] = useState(null);
  useEffect(() => {
    axios
      .get(resourceUrl)
      .then((response) => {
        setResourceData(response.data.data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, [resourceUrl]);
  return resourceData;
};
