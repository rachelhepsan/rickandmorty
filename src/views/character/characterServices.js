import axios from "axios";
import state from "./characterState.js";

export const getCharacters = async () => {

  try {
    state.loading = true;
    const response = await axios.get(
      `https://rickandmortyapi.com/api/character?page=${state.currentPage}&name=${state.searchKey}`
    );
  state.totalPages = response.data.info.pages;
  state.results = [...state.results, ...response.data.results];
  state.currentPage++;
  } catch (error) {
    if(error.response.status === 404) {
      state.results =[];
    }
  } finally {
    state.loading = false;
  }
};