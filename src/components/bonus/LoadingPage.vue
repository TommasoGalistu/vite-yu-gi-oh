<template>
  <div class="contLoading">
    <div class="containText">
      <div class="spinner"></div>
      <p>Loading...</p>
    </div>
  </div>
</template>

<script>
export default {
  name: "LoadingPage",
};
</script>

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
  background-color: #d48f38;
  color: white;
  z-index: 1000;
  .containText {
    p {
      padding: 1rem;
      font-size: 0.8rem;
    }
    .spinner {
      width: 50px;
      height: 50px;
      border: 5px solid #8f8f8f;
      border-top: 5px solid #ffffff;
      border-radius: 50%;
      animation: spin 1s linear infinite;
    }

    @keyframes spin {
      0% {
        transform: rotate(0deg);
      }
      100% {
        transform: rotate(360deg);
      }
    }
  }
}
</style>