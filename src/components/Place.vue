<template>
  <div>
    <div class="first">
      <h4 class="place">City</h4>
      <p class="city">Łódź</p>
    </div>
    <div class="second">
      <h4 class="aboutme">About me on the internet</h4>
      <ul class="links">
        <li><a href="https://github.com/michalmyssura">Github</a> </li>
        <li><a href="https://www.linkedin.com/in/micha%C5%82-myssura-416546175/">LinkedIn</a> </li>
      </ul>

    </div>
  </div>

</template>

<script>
export default {
  name: 'Place',
  props: {
    msg: String
  }
}
</script>

<style scoped>

*{
  box-sizing: border-box;
  margin:0;
  padding: 15px 0;
  background-color:#343a40;


}
h4,p,a{
  font-family: "Montserrat",sans-serif;
  font-weight: 500;
  font-size: 16px;
  color:white;
  text-decoration: none;}

div{
  display: flex;
  flex-direction: row;
}
.first{
  flex-basis: 50%;
  display: block;

}
.first h4,p{
  text-align: center}

.city{
  margin-top: 1rem;
}
.second{
  flex-basis:50%;
  display: block;
}
.second h4,ul{
  text-align: center;
}
.links li{
  margin-top: 15px;
  display: inline-block;
  padding: 0px 60px;
}
</style>
