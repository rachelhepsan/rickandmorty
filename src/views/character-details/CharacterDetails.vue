<script setup>
import state from './characterDetailState';
import { onMounted } from 'vue';
import { getCharacterDetail } from './characterDetailServices';
import { useRoute } from 'vue-router';

const route = useRoute();

onMounted(() => {
    console.log(route.params);
    getCharacterDetail(route.params.characterId);
}
)

console.log(state.results);
</script>

<template>
    <div class="loading" v-if="state.loading">LOADING...</div>
    <div class="details-container" v-else-if="state.results">
        <img :src="state.results.image" alt="Scary Brandon">
        <div>
            <ul>
                <li>Full Name : {{ state.results.name }}</li>
                <li>Status : {{ state.results.status }}</li>
                <li>Species : {{ state.results.species }}</li>
                <li>Gender : {{ state.results.gender }}</li>
                <li>Origin : {{ state.results.origin.name }}</li>
                <li>Location : {{ state.results.location.name }}</li>
            </ul>
        </div>
    </div>
</template>

<style scoped>
@import "./character-details.css";
</style>