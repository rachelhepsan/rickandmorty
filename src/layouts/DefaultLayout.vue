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

input {
    padding: 10px;
    border-radius: 10px;
    margin-top: 25px;
    margin-left: 20px;
}

main {
    display: flex;
    flex-wrap: wrap;
    margin-top: 80px;
    margin-bottom: 50px;
}

div {
    display: flex;
    justify-content: center;
}

button {
    padding: 10px;
    border-radius: 10px;
    background-color: #fff;
}

footer {
    text-align: center;
    margin-top: 50px;
    margin-bottom: 30px;
    color: #fff;
}
</style>