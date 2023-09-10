import {useState} from 'react';
//Reglas de los hooks:
//No se llaman en loops, ni condiciones
//Siempre están en el nivel más alto del componente
//Sólo se llaman en 2 partes:
// -Componentes de react
// -Custom hooks


//Custom hook
const useCounter = (initialValue) => {
  const [counter, setCounter] = useState(initialValue);
  const increment = () => {
    setCounter(counter +1);
  }

  return [counter, increment];
}

const App = () => {
  const  [counter, increment] = useCounter(0);
  return(
    <div>
      Counter: {counter}
      <button
      onClick={increment}>Increment</button>
    </div>
  )
}

export default App;
