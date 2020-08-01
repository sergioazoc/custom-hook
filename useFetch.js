import { useEffect, useState, useRef } from 'react';

export const useFetch = (url) => {
  const [state, setState] = useState({data: null, loading: true, error: null});

  const isMounted = useRef(true);
  useEffect(() => {
    
    return () => {
      isMounted.current = false;
    }
  }, [])

  useEffect(() => {

    setState({data: null, loading: true, error: null});

    fetch(url)
      .then(resp => resp.json())
      .then(data => {

        if(isMounted.current){ // isMounted previene que se cargue el setState si no está montado el componente
          setState({
            loading: false,
            error: null,
            data
          });
        }

      })
      .catch( () => {
        setState({
          data: null,
          loading: false,
          error: 'No se pudo cargar la info'
        });
      });

  }, [url]);

  return state;
}