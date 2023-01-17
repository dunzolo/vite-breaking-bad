<script>
import axios from 'axios';
import AppHeader from './components/AppHeader.vue';
import AppSelect from './components/AppSelect.vue';
import CardsList from './components/CardsList.vue';
import AppLoading from './components/AppLoading.vue';

import { store } from './store.js';

export default {
  components: {
    AppHeader,
    AppLoading,
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
      let newUrl = store.url;

      // let filtered_cards_list = store.cards_list.filter((elem) => {
      //   return elem.type.includes(type);
      // })

      if (type != '') {
        newUrl += `&type=${type}`;

        axios.get(newUrl).then((response) => {
          store.cards_list = response.data.data
        })
      }
      else {
        axios.get(store.url).then((response) => {
          store.cards_list = response.data.data
        })
      }
    }
  }
}
</script>

<template lang="">
  <div>
    <AppHeader></AppHeader>
    <div v-if="store.is_loading">
      <AppLoading></AppLoading>
    </div>
    <div v-else>
      <main>
        <AppSelect @search="searchCard"></AppSelect>
        <CardsList></CardsList>
      </main>
    </div>
  </div>
</template>

<style lang="scss">
@use './styles/generals.scss'
</style>
