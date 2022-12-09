<script setup>
import CharacterArticleVue from '@/components/CharacterArticle.vue';
import data from '@/data.json';
import { onMounted } from 'vue';
import state from './homeState.js';

onMounted(() => {
    state.results = data.results;
}
)
</script>

<template>
    <div>
        <CharacterArticleVue v-for="data in state.results.slice(0,4)" :data="data" />
    </div>
    <RouterLink :to="{ name: 'character' }"><button>SHOW ALL</button></RouterLink>
</template>

<style scoped>
div{
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    margin-bottom: 80px;
}

a{
    margin: 0 auto;
}

button{
    padding: 10px;
}

button:hover {
    background-color: yellow;
}
</style>