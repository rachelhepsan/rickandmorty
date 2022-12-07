<script setup>
import CharacterArticleVue from '@/components/CharacterArticle.vue';
</script>

<template>
    <div>
        <CharacterArticleVue />
        <CharacterArticleVue />
        <CharacterArticleVue />
        <CharacterArticleVue />
    </div>
    <div>
        <RouterLink to="/character"><button>SHOW ALL</button></RouterLink>
    </div>
</template>