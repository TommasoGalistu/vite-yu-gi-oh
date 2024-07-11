<script>
import { data } from "../data/data";
import axios from "axios";
export default {
  name: "AppSearch",
  data() {
    return {
      data,
      dataSearch: [],
      archetypes: [],
      urlSalvato: "",
      datiPreseti: false,
    };
  },

  methods: {
    cercaValore(event) {
      const valore = event.target.value;
      this.$emit("valore-scelto", valore);
    },

    richiestaDati() {
      this.urlSalvato = this.data.urlRichiesta;

      axios
        .post(this.urlSalvato)
        .then((risposta) => {
          this.dataSearch = risposta.data.data;
          this.datiPreseti = true;
          console.log("i dati ci sono");
        })
        .catch((errore) => console.log(errore.message));
    },
    getType() {
      if (this.datiPreseti) {
        for (let i = 0; i < this.dataSearch.length; i++) {
          if (
            this.dataSearch[i].archetype !== undefined &&
            !this.archetypes.includes(data.dataGame[i].archetype)
          ) {
            this.archetypes.push(this.dataSearch[i].archetype);
          }
        }
      }
      return this.archetypes;
    },
  },
  computed: {},
  mounted() {
    this.richiestaDati();
  },
};
</script>

<template>
  <div class="container">
    <select @change="cercaValore">
      <option value="0">Select Type</option>
      <option v-for="(tipo, index) in getType()" :key="index" :value="tipo">
        {{ tipo }}
      </option>
    </select>
  </div>
</template>

<style lang="scss" scoped>
.container {
  width: 70%;
  margin: auto;
  padding: 1rem;
}
</style>