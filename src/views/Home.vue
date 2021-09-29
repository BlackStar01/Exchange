<template>
  <div id="home">
    <div id="cover" class="container-fluid">
        <div id="cover-gauche"></div>
        <div id="cover-droit">
          <h1>
            Echanger des devises, <br />
             Traduire, <br />
            Transcrire, <br />
            Nous sommes à votre service
          </h1>
        </div>
    </div>
    <div id="services">
      <h2>Services</h2>
      <div id="trait"></div>
      <div id="the-services">
        <div></div>
        <div id="services-e-change">
          <img src="../assets/ff.svg" alt="L'image ne s'affiche pas"/>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Distinctio,
            ducimus aliquid dolor aspernatur, numquam enim magnam ea
          </p>
        </div>
        <div id="services-traduction">
          <img src="../assets/trad.svg" alt="L'image ne s'affiche pas"/>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Distinctio,
            ducimus aliquid dolor aspernatur, numquam enim magnam ea
          </p>
        </div>
        <div id="services-traduction">
          <img src="../assets/tran.svg" alt="L'image ne s'affiche pas"/>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Distinctio,
            ducimus aliquid dolor aspernatur, numquam enim magnam ea
          </p>
        </div>
        <div></div>
      </div>
    </div>
    <div id="e-change">
        <div></div>
        <div id="e-change-gauche">
          <h1 id="text">Echangez vos devises rapidement et en toute sécurité </h1>
        </div>
        <div id="e-change-droit">
          <router-link to="/Register"><button type="button" id="bouton" class="btn">Échanger une devise</button></router-link>
        </div>
        <div></div>
    </div>
    <div id="traduction">
        <div></div>
        <div id="traduction-gauche">
          <router-link to="/e-change"><button type="button" id="bouton" class="btn">Traduire</button></router-link>
        </div>
        <div></div>
        <div id="traduction-droit"> 
          <h1 id="text">Faites traduire vos fichiers textes par nos experts </h1>
        </div>
    </div>
    <div id="e-change">
        <div></div>
        <div id="e-change-gauche">
          <h1 id="text"> Faites vos transcriptions de fichiers en un temps record </h1>
        </div>
        <div id="e-change-droit">
          <router-link to="/Register"><button type="button" id="bouton" class="btn"> Transcrire </button></router-link>
        </div>
        <div></div>
    </div>
    <router-view />

  </div>
  
</template>

<script>
export default {
  name: "Home",
  data() {
    return {};
  },
};
</script>

<style scoped>
:root {
  --blue: #39A7F6;
  --transparent: rgba(255, 255, 255, 0);
  --bluehover: #1787ff;
  --vert: #00973A;
}
@font-face {
  font-family: Gras;
  src: url(../assets/Dunkin.otf);
}

#cover {
  background: linear-gradient(to left, #00973A, rgba(255, 255, 255, 0)),
    url("../assets/cover.jpg") no-repeat center;  height: 750px;
  background-size: 100% 100%;
  background-repeat: no-repeat;
  color: white;
  height: 80vh;
  font-family: Gras;
  display: grid;
  grid-template-columns: 1fr 1fr;
}
#cover-gauche, #cover-droit
{
  align-self: center;
}
@media (max-width: 991px) {
  #cover {  
    height: 65vh;
    text-align: center;
    grid-template-columns: 1fr;
  }
}

/** -------------------  SERVICES -------------------  */

#services {
  text-align: center;
  padding-top: 3%;
  padding-bottom: 3%;
}
#trait {
  width: 3%;
  margin: auto;
  height: 2px;
  background-color: var(--vert);
}
#the-services
{
  padding-top: 2%;
  display: grid;
  grid-template-columns: 2fr 2fr 2fr 2fr 2fr;
}
#services img {
  max-height: 60px;
}
#services p {
  padding-top: 6%;
}
@media (max-width: 991px) {
  #trait {
    width: 10%;
  }
  #the-services
  {
    padding-top: 5%;
    grid-template-columns: 1fr;
  }
}
/** -------------------  GENERAL SETTINGS -------------------  */
#bouton
{
  color: white;
  font-weight: bold;
  padding: 5%;
  width: 100%;
  border: 1px solid inherit;
  border-radius: 42px;
}
#text
{
  color: white;
  font-family: Gras;
}
@media (max-width: 991px) {
  h1
  {
    font-size: 2em;
  }
  #bouton
  {
    padding: 3%;
  }
}

/** -------------------  E-CHANGE -------------------  */

#e-change {
  height: 70vh;
  overflow: hidden;
  background: linear-gradient(to right, var(--blue), rgba(255, 255, 255, 0)),
    url("../assets/cover.jpg") no-repeat center;
  display: grid;
  grid-template-columns: 2fr 5fr 3fr 2fr;
}
#e-change-gauche
{
  align-self: center;
  width: 70%;
  text-align: center;
}
#e-change-droit
{
  align-self: flex-end;
  padding-bottom: 30%;
}

#e-change #bouton {
  background-color: var(--blue);
}
#e-change #bouton:hover {
  background-color: #0051ff;
}
@media (max-width: 991px) {
  #e-change
  {
    height: 50vh;
    grid-template-columns: 1fr;
  }
  #e-change-gauche
  {
    align-self: center;
    width: 70%;
    margin: auto;
    text-align: center;
  }
  #e-change-droit
  {
    width: 50%;
    margin: auto;
    padding-bottom: 0%;
  }
}

/** -------------------  TRADUCTION  -------------------  */

#traduction
{
  height: 70vh;
  overflow: hidden;
  background: linear-gradient(to left, #00973A, rgba(255, 255, 255, 0)),
    url("../assets/cover.jpg") no-repeat center;
  display: grid;
  grid-template-columns: 2fr 3fr 1fr 5fr;
}
#traduction-droit
{
  align-self: center;
  width: 70%;
  text-align: center;
}
#traduction-gauche
{
  align-self: flex-end;
  padding-bottom: 30%;
}

#traduction #bouton {
  background-color: #00973A;
}
#traduction #bouton:hover {
  background-color: rgb(3, 187, 3);
}
@media (max-width: 991px) {
  #traduction
  {
    height: 50vh;
    grid-template-columns: 1fr;
  }
  #traduction-droit
  {
    align-self: center;
    width: 70%;
    margin: auto;
    text-align: center;
  }
  #traduction-gauche
  {
    width: 50%;
    margin: auto;
    padding-bottom: 0%;
  }
}

</style>