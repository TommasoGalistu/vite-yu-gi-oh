<script>
import { data } from "../data/data";
export default {
  name: "AppSearch",
  data() {
    return {
      data,
      archetypes: [],
    };
  },

  methods: {
    cercaValore(event) {
      const valore = event.target.value;
      this.$emit("valore-scelto", valore);
    },
    getType() {
      if (data.isLoad) {
        for (let i = 0; i < data.dataGame.length; i++) {
          if (
            data.dataGame[i].archetype !== undefined &&
            !this.archetypes.includes(data.dataGame[i].archetype)
          ) {
            this.archetypes.push(data.dataGame[i].archetype);
          }
        }
      }
    },
  },
  computed: {},
  mounted() {
    this.getType();
  },
};
</script>

<template>
  <div class="container">
    <select @change="cercaValore">
      <option value="0">Select Type</option>
      <option v-for="(tipo, index) in archetypes" :key="index" :value="tipo">
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