<template>
  <Navbar />
  <Home />
</template>

<script>
import Home from "./views/Home.vue";
import Navbar from "./components/Navbar.vue";

export default {
  name: "App",
  components: {
    Home,
    Navbar,
  },
};
</script>

<style>
#app {
  font-family: theme("fontFamily.sans");
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
  margin: 4rem auto;
  border: 0.2rem solid theme("colors.near-black");
  border-radius: 2rem;
  box-shadow: inset 1px 1px 1px 0.3rem theme("colors.near-gray");
  width: 90%;
  height: 100%;
  padding: 4rem;
}
</style>
