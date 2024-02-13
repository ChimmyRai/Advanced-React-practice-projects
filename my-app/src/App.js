import "./App.css";
import {UserProvider, useUser} from "./UserContext";

const LoggedInUser=()=>{
  const {user}=useUser();

   return (
      <p>Hello {user.name}</p>
      );
};

const Header=()=>{

    return (
        <header>
            <h2>Blog App</h2>
            <LoggedInUser/>
        </header>

    );

};

const Page= () => {

  const {user}=useUser();

  return (
     <div>
        <h2>What is lorem ipsum</h2>
        <p>blah blah blah blah sadf asdljf asdjf asl;dfj la;sdjf alsdfj asdf</p>
        <p>Written by:{user.name}</p>
     </div>
     
  );
};

function App(){
  return (
      <div className="App">
        <Header/>
        <Page/>
      </div>

  );
};

function Root (){

  return (

    <UserProvider>
        <App/>
    </UserProvider>
  );
};

export default Root;



