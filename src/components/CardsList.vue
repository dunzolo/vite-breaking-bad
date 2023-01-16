<script>
import Card from './Card.vue';

import { store } from '../store.js'

export default {
    components: {
        Card
    },
    data() {
        return {
            store
        }
    },

}
</script>

<template lang="">
    <div v-if="store.is_loading" class="is-loading text-center">
        <h1>CARICANDO LO STORE</h1>
    </div>
    <div v-else class="container">
        <div class="founded-cards">
            <h4>Sono state trovate {{ store.cards_list.length }} carte</h4>
        </div>
        <div class="d-flex justify-content-between flex-wrap">
            <Card v-for="(item, index) in store.cards_list" :key="index" :card="item"/>
        </div>
    </div>
</template>

<style lang="scss" scoped>
@use '../styles/partials/variables' as *;

.is-loading {
    height: calc(100vh - 80px);
    width: 100%;
}

.container {
    background-color: $white-color;
    padding: 2rem;

    .founded-cards {
        color: $white-color;
        background-color: $black-color;
        padding: 1rem;
        margin-bottom: 0.5rem;
    }

}
</style>