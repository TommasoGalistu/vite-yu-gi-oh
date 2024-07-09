<script>
import AppHeader from "./components/AppHeader.vue";
import AppSearch from "./components/AppSearch.vue";
import CharactersList from "./components/CharactersList.vue";
export default {
  name: "App",
  components: {
    AppHeader,
    AppSearch,
    CharactersList,
  },
};
</script>

<template>
  <header>
    <AppHeader />
  </header>

  <main>
    <AppSearch />
    <CharactersList />
  </main>
</template>

<style>
</style>
