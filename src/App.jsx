import { useState } from "react";
import { SearchBox } from "./components/SearchBox/SearchBox";
import { Actor } from "./components/Actor/Actor";
import { Header } from "./components/Header/Header";
import './App.css'

const App = () => {

  const [ searchTerm, setSearchTerm ] = useState("");
  const [ actor, setActor ] = useState([]);

  const handleInputText = (event) => {
    const inputText = event.target.value.toLowerCase();
    setSearchTerm(inputText);
  }

  return (
    <>
      <Header />
      <SearchBox handleInputText={handleInputText} searchTerm={searchTerm} />
      <Actor />
    </>
  );
}

export default App;
