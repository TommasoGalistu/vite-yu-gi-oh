import { reactive } from 'vue'

export const data = reactive({
    dataGame: [],
    urlRichiesta: 'https://db.ygoprodeck.com/api/v7/cardinfo.php?num=52&offset=0',
    isLoad: false,
    // valore della section option che sceglie l'utente
    valoreSection: "",

})

