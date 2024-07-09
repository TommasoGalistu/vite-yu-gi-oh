<script>
export default {
  name: "AppHeader",
};
</script>

<template>
  <div class="container">
    <div class="contImg">
      <img src="/src/assets/logoCartone.webp" alt="" />
    </div>
    <h1>Yu-Gi-Oh API</h1>
  </div>
</template>

<style lang="scss" scoped>
.container {
  height: 5rem;
  display: flex;
  align-items: center;
  justify-content: flex-start;
  .contImg {
    height: 100%;

    padding: 1rem;
  }
}
</style>