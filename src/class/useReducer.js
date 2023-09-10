import { useReducer, useState } from 'react';
//const state = {counter: 0}
//action = {type: string, payload: any}
const initial = {counter: 0};

const reducer = (state, action) => {
    switch (action.type) {
        case 'increment':
            return { counter: state.counter + 1 }
        case 'decrement':
            return { counter: state.counter - 1 }
        case 'set':
            return { counter: action.payload }

    }
}

const App = () => {
    const [state,dispatch] = useReducer(reducer,initial);
    const [value,setValue] = useState(0);

    return (
        <div>
            Counter: {state.counter}
            <input value={value} onChange={el => setValue(el.target.value)} />
            <button onClick={()=>dispatch({type: 'increment'})}>Plus</button>
            <button onClick={()=>dispatch({type: 'decrement'})}>Minus</button>
            <button onClick={()=>dispatch({type: 'set',payload: Number(value)})}>Reset</button>
        </div>
    )
}

export default App;
