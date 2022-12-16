<script setup>
import state from './characterDetailState';
import { onMounted } from 'vue';
import { getCharacterDetail } from './characterDetailServices';

onMounted(() => {
    getCharacterDetail();
}
)
</script>

<template>
    <div class="details-container">
        <img :src="state.image" alt="Scary Brandon">
        <div>
            <ul>
                <li>Full Name : {{ state.name }}</li>
                <li>Status : {{ state.status }}</li>
                <li>Species : {{ state.species }}</li>
                <li>Gender : {{ state.gender }}</li>
                <li>Origin : {{ state.origin.name }}</li>
                <li>Location : {{ state.location.name }}</li>
            </ul>
        </div>
    </div>
</template>

<style scoped>
@import "./character-details.css";
</style>