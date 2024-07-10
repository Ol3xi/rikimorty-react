import { useEffect, useState } from "react";
import { Loading } from "./components/Loading/Loading";

const url = "https://rickandmortyapi.com/api/character";

export const App = () => {
  const [loading, setIsLoading] = useState(true);
  const [tours, setCharacters] = useState([]);
  const fetchCharacters = async () => {
    setIsLoading(true);
    try {
      const response = await fetch(url);
      const characters = response.json();
      console.log(characters);
    } catch (error) {
      console.log(error);
    }
    setIsLoading(false);
  };

  useEffect(() => {
    fetchCharacters();
  }, []);

  if (setIsLoading) {
    return (
      <span>
        <Loading />
      </span>
    );
  }

  return <div>App</div>;
};
