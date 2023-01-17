import { reactive } from 'vue';

export const store = reactive({
    url: "https://db.ygoprodeck.com/api/v7/cardinfo.php?archetype=Alien",
    // url: "https://db.ygoprodeck.com/api/v7/cardinfo.php?banlist=tcg&level=4&sort=name",
    cards_list: [],
    is_loading: true
})