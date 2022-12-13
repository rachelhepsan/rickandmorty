<script setup>
import { computed } from '@vue/reactivity';

const props = defineProps({
    data: Object
})

const data = computed(() => props.data);

const characterRoute = { name: 'character-details', params: { characterId: data.value.id } }

</script>

<template>
    <article>
        <div>
            <img :src="data.image" alt="Scary Brandon">
        </div>
        <div class="details-character">
            <div>
                <RouterLink :to="characterRoute">
                    <h2>{{ data.name }}</h2>
                </RouterLink>
                <p class="status"> <span class="alive-status"></span> {{ data.status }} - {{ data.species }}</p>
            </div>
            <div>
                <p class="place-seen"><span class="grey-text">Last Seen:</span>Mr. Goldenfold's dream</p>
            </div>
            <div>
                <p><span class="grey-text">First Seen:</span>Lawnmower Dog</p>
            </div>
        </div>
    </article>
</template>

<style scoped>
article {
    display: flex;
    /* width: 48%; */
    width: calc((100% - 25px)/2);
    overflow: hidden;
    background: rgb(60, 62, 68);
    border-radius: 0.5rem;
    margin-bottom: 1.5rem;
    color: #fff;
}

a{
    text-decoration: none;
    color: #fff;
}

a:hover {
    color: yellow;
}

.details-character {
    display: flex;
    flex-direction: column;
    color: #fff;
    padding-left: 1rem;
}

h2 {
    font-size: 2rem;
}

.alive-status {
    height: 0.5rem;
    width: 0.5rem;
    margin: 0.375rem;
    background: rgb(85, 204, 68);
    border-radius: 50%;
}

.status {
    display: flex;
}

.grey-text {
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