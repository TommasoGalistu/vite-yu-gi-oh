<script>
import AppHeader from "./components/AppHeader.vue";
import AppSearch from "./components/AppSearch.vue";
import CharactersList from "./components/CharactersList.vue";
import axios from "axios";
import { data } from "../src/data/data";

export default {
  name: "App",
  components: {
    AppHeader,
    AppSearch,
    CharactersList,
  },
  data() {
    return {
      data,
      urlFiltrato: "",
    };
  },
  computed: {},
  methods: {
    valoreScelto(valore) {
      console.log("valore:", valore);
      this.data.valoreSection = valore;
    },
  },
  created() {
    this.urlFiltrato = data.urlRichiesta;
    if (data.valoreSection) {
      this.urlFiltrato += `&archetype=${data.valoreSection}`;
    }
    axios
      .post(this.urlFiltrato)
      .then((risposta) => {
        data.dataGame = risposta.data.data;

        setInterval(() => {
          this.data.isLoad = true;
        }, 1000);
        console.log(this.urlFiltrato);
        console.log("sono i miei dati", data.dataGame);
      })

      .catch((errore) => console.log(errore.message));
  },
};
</script>

<template>
  <header>
    <AppHeader />
  </header>

  <main>
    <AppSearch @valore-scelto="valoreScelto" />
    <!-- <AppSearch /> -->
    <CharactersList :datiFiltrati="data.dataGame" />
  </main>
</template>

<style>
</style>
