import axios from "axios";
import state from "./characterState.js";

export const getCharacters = async () => {
  const response = await axios.get(
    `https://rickandmortyapi.com/api/character?page=${state.currentPage}&name=${state.searchKey}`
  );
  state.totalPages = response.data.info.pages;
  state.results = [...state.results, ...response.data.results];
  state.currentPage++;
};