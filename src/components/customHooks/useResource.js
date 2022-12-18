import { useEffect, useState } from 'react';

export const useResource = (resourceUrl) => {
  const [resourceData, setResourceData] = useState(null);
  useEffect(() => {
    // (async function (resourceUrl) {
    //   await fetch(resourceUrl)
    //     .then((res) => console.log(res.json()))
    //     .catch((err) => console.log(err));
    // })();
  }, [resourceUrl]);
  return resourceData;
};
