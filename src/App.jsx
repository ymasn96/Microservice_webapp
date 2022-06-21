import { useState, useEffect } from "react";
import { SearchBox } from "./components/SearchBox/SearchBox";
import { ActorList } from "./components/ActorList/ActorList";
import { Header } from "./components/Header/Header";
import './App.css'

const App = () => {

  const [ searchTerm, setSearchTerm ] = useState("");

  const [ actor, setActor ] = useState([]);

  const handleInputText = (event) => {
    const inputText = event.target.value.toLowerCase();
    setSearchTerm(inputText);
  }

  useEffect(() => {
    fetch('https://mymicroservice-1655722824933.azurewebsites.net/All_Actors')
    .then(res => res.json())
    .then(act => setActor(act))
  }, [searchTerm])

  return (
    <>
      <Header />
      <SearchBox handleInputText={handleInputText} searchTerm={searchTerm} />
      <ActorList actor={actor} />
    </>
  );
}

export default App;
