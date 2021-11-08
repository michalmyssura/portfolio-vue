<template>
  <div>
    <p class="text-center">Copyright ® 2021, Michał Myssura</p>
  </div>
</template>

<script>
export default {
  name: 'Footer',
  props: {
    msg: String
  }
}
</script>

<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Montserrat:wght@500&display=swap');

*{
  box-sizing: border-box;
  margin: 0;
  padding: 0;
  background-color:dodgerblue;


}
div{
  padding: 30px 10%;

}
p{
  font-family: "Montserrat",sans-serif;
  font-weight: 500;
  font-size: 18px;
  color:white;
  text-decoration: none;
  text-align: center;
}
</style>

