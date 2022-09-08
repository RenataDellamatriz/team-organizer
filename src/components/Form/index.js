import { useEffect, useState } from "react";
import { getAllChampions } from "../../services/riot-api";
import Button from "../Button";
import DropDownList from "../DropDownList";
import TextField from "../TextField";
import "./Form.css";

const Form = (props) => {
  const roles = ["Top", "Jungler", "Mid", "ADC", "Support"];

  const [name, setName] = useState("");
  const [role, setRole] = useState("");
  const [comp, setComp] = useState("");
  const [champion, setChampion] = useState("");

  
  const handleSaving = (event) => {
    event.preventDefault();
    props.handleSubmit({
      name, 
      role,
      comp,
      champion
    })
    
    
  };
  const [champions, setChampions] = useState([]);


  useEffect(() => {
    const getData = async () => {
      const data = await getAllChampions();
      setChampions(data);
    };
    getData();
  }, []);

  return (
    <section className="form">
      <form onSubmit={handleSaving}>
        <h2> Preencha o formulário</h2>
        <TextField
          label="Player"
          placeholder="Your name here"
          mandatory={true}
          inputValue={name}
          handleChange={(inputValue) => setName(inputValue)}
        />
        <DropDownList
          mandatory={true}
          label="Teams"
          placeholder="Organize your comp"
          itens={props.comps}
          inputValue={comp}
          handleChange={(inputValue) => setComp(inputValue)}
        />
        <DropDownList
          mandatory={true}
          label="Role"
          placeholder="Choose your role"
          itens={roles}
          inputValue={role}
          handleChange={(inputValue) => setRole(inputValue)}
        />
        <DropDownList
          mandatory={true}
          label="Champions"
          placeholder="Choose your champion"
          itens={champions}
          inputValue={champion}
          handleChange={(inputValue) => setChampion(inputValue)}
        />
        <Button>Submit</Button>
      </form>
    </section>
  );
};

export default Form;
