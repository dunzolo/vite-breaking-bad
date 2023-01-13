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
    <div>
        <Card v-for="(item, index) in store.cards_list" :key="index" :card="item"/>
    </div>
</template>

<style lang="">
    
</style>