<script>
export default {
    props: {
        card: Object
    }
}
</script>

<template lang="">
    <div class="card text-center">
        <img :src="card.card_images[0].image_url" alt="card-image" @click="cardImageFullScreen">
        <span class="text-light name-card">{{ card.name }}</span>
        <span class="archetype">{{ card.type }}</span>
    </div>
</template>

<style lang="scss" scoped>
@use '../styles/partials/variables' as *;

.card {
    width: calc(100% / 5 - 20px);
    background-color: $orange-color;
    border: none;
    margin-bottom: 1rem;

    .name-card {
        padding: 1rem 0.5rem;
        text-transform: uppercase;
        font-size: 18px;
        font-weight: 700;
    }

    .archetype {
        font-size: 15px;
    }
}
</style>