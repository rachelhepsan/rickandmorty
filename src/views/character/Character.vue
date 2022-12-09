<script setup>
import CharacterArticleVue from '@/components/CharacterArticle.vue';
import data from '@/data.json';
import { onMounted } from 'vue';
import state from './characterState';

onMounted(() => {
    state.results = data.results;
}
)
</script>

<template>
    <div>
        <CharacterArticleVue v-for="data in state.results" :data="data" />
    </div>
</template>

<style scoped>
div{
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    margin-bottom: 80px;
}
</style>