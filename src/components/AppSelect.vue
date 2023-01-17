<script>
import { store } from '../store.js'

export default {
    data() {
        return {
            store,
            selected: ''
        }
    },
    computed: {
        uniqueValue() {
            const unique = [...new Set(store.cards_list.map((item) => item.type))];
            return unique;
        }
    },
    methods: {
        sendValue() {
            this.$emit('search', this.selected);
        }
    }
}
</script>

<template lang="">
    <div class="container pt-3 pb-3">
        <div class="row">
            <div class="col-12">
                <select class="form-select" name="select-card" id="select-card" @change="sendValue" v-model="selected">
                    <option value="">Seleziona una categoria</option>
                    <option v-for="(item, index) in uniqueValue" :key="index" :value="item">{{ item }}</option>
                </select>
            </div>
        </div>
    </div>
</template>

<style lang="scss" scoped>
.form-select {
    width: 30%;
}
</style>