<script>
import { data } from "../data/data";
import axios from "axios";
export default {
  name: "AppSearch",
  data() {
    return {
      data,
      dataSearch: [],
      archetypesSingol: [],
      urlSalvato: "https://db.ygoprodeck.com/api/v7/archetypes.php",
      datiPreseti: false,
    };
  },

  methods: {
    cercaValore(event) {
      const valore = event.target.value;
      this.$emit("valore-scelto", valore);
    },

    richiestaDati() {
      axios
        .post(this.urlSalvato)
        .then((risposta) => {
          console.log("risposta api nuova: ", risposta.data);
          this.dataSearch = risposta.data;
          this.datiPreseti = true;
          console.log("i dati ci sono");
        })
        .catch((errore) => console.log(errore.message));
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
      <option
        v-for="(archetipo, index) in dataSearch"
        :key="index"
        :value="archetipo.archetype_name"
      >
        {{ archetipo.archetype_name }}
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