<script>
export default {
  name: "CardGame",
};
</script>

<template>
  <div class="contImg">
    <img
      src="https://images.ygoprodeck.com/images/cards/34541863.jpg"
      alt="nome carta"
    />

    <h3>NOME DELLA CARTA</h3>
    <span>tipo di carta</span>
  </div>
</template>

<style lang="scss" scoped>
@import "/src/style/partial/_variable.scss";
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
</style>