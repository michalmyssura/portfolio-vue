<template>


  <header>
    <h1 class="hello">ABOUT ME!</h1>
  </header>
  <div>
    <div class="first">

      <p class="whatido"> I am a graduate of the Faculty of Mathematics and Computer Science at the University of Łódź</p>
    </div>
    <div class="second">
      <p class="whatiim">I am interested in JavaScript, in particular the Vue.js framework. I devote my free time to learning and personal development</p>
    </div>

  </div>
</template>

<script>
import Place from "../components/Place";
export default {
  name: "Contact",
  components: {Place}
}
</script>

<style scoped>

@import url('https://fonts.googleapis.com/css2?family=Montserrat:wght@500&display=swap');

* {
  box-sizing: border-box;
  margin: 0;
  padding: 30px;
  background-color: #007bff;



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
div{
  display: flex;
  flex-direction: row;
}
.first{
  flex-basis: 50%;
  display: block;

}
.second{
  flex-basis:50%;
  display: block;
}



.whatido{
  font-family: "Montserrat",sans-serif;
  font-weight: 500;
  font-size: 24px;
  color:white;
  text-align: center;
  text-decoration: none;
  margin-bottom: 20px;
}
.whatiim{
  font-family: "Montserrat",sans-serif;
  font-weight: 500;
  font-size: 24px;
  color:white;
  text-align: center;
  text-decoration: none;
  margin-bottom: 20px;
}


@media only screen and (max-width:600px){




  * {
    box-sizing: border-box;
    margin: 0;
    padding: 18px;
    background-color: #007bff;

  }

  div{
    display: flex;
    flex-direction: column;
  }
  .first{
    flex-basis: 50%;
    display: block;

  }
  .second{
    flex-basis:50%;
    display: block;
  }
  .hello{
    font-family: "Montserrat",sans-serif;
    font-weight: 500;
    font-size: 20px;
    color:white;
    text-align: center;
    text-decoration: none;
    margin-bottom: 20px;
  }
  .whatiim{
    font-family: "Montserrat",sans-serif;
    font-weight: 500;
    font-size: 12px;
    color:white;
    text-align: center;
    text-decoration: none;
    margin-bottom: 10px;


  }


  .whatido{
    font-family: "Montserrat",sans-serif;
    font-weight: 500;
    font-size: 12px;
    color:white;
    text-align: center;
    text-decoration: none;
    margin-bottom: 20px;
  }

}
</style>

