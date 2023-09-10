import {useState, useEffect} from 'react';

const useCounter = (initialValue) => {
  const [counter, setCounter] = useState(initialValue);
  const increment = () => {
    setCounter(counter +1);
  }

  return [counter, increment];
}

const Interval = ({counter}) => {
  useEffect(()=>{
    const i = setInterval(()=>console.log(counter),1000);
    return () => clearInterval(i);
  },[counter]);
  return (
    <p>Interval</p>
  )
}

const App = () => {
  const  [counter, increment] = useCounter(0);
  useEffect(()=>{
    document.title = counter;
  },[counter]);
  return(
    <div>
      Counter: {counter}
      <button
      onClick={increment}>Increment</button>
      <Interval counter={counter} />
    </div>
  )
}

export default App;
