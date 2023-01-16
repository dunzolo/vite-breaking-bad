<script>
import { store } from '../store.js'

export default {
    data() {
        return {
            store
        }
    },
    methods: {
        sendValue() {
            // console.log(store.selected)
            this.$emit('search', store.selected);
        }
    }
}
</script>

<template lang="">
    <div class="container">
        <div class="row m-3">
            <div class="col-12">
                <select name="" id="" @change="sendValue" v-model="store.selected">
                    <!-- <option v-for="(item, index) in store.cards_list" :key="index" :value="item.type">{{ item.type }}</option> -->
                    <option value="Tuner Monster">Tuner Monster</option>
                    <option value="Spell Card">Spell Card</option>
                </select>
            </div>
        </div>
    </div>
</template>

<style lang="scss">

</style>