import { useState, useEffect } from "react";
import { SearchBox } from "./components/SearchBox/SearchBox";
import { ActorList } from "./components/ActorList/ActorList";
import { Header } from "./components/Header/Header";
import './App.css'

const App = () => {

  const [ searchterm, setSearchTerm ] = useState("");
  const [ actor, setActor ] = useState([]);
  const [ film, setFilm ] = useState([]);

  const handleInputText = (event) => {
    const inputText = event.target.value.toLowerCase();
    setSearchTerm(inputText);
  }

  const handleClick = (e) => {
    setFilm(console(e));
  }

  let filteredActors = actor.filter(act => {
    if (searchterm === "") {
      return act
    } else if (act.first_name.toLowerCase().includes(searchterm.toLowerCase()) || act.last_name.toLowerCase().includes(searchterm.toLowerCase())) {
      return act
    }
    
  })

  useEffect(() => {
    fetch('https://mymicroservice-1655722824933.azurewebsites.net/All_Actors')
    .then(res => res.json())
    .then(actors => setActor(actors))
  }, [searchterm])

  return (
    <>
      <Header />
      <SearchBox handleInputText={handleInputText} searchterm={searchterm} />
      <ActorList actors={filteredActors} handleClick={handleClick} film={film} />
    </>
  );
}

export default App;
