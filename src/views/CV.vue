<template>
  <div>

    <header>

      <h1> WORK EXPERIENCE</h1>
      <h3>02.2021 - 07.2021</h3>
      <p>Management of an internal database system | Dywany Chemex | Końskie</p>
      <h3>10.2019 - 01.2021</h3>
      <p>Sales specialist | Dywany Chemex | Końskie</p>
      <h1>EDUCATION</h1>
      <h3>10.2018 - 09.2021</h3>
        <p>Direction: Computer Science</p>
      <p>Specialisation: General Informatics</p>
      <p>Education Level: Bachelor's degree</p>
      <h1>LANGUAGE SKILLS</h1>
      <p>English: Intermediate level (B2)</p>
      <p>German: Basic level (A1)</p>
      <h1>SKILLS</h1>
      <p>Javascript, C++, Java, React.js, Vue.js</p>
      <p>HTML, CSS, Git, MongoDB, MySQL</p>
      <h1>TRAINING, COURSES, CERTIFICATES</h1>
      <h3>04.2019</h3>
      <p>Training Salesforce Academy</p>
      <p>Organiser : Accenture</p>
      <p>Participation in the 7-day Salesforce Academy training course</p>
      <h1>INTERESTS</h1>
      <p>INFORMATICS, Technologies, Motorization, Music</p>
    </header>
  </div>
</template>

<script>
export default {
  name: "CV"
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

h1{
  font-family: "Montserrat",sans-serif;
  font-weight: 500;
  font-size: 42px;
  color:white;
  text-align: center;
  text-decoration: none;
  margin-bottom: 40px;
}

h3{
  font-family: "Montserrat",sans-serif;
  font-weight: 500;
  font-size: 18px;
  color:white;
  text-decoration: none;
  margin-bottom: 10px;
  text-align: center;
}

p{
  font-family: "Montserrat",sans-serif;
  font-weight: 500;
  font-size: 20px;
  color:white;
  text-decoration: none;
  margin-bottom: 10px;
  text-align: center;
}

@media only screen and (max-width:600px){

  * {
    box-sizing: border-box;
    margin: 0;
    padding: 10px;
    background-color: #007bff;


  }

  h1{
    font-family: "Montserrat",sans-serif;
    font-weight: 500;
    font-size: 22px;
    color:white;
    text-align: center;
    text-decoration: none;
    margin-bottom: 20px;
  }

  h3{
    font-family: "Montserrat",sans-serif;
    font-weight: 500;
    font-size: 10px;
    color:white;
    text-decoration: none;
    margin-bottom: 10px;
    text-align: center;
  }

  p{
    font-family: "Montserrat",sans-serif;
    font-weight: 500;
    font-size: 14px;
    color:white;
    text-decoration: none;
    margin-bottom: 10px;
    text-align: center;
  }




}


</style>
