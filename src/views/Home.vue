<template>
  <div>

    <header>

      <img class="myphoto" src="../assets/ja.png">
      <h1 class="hello">Hello!</h1>
      <p class="whatido"> Javascript - Vue.js</p>


    </header>
  </div>


</template>

<script>

import Place from "../components/Place";
export default {
  name: 'Home',
  components: {Place},
  props: {
    msg: String
  }

}
</script>

<style scoped>

@import url('https://fonts.googleapis.com/css2?family=Montserrat:wght@500&display=swap');


* {
  box-sizing: border-box;
  margin: 0;
  padding: 20px;
  background-color: #007bff;


}

.myphoto{
  width: 15rem;
  display: flex;
  margin-left: auto;
  margin-right: auto;
  margin-bottom: 3rem;
  vertical-align: center;

}

.hello{
  font-family: "Montserrat",sans-serif;
  font-weight: 500;
  font-size: 42px;
  color:white;
  text-align: center;
  text-decoration: none;
  margin-bottom: 40px;
}
.whatido{
  font-family: "Montserrat",sans-serif;
  font-weight: 500;
  font-size: 18px;
  color:white;
  text-align: center;
  text-decoration: none;
  margin-top: 30px;


}

</style>
