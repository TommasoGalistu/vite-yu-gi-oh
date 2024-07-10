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
      this.fetchData();
    },
    fetchData() {
      let urlFiltrato = this.data.urlRichiesta;
      if (this.data.valoreSection) {
        urlFiltrato += `&archetype=${this.data.valoreSection}`;
      }
      axios
        .post(urlFiltrato)
        .then((risposta) => {
          this.data.dataGame = risposta.data.data;
          this.data.isLoad = true;
          console.log(urlFiltrato);
          console.log("sono i miei dati", this.data.dataGame);
        })
        .catch((errore) => console.log(errore.message));
    },
  },
  created() {
    this.fetchData();
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
