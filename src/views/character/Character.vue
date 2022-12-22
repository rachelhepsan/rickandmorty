<script setup>
import CharacterArticleVue from '@/components/CharacterArticle.vue';
import { onMounted, watch } from 'vue';
import state from './characterState';
import { getCharacters } from './characterServices';

watch(() => state.searchKey, () => {
    state.currentPage = 1;
    state.results = [];
    getCharacters();
})

onMounted(() => {
    getCharacters();
}
)
</script>

<template>
    <input type="search" placeholder="Search" v-model="state.searchKey">
    <div class="msg-container" v-if="state.searchKey.length && !state.results.length">NO RESULTS FOUND</div>
    <template v-else>
        <div class="character-container">
            <CharacterArticleVue v-for="data in state.results" :data="data" />
        </div>
        <div class="button-container" v-if="state.totalPages >= state.currentPage">
            <button @click="getCharacters" :disabled="state.loading">LOAD
            MORE</button>
        </div>
        <div class="msg-container" v-else>NO MORE CHARACTERS</div>
    </template>
</template>

<style scoped>
input {
    margin: 25px;
    padding: 8px;
    border-radius: 10px;
}

.button-container {
    display: flex;
    justify-content: center;
}

button{
    padding: 10px;
}

.character-container {
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
    margin-bottom: 80px;
    padding: 0 30px;
}

.msg-container {
    color: #000;
    background-color: #fff;
    width: 20vw;
    text-align: center;
    padding: 15px;
    margin: 0 auto;
}
</style>