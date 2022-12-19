<script setup>
import state from './characterDetailState';
import { onMounted } from 'vue';
import { getCharacterDetail } from './characterDetailServices';

// onMounted(() => {
//     getCharacterDetail();
// }
// )

console.log(state.results);
</script>

<template>
    <div class="details-container">
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