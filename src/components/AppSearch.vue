<script>
import { data } from "../data/data";
export default {
  name: "AppSearch",
  data() {
    return {
      data,
    };
  },
  methods: {
    cercaValore(event) {
      const valore = event.target.value;

      this.$emit("valore-scelto", valore);
    },
  },
  computed: {
    // trova e filtra i nomi archetype delle carte e le mette nella section option
    getType() {
      let listaNuova = [];
      if (this.data.isLoad) {
        for (let i = 0; i < this.data.dataGame.length; i++) {
          if (
            this.data.dataGame[i].archetype !== undefined &&
            !listaNuova.includes(this.data.dataGame[i].archetype)
          ) {
            listaNuova.push(this.data.dataGame[i].archetype);
          }
        }
      }
      return listaNuova;
    },
  },
  mounted() {},
};
</script>

<template>
  <div class="container">
    <select @change="cercaValore">
      <option value="0">Select Type</option>
      <option v-for="(tipo, index) in getType" :key="index" :value="tipo">
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