<template>
  <div id="app">
    <header id="header" class="fixed-top">
      <div></div>
        <div class="logo float-left">
          <!-- Uncomment below if you prefer to use an text -->
          <!--<h1><a href="index.html">LE LOGO</a></h1>-->
          <img src="../src/assets/logo.jpg" alt="LOGO" id="logo">
        </div>
        <div></div>

        <button v-on:click="apparition" id="mobile">Menu</button>

        <nav id="aaa" class="main-nav float-right d-lg-block">
          <ul>
            <li>
              <router-link to="/" class="nav-link active">Acceuil</router-link>
            </li>
            <li>
              <router-link to="/e-change" class="nav-link"
                >E-change </router-link
              >
            </li>
            <li>
              <router-link to="/traduction" class="nav-link"
                >Traduction</router-link
              >
            </li>
            <li>
              <router-link to="/transcription" class="nav-link"
                >Transcription</router-link
              >
            </li>
            <li>
              <router-link to="/Login" class="nav-link"
                >Login</router-link
              >
            </li>          
          </ul>
        </nav>
        <!-- .main-nav -->
    </header>
    <!-- #header -->

    <router-view />


    <footer>
      <div id="contact">
        <div id="social">
          <a href="dd"><button id="socials">
              <img src="./assets/facebook.svg" alt="" /></button></a><br/><br/>
          <a href="dcd"><button id="socials">
              <img src="./assets/twitter.svg" alt="" /></button>
          </a><br/><br/>
          <a href="xx">
            <button id="socials"><img src="./assets/whatsapp.svg" alt="" /></button>
          </a>
          <br/><br/>
        </div>
        <div id="sociall">
          <div id="tel">
            <button><img src="./assets/call.svg" alt="" /></button>            
            <p> 00229 52 47 98 43</p>
          </div>
          <div id="mail">
            <button><img src="./assets/mail.svg" alt="" /></button>                
              <p> exchangeteam@yahoo.com</p>
          </div>
        </div>
      </div>
    </footer>
    <div class="container" id="copirights">
      <p>Copirights © . Exchange Team 2021. All rights reserved.</p>
    </div>
  </div>
</template>

<script>

export default {
  name: "Home",
  data() {
    return {};
  },
  methods: {
    apparition: function() {
      let nav = document.getElementById('aaa')
      if (nav.style.display == 'none') {
        nav.style.display = "block"
      }
      else
      {
        nav.style.display = "none"
      }
    }
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

/*--------------------------------------------------------------
# Header
--------------------------------------------------------------*/

#logo
{
  height: max-content;
}

#header {
  height: 80px;
  transition: all 0.5s;
  z-index: 997;
  display: grid;
  grid-template-columns: 3fr 5fr 2fr 9fr;
  transition: all 0.5s;
  padding: 20px 0;
  background: rgba(255, 255, 255, 0.925);
  box-shadow: 0px 0px 30px rgba(127, 137, 161, 0.3);
}

#header.header-scrolled {
  height: 60px;
  padding: 10px 0;
}

@media (max-width: 991px) {
  #header {
    height: 60px;
    padding: 10px 0;
  }
}

#header .logo h1 {
  font-size: 36px;
  margin: 0;
  padding: 0;
  line-height: 1;
  font-weight: 400;
  letter-spacing: 3px;
  text-transform: uppercase;
}

@media (max-width: 991px) {
  #header .logo h1 {
    font-size: 28px;
    padding: 8px 0;
    position: fixed;
  }
}

#header .logo h1 a,
#header .logo h1 a:hover {
  color: #00366f;
  text-decoration: none;
}

#header .logo img {
  padding: 0;
  margin: 0px 0;
  max-height: 50px;
}
/*--------------------------------------------------------------
# Navigation Menu
--------------------------------------------------------------*/
/* Desktop Navigation */

.main-nav,
.main-nav * {
  margin: 0;
  padding: 0;
  list-style: none;
}

.main-nav > ul > li {
  position: relative;
  white-space: nowrap;
  float: left;
}

.main-nav a {
  display: block;
  position: relative;
  color: #004289;
  padding: 10px 15px;
  transition: 0.3s;
  font-size: 14px;
  font-family: "Montserrat", sans-serif;
  font-weight: 500;
}

.main-nav a:hover,
.main-nav .active > a,
.main-nav li:hover > a {
  color: var(--blue);
  text-decoration: none;
}

#header button
{
  float: right;
  font-size: 28px;
  padding: 8px 0;  
  background-color: inherit;
  border: none;
  line-height: 1;
  display: none;
}

@media (max-width: 991px) {
    #header {
      transition: all 0.5s;
      z-index: 997;
      display: grid;
      grid-template-columns: 1fr 5fr 8fr 5fr 1fr;
    }

  .main-nav
  {
    padding-top: 2%;
    background-color: var(--blue);
    height: 100vh;
    width: 100%;
    display: none;
  }
  #header button
  {
    float: right;
    font-size: 28px;
    padding: 8px 0;
    display: block;
    background-color: var(--blue);
    border: 1px solid transparent;
  }
  #header button:active, #header button:focus
  {
    outline: none;
    border-right: 1px solid white;
  }
  .main-nav > ul > li {
    display: block;
    width: 100%;
    text-align: center;
    padding: 5%;
  }
  .main-nav a {
    display: block;
    color: white;
  }
  .main-nav a:hover,
  .main-nav .active > a,
  .main-nav li:hover > a {
    color: var(--vert);
    text-decoration: none;
  }
}

/*--------------------------------------------------------------
# Footer
--------------------------------------------------------------*/

footer {
  background: linear-gradient(to right, black, 80%, rgba(255, 255, 255, 0)),
    url("./assets/cover.jpg") no-repeat center fixed;
  color: white;
  font-weight: bold;
  padding-bottom: 3%;
  padding-top: 3%;
}
#contact
{
  overflow: hidden;
  display: grid;
  grid-template-columns: 1fr 10fr;
}
#social {
  padding-left: 40px;
  align-self: center;
}
#socials img {
  max-height: 90%;
}
#social button {
  background-color: var(--blue);
  border: 1px solid transparent;
  width: 50px;
  height: 50px;
  padding: 10px;
  border-radius: 100%;
  transition-property: all;
  transition-duration: 200ms;
}
#sociall
{
  border: 1px solid transparent;
  border-radius: 20px;
  background-color: rgba(0, 0, 0, 0.745);
  width: 80%;
  margin: auto;
  align-self: center;
  display: grid;
  grid-template-columns: 1fr 1fr;
}
#tel, #mail
{
  width: 40%;
  margin: auto;
  padding-top: 5%;
  padding-bottom: 5%;
  text-align: center;
  align-self: center;
}
#mail button, #tel button 
{
  background-color: var(--blue);
  border: 1px solid transparent;
  width: 50px;
  height: 50px;
  border-radius: 100%;
}
#copirights {
  text-align: center;
  font-weight: bold;
  padding-top: 2%;
  padding-bottom: 1%;
}
@media (max-width: 991px) {
  #sociall
  {
    display: grid;
    grid-template-columns: 1fr;
  }
  #tel, #mail
  {
    width: 100%;
  }
}
</style>
