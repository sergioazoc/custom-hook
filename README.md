# Customs Hooks

## useCounter

Ejemplo de uso:
```
    const { counter, increment, decrement, reset } = useCounter(10);
```

useCounter() // recibe un valor por defecto


## useFetch

Ejemplo:
```
    const url = 'endpoint de una api';
    const { data: null, loading: true, error: null } = useFetch(url);

```


## useForm

Ejemplo:

```
    const initialForm = {
        name: '',
        age: 0,
        email: ''
    };
    
    const [ formValues, handleInputChange, reset ] = useForm( initialForm );

```