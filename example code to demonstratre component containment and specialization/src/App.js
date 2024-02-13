import "./App.css";


const Button=({children, backgroundColor})=>{
  return <button style={{backgroundColor}}>{children}</button>;
};

const Alert=({children})=> {
   return (
     <>
       <div className="Overlay">

         <div className="Alert">{children}</div>
       </div>

     </>
   );
};

const DeleteButton=()=> {
  return <Button backgroundColor='red'> Delete</Button>
      }

const GreenButton = () => {
  return <Button backgroundColor='green'>Cancel</Button>
}
function App(){

  return (

    <div className="App">
      <header> Little Lemon Restuarant</header>
      <Alert>
        <h4>Delete Account</h4>
        <h1>Do you really want to delete your account? You will miss the delicious food cooked by the Chefs of the little lemon</h1>
        <DeleteButton/>
        <GreenButton/>
      </Alert>
    </div>
  );
}

export default App;