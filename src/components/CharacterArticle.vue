<script setup>

</script>

<template>
    <article>
        <div>
            <img src="https://rickandmortyapi.com/api/character/avatar/304.jpeg" alt="Scary Brandon">
        </div>
        <div class="details-character">
            <div>
                <h2>Scary Brandon</h2>
                <p class="status"> <span class="alive-status"></span> Alive - Mythological Creature</p>
            </div>
            <div>
                <p class="place=seen"><span class="grey-text">Last Seen:</span>Mr. Goldenfold's dream</p>
            </div>
            <div>
                <p><span class="grey-text">First Seen:</span>Lawnmower Dog</p>
            </div>
        </div>
    </article>
</template>

<style scoped>
article{
    display: flex;
    width: 600px;
    height: 220px;
    overflow: hidden;
    background: rgb(60, 62, 68);
    border-radius: 0.5rem;
    margin: 0.75rem;
    color: #fff;
}

.details-character{
    display: flex;
    flex-direction: column;
    color: #fff;
    padding-left: 1rem;
}

h2{
    font-size: 2rem;
}

.alive-status{
    height: 0.5rem;
    width: 0.5rem;
    margin: 0.375rem;
    background: rgb(85, 204, 68);
    border-radius: 50%;
}

.status {
    display: flex;
}

.grey-text{
    color: rgb(158, 158, 158);
}

p {
    font-size: 16px;
}

.place-seen {
    font-size: 18px;
    color: #fff;
}
</style>