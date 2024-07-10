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
    };
  },
  created() {
    axios
      .post(data.urlRichiesta)
      .then((risposta) => {
        this.data.dataGame = risposta.data.data;

        setInterval(() => {
          this.data.isLoad = true;
        }, 1000);

        console.log("sono i miei dati", data.dataGame);
      })

      .catch((errore) => console.log(errore));
  },
};
</script>

<template>
  <header>
    <AppHeader />
  </header>

  <main>
    <AppSearch />
    <CharactersList />
  </main>
</template>

<style>
</style>
