import {useReducer} from "react";
import './App.css';

const reducer=(state, action)=> {

  switch (action.type){
    case 'increment':
      return {count: state.count+1}
    case 'decrement':
      return {count: state.count-1}
    default:
      return state
    
  }
}

function App(){
  
  const [state, dispatch]= useReducer(reducer, {count:0});

  function increment(){
    dispatch({type:'increment'})
  }

  function decrement(){
    dispatch({type:'decrement'})
  }

  return (
    <div className="App">
      <h1> Wallet: {state.money} </h1>
      <div> 
        <button onClick={decrement}> -</button>
        <button > {state.count}</button>
        <button onClick={increment}> +</button>
      </div>
    </div>

  );

}

export default App;
