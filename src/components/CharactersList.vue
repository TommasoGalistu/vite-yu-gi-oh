<script>
import CardGame from "./CardGame.vue";
export default {
  name: "CharactersList",
  components: {
    CardGame,
  },
};
</script>

<template>
  <div class="container">
    <div class="contTitle">
      <span>Found 39 card</span>
    </div>

    <div class="contCard">
      <CardGame />
    </div>
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
    .contImg {
      text-align: center;
      background-color: $colorPrincipal;
      width: 8rem;
      margin-bottom: 1rem;
      h3 {
        font-size: 0.8rem;
        padding: 1rem;
      }
      span {
        padding: 1rem;
      }
      img {
        width: 100%;
      }
    }
  }
}
</style>