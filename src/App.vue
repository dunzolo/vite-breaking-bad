<script>
import axios from 'axios';
import AppHeader from './components/AppHeader.vue';
import CardsList from './components/CardsList.vue';

import { store } from './store.js';

export default {
  components: {
    AppHeader,
    CardsList
  },
  data() {
    return {
      store
    }
  },
  created() {
    this.getCards();
  },
  methods: {
    getCards() {
      axios.get(store.url).then((response) => {
        store.cards_list = response.data;
        console.log(store.cards_list);
      })
    }
  },
}
</script>

<template lang="">
  <div>
    <AppHeader></AppHeader>
    <main>
      <CardsList></CardsList>
    </main>
  </div>
</template>

<style lang="scss">
@use './styles/generals.scss'
</style>
