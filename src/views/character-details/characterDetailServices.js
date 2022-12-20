import axios from "axios";
import state from "./characterDetailState.js";

export const getCharacterDetail = async (characterId) => {
  state.loading = true;
  const response = await axios.get(
    `https://rickandmortyapi.com/api/character/${characterId}`
  );
  state.loading = false;
  state.results = response.data;
};

