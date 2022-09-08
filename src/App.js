import { useState } from "react";
import Banner from "./components/Banner";
import Form from "./components/Form";
import Comp from "./components/Comp";
import "./index.css";

function App(props) {
  const comps = [
    {
      name: "Comp 1",
     
    },
    {
      name: "Comp 2",
      
    },
    {
      name: "Comp 3",
      
    },
  ];
  
  const [players, setPlayers] = useState([]);

  //player pega todas as informações do form
  const handleNewSubmit = (player) => {
    console.log(player)
    setPlayers([...players, player])
   
  };


  return (
    <div className="App">
      <Banner />
      <Form
        champions={props.champions}
        handleSubmit={(player) => handleNewSubmit(player)}  
        comps={comps.map(comp => comp.name)}      
      />
        {comps.map(comp => <Comp 
        key={comp.name} 
        name={comp.name} 
        primaryColor={comp.primaryColor} 
        secondaryColor={comp.secondaryColor}
        players={players.filter(player => player.comp == comp.name)}
        />)}        
      
    </div>
  );
}

export default App;
