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
  <div>
    <CharacterArticleVue
      v-for="data in state.results.slice(0, 4)"
      :data="data"
    />
  </div>
  <RouterLink :to="{ name: 'character' }"><button>SHOW ALL</button></RouterLink>
</template>

<style scoped>
div {
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  margin-bottom: 80px;
  padding: 0 30px;
}

a {
  margin: 0 auto;
}

button {
  padding: 10px;
}

button:hover {
  background-color: yellow;
}
</style>
