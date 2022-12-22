<script setup>
import CharacterArticleVue from "@/components/CharacterArticle.vue";
import { onMounted } from "vue";
import state from "./homeState.js";
import { getCharacters } from "./services";

onMounted(() => {
  getCharacters();
});
</script>

<template>
  <div class="character-container">
    <CharacterArticleVue
      v-for="data in state.results.slice(0, 4)"
      :data="data"
    />
  </div>
  <div class="button-container">
    <RouterLink :to="{ name: 'character' }"><button>SHOW ALL</button></RouterLink>
  </div>
</template>

<style scoped>
.character-container {
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  margin-top: 50px;
  margin-bottom: 50px;
  padding: 0 30px;
}

a {
  margin: 0 auto;
}

.button-container{
  display: flex;
  justify-content: center;
}

button {
  padding: 10px;
}

button:hover {
  background-color: yellow;
}
</style>
