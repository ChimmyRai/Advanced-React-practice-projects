import "./App.css";
import {RadioGroup, RadioOption} from './Radio';
import {useState} from "react";



function App(){
  const [selected, setSelected]=useState('');
  return (
      <div className="App">
        <h1>How did you hear about the little lemon restuarant?</h1>
        <RadioGroup onChange={setSelected} selected={selected}> 
          <RadioOption value='socail_media'> Social Media</RadioOption>
          <RadioOption value='friends'> From Friends</RadioOption>
          <RadioOption value='advertisements'> Adertisement</RadioOption>
          <RadioOption value='other'> Other</RadioOption>
        </RadioGroup>
        <button disabled={!selected}>Submit</button>
      </div>

  );
};

export default App;


