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
    getType() {
      if (this.data.isLoad) {
        const listaNuova = [];
        for (let i = 0; i < this.data.dataGame.length; i++) {
          console.log(this.data.dataGame[i].archetype);
          if (
            this.data.dataGame[i].archetype !== undefined &&
            !listaNuova.includes(this.data.dataGame[i].archetype)
          ) {
            listaNuova.push(this.data.dataGame[i].archetype);
          }
        }
        return listaNuova;
      }
    },
  },
  mounted() {
    this.getType();
  },
};
</script>

<template>
  <div class="container">
    <select>
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