import axios from "axios";
import state from "./characterDetailState.js";

export const getCharacterDetail = async () => {
  const response = await axios.get(
    `https://rickandmortyapi.com/api/character/${state.results.id}`
  );
  state.results = response.data;
  console.log(state.results);
};