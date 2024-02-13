import React from "react";
import './App.css';


const Button=({type, children,...buttonProps})=>{
  const className= type==='primary'? 'PrimaryButton':'SecondaryButton'
  return (<button className={`Button ${className}`} {...buttonProps}> 
            {children}
          </button>);
}

const LoginButton= ({type, children,...buttonProps})=> {
  return (
    <Button type="secondary" onClick={()=>{alert('Logging in')}}  {...buttonProps} >
       {children}
    </Button>  
    );
}
function App(){
  

  
  return (
    <div className='App'>
      <header className='Header'>Little Lemon Restuarant</header>
      <Button type='primary' onClick={()=>alert('signing up!')}>Signup </Button>
      <LoginButton type='secondary' onClick={()=> alert('Signing Up!')}>Login</LoginButton>
      
    </div>

  );

}

export default App;
