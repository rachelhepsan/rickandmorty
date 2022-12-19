import axios from "axios";
import state from "./characterDetailState.js";

export const getCharacterDetail = async () => {
  const response = await axios.get(
    `https://rickandmortyapi.com/api/character/${state.characterId}`
  );
  state.results = response.data;
  state.characterId = response.data.id;
};

getCharacterDetail();