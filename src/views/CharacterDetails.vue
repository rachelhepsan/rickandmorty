<script setup>
</script>

<template>
    <header>
        <h1>Scary Brandon</h1>
    </header>
    <main class="details-container">
        <img src="https://rickandmortyapi.com/api/character/avatar/304.jpeg" alt="Scary Brandon">
        <div>
            <ul>
                <li>Full Name   :   Scary Brandon</li>
                <li>Status      :   Alive</li>
                <li>Species     :   Mythological Creature</li>
                <li>Type        :   Monster</li>
                <li>Gender      :   Male</li>
                <li>Origin      :   Lawnmower Dog</li>
                <li>Location    :   Mr. Goldenfold's Dream</li>
                <li>Episode     :   Episode 2</li>
            </ul>
        </div>
    </main>
</template>

<style scoped>
header{
    background: #fff;
    color: #000;
    text-align: center;
    padding: 50px;
}

h1{
    font-size: 70px;
}

.details-container {
    display: flex;
    justify-content: space-evenly;
}

img{
    border-radius: 10px;
    height: 300px;
}

main{
    margin-top: 60px;
    color: #fff;
}

ul{
    margin-top: 15px;
    list-style: none;
}

li{
    font-size: 30px;
    line-height: 35px;
}
</style>