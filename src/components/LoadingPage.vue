<script>
export default {
  name: "LoadingPage",
};
</script>

<template>
  <div class="contLoading">
    <h3>Loading...</h3>
  </div>
</template>

<style lang="scss" scoped>
.contLoading {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 2rem;
  background-color: white;
}
</style>