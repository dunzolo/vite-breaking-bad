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
    computed: {
        numberResults() {
            return store.cards_list.length
        }
    }

}
</script>

<template lang="">
    <div class="container pt-2">
        <div class="founded-cards mb-2">
            <h4>Sono state trovate {{ numberResults }} carte</h4>
        </div>
        <div class="d-flex justify-content-between flex-wrap">
            <Card v-for="(item, index) in store.cards_list" :key="index" :card="item"/>
        </div>
    </div>
</template>

<style lang="scss" scoped>
@use '../styles/partials/variables' as *;

.container {
    background-color: $white-color;

    .founded-cards {
        color: $white-color;
        background-color: $black-color;
        padding: 0.5rem;

        h4 {
            //bootstrap imposta del margin di default
            margin-bottom: 0;
        }
    }
}
</style>