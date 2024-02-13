import './App.css';
import { useState, useEffect } from 'react';

const DataFetcher=({render,url})=>{
   const [data,setData]=useState([]);

   useEffect(()=>{
    if(url.includes('desserts')){
      setData(['cake', 'ice cream', 'pie', 'brownie','ema datsi'])
    } else{
      setData(['water','soda', "juice"])
    }
   },[]);

   return render(data);

};

const DrinksCount=()=>{
  return (<DataFetcher url='https://littlelemon/desserts'  render={(data)=><p>{data.length} desserts</p>}/>
  )
}

const DessertsCount=()=>{
  return (<DataFetcher url='https://littlelemon/drinks'  render={(data)=><h1>{data.length} drinks</h1>}/>
  )
}



function App() {
  return (
    <div className="App">
      <header className='Header'>Little Lemon Restuarant </header>
      <DessertsCount/>
      <DrinksCount/>
    </div>

  );
  
}

export default App;