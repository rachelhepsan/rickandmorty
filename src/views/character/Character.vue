<script setup>
import CharacterArticleVue from '@/components/CharacterArticle.vue';
import { onMounted, watch } from 'vue';
import state from './characterState';
import { getCharacters } from './characterServices';

watch(() => state.searchKey, (newValue, oldValue) => {
    console.log(oldValue);
    console.log(newValue);
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
    <div>
        <CharacterArticleVue v-for="data in state.results" :data="data" />
    </div>
    <button @click="getCharacters" v-if="state.totalPages >= state.currentPage">LOAD MORE</button>
    <div class="msg-container" v-else>NO MORE CHARACTERS</div>
</template>

<style scoped>
input {
    margin-left: 25px;
    margin-bottom: 30px;
    padding: 8px;
    border-radius: 10px;
}

button {
    margin: 0 auto;
    padding: 10px;
}

div {
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
    margin-bottom: 80px;
    padding: 0 30px;
}

.msg-container{
    color: #000;
    background-color: #fff;
    padding: 15px;
    margin: 0 auto;
}
</style>