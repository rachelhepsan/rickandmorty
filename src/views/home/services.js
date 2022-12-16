import axios from "axios";
import state from "./homeState.js";

export const getCharacters = async () => {
  const response = await axios.get(
    "https://rickandmortyapi.com/api/character/"
  );
  state.results = response.data.results;
};
