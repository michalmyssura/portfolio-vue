<template>
  <div>
    <header>
      <a  class="logo" href="/">Michał Myssura</a>
      <nav>
        <ul class="nav_links">
          <li><a> <router-link to="/about">About</router-link></a> </li>
          <li><a> <router-link to="/contact">Contact</router-link></a> </li>
          <li><a> <router-link to="/CV">CV</router-link></a> </li>
        </ul>
      </nav>
    </header>
  </div>

</template>
<script>
export default {
  name: 'Navbar',
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
  background-color:#343a40;


}

li,a{
  font-family: "Montserrat",sans-serif;
  font-weight: 500;
  font-size: 16px;
  color:white;
  text-decoration: none;

}
header{
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 30px 10%;

}

.logo{
  cursor: pointer;
}
.nav_links{
  list-style: none;

}
.nav_links li{
  display: inline-block;
  padding: 0px 10px;

}

.nav_links li a {
  transition: all 0.3s ease 0s;


}

.nav_links li a:hover {


}


@media only screen and (max-width:600px){
  li,a{
    font-family: "Montserrat",sans-serif;
    font-weight: 500;
    font-size: 12px;
    color:white;
    text-decoration: none;

  }

}

</style>
