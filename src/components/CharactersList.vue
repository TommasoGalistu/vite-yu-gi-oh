<script>
import CardGame from "./CardGame.vue";
import { data } from "../data/data";

import LoadingPage from "./bonus/LoadingPage.vue";
export default {
  name: "CharactersList",
  data() {
    return {
      data,
    };
  },
  components: {
    CardGame,
    LoadingPage,
  },
};
</script>

<template>
  <div class="container">
    <div class="contTitle">
      <span>{{ `Found ${data.dataGame.length} cards` }}</span>
    </div>

    <div class="contCard" v-if="data.isLoad">
      <CardGame
        v-for="carta in data.dataGame"
        :key="carta.id"
        :path="carta.card_images[0].image_url"
        :descrizione="carta.name"
        :nome="carta.name"
        :tipo="carta.type"
      />
    </div>
    <LoadingPage v-else />
  </div>
</template>

<style lang="scss" scoped>
@import "../style/partial/variable.scss";
.container {
  width: 70%;
  margin: auto;
  background-color: white;
  padding: 2rem;
  .contTitle {
    padding: 1rem 0.5rem;
    background-color: black;
    color: white;
  }
  .contCard {
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
  }
}
</style>