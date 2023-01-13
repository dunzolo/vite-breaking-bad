import { reactive } from 'vue';

export const store = reactive({
    url: "https://db.ygoprodeck.com/api/v7/cardinfo.php?level=4&attribute=water&sort=atk",
    // url: "https://rickandmortyapi.com/api/character",
    cards_list: []
})