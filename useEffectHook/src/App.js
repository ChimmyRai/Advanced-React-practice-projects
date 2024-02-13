import React from "react";
import './App.css';

function App(){
  const [toggle, setToggle]=React.useState(false);

  const clickHandler=()=>{
    setToggle(!toggle);

  }

  React.useEffect(()=>{
      document.title= toggle? "Welcome to little lemon": "using the use effect hook";
  }, [toggle]
  );

  return (
    <div>
      <h1> Using the use effect hook</h1>
      <button onClick={clickHandler}>Toggle Message</button>
      {toggle && <h2> Welcome to Little Lemon</h2>}
    </div>

  );

}

export default App;
