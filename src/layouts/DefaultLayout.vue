<script setup>
</script>

<template>
    <header>
        <h1>The Rick and Morty</h1>
    </header>
    <main>
        <slot> </slot>
    </main>
    <footer>
        CHARACTERS: 826 LOCATIONS: 126 EPISODES:51
    </footer>
</template>

<style scoped>
header {
    text-align: center;
    font-size: 3rem;
    background-color: #fff;
    padding: 2rem;
}

footer {
    text-align: center;
    margin-top: 50px;
    margin-bottom: 30px;
    color: #fff;
    bottom: 0;
    position: relative;
}
</style>