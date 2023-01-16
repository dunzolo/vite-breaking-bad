<script>
import axios from 'axios';
import AppHeader from './components/AppHeader.vue';
import AppSelect from './components/AppSelect.vue';
import CardsList from './components/CardsList.vue';

import { store } from './store.js';

export default {
  components: {
    AppHeader,
    AppSelect,
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
        store.cards_list = response.data.data;
        console.log(store.cards_list);

        setTimeout(() => {
          store.is_loading = false;
        }, 2000)
      })
    },
    searchCard(type) {
      console.log(type);

      // let filtered_cards_list = store.cards_list.filter((elem) => {
      //   return elem.type.includes(type);
      // })

      store.url += `&type=${type}`;
      // console.log(store.url);

      axios.get(store.url).then((response) => {
        store.cards_list = response.data.data
      })

      // console.log(filtered_cards_list);
    }
  }
}
</script>

<template lang="">
  <div>
    <AppHeader></AppHeader>
    <main>
      <AppSelect @search="searchCard"></AppSelect>
      <CardsList></CardsList>
    </main>
  </div>
</template>

<style lang="scss">
@use './styles/generals.scss'
</style>
