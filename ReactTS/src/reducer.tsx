import { useReducer } from "react";

interface State {
    count: number
}

type CounterAction = 
    | { type: "reset" }
    | { type: "addCount"; value: State["count"]}

const initialState: State = { count: 0 };

function stateReducer(state: State, action: CounterAction) {
    switch (action.type) {
        case "reset":
            return initialState;
        case "addCount":
            return {...state, count: action.value}
        default:
            throw new Error("Unknown Action")
    }
}

export function Reducer() {
    const [state, dispatch] = useReducer(stateReducer, initialState)

    const addFive = () => dispatch({type: "addCount", value: state.count + 5})
    const reset = () => dispatch({type: "reset"})

    return (
        <div>
            <h2>Welcome to my Counter</h2>
            <p>Count: {state.count}</p>
            <button onClick={addFive}>add 5</button>
            <button onClick={reset}>reset</button>
        </div>
    )
}

export default Reducer;