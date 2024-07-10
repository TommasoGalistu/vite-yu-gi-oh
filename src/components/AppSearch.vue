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
    handleChange(event) {
      const selectedType = event.target.value;
      if (selectedType !== "0") {
        this.$emit("valore-scelto", selectedType);
      }
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
    <select @change="handleChange">
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