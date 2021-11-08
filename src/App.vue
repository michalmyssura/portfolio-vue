<template>
  <div id="app">
<Navbar/>
    <router-view/>
    <Place/>

  <Footer/>
  </div>
</template>

<script>
import Navbar from "./components/Navbar";
import Home from "./views/Home";
import Footer from "./components/Footer";
import Place from "./components/Place";
export default {
  components: {Place, Footer, Home, Navbar}
}
</script>

<style scoped>



</style>
