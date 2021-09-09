<template>
  <div id="app">
    <AppHeader />
    <router-view />
  </div>
</template>



<script>
// @ is an alias to /src
import AppHeader from "../src/components/app-header";

export default {
  name: "Main",
  components: {
    AppHeader,
  },
};
</script>

<style lang="scss">
@import url('https://fonts.googleapis.com/css?family=Roboto:300,400,500,700&display=swap');
</style>
