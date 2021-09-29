<template>
  <div id="padd">
    <br>
    <h4 class="container">Un petit textezuc u rz uo bz ouzhi niozn izn </h4>
    <br>
    <form action="" method="post">
      <div></div>
      <div id="space">
        <div id="select">
          <div></div>
          <div>
            <label for=""> Ce que je donne </label>
            <select class="my-select" v-model="devise_donner" name="" id="">
              <option v-for="devise in devises" :key="devise.id"> {{ devise.name }}</option>
            </select>
          </div>
          <div></div>
          <div>
            <label for=""> Ce que je reçois </label>
            <select v-model="devise_recu" class="my-select" name="" id="">
              <option v-for="devise in devises" :key="devise.id"> {{ devise.name }}</option>
            </select>
          </div>
          <div></div>
        </div>
        <div id="rate">
          <div></div>
          <div id="taux">
            <div id="prix">
              <p> Prix actuel </p>
              <h5>{{prix_actuel}}</h5>
            </div>
          </div>
          <div></div>
        </div>
        <div id="change">
          <div></div>
            <div>
              <input v-model="data" type="tel" placeholder="Montant à donner"/>
            </div>
            <div></div>
            <div>
              <h4>Je recois </h4>
              <hr>
              <strong> {{data*prix_actuel + ' '}} {{rendu}} </strong>
            </div>
            <div></div>
        </div>
        <div id="soumettre" class="container">
          <button v-on:click="submit()">Soumettre</button>
        </div>
      </div>
      <div></div>
    </form>
    <br>
    <div id="indications" class="container">
      <HelloWorld 
        indication_1="Lorem, ipsum dolor sit amet consectetur adipisicing elit. Dicta nulla nam, cumque soluta fugiat aut! Optio ab provident porro veritatis, necessitatibus quia omnis labore a voluptatibus minima non nobis dolorem" 
        indication_2="Lorem, ipsum dolor sit amet consectetur adipisicing elit. Dicta nulla nam, cumque soluta fugiat aut! Optio ab provident porro veritatis, necessitatibus quia omnis labore a voluptatibus minima non nobis dolorem"
        indication_3="Lorem, ipsum dolor sit amet consectetur adipisicing elit. Dicta nulla nam, cumque soluta fugiat aut! Optio ab provident porro veritatis, necessitatibus quia omnis labore a voluptatibus minima non nobis dolorem"
      />
    </div>
    
  </div>
</template>

<script>

import HelloWorld from '../components/HelloWorld.vue';
export default {
  components: { HelloWorld },
  name: '', 
  data() {
    return {
      data: 0,
      devise_recu: '',
      devise_donner: '',
      devises:
      [
        {
          id : 1,
          name : 'Franc d\'afrique de l\'Ouest ( XOF )',
          simple_name : 'XOF',
        },
        {
          id : 2,
          name : 'Dollar américain ( $ )',
          simple_name : '$',
        },
        {
          id : 3,
          name : 'Euro ( £ )',
          simple_name : '£',
        }
      ]
    }
  }, 
  computed: {

    // Pour ne pas afficher tout le nom de la devise 

    rendu: function()
    {
      let alpha = 0, retour = [];
      for (let i = 0; i < this.devise_recu.length; i++) {
       if (this.devise_recu[i] == '(') {
         alpha = i;
         break
       }
     }
     for ( alpha; alpha < this.devise_recu.length; alpha++) {
       retour.push(this.devise_recu[alpha])
     }
     return retour.join('')
    },

    // Pour rendre le prix actuel dynamique
    
    prix_actuel: function () 
    { 
      let prix = 0
      if(this.devise_donner == this.devise_recu)
      {
        prix = 1;
      }
      else if (this.devise_donner == this.devises[0].name && this.devise_recu == this.devises[1].name) {
        prix = 580
      }
      return prix;
    }
  },
  methods: {

  },
  props: {
    msg: String
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
:root {
  --blue: #39A7F6;
  --bluehover: #1787ff;
  --vert: #00973A;
  --transparent: rgba(255, 255, 255, 0);
}

  #padd
  {
    padding-top: 5%;
    padding-bottom: 5%;
  }
  form
  {
    display: grid;
    grid-template-columns: 1fr 4fr 1fr;
    align-self: center;
  }
  #space
  {
    border: 1px solid transparent;
    box-shadow: 0px 0px 20px rgb(165, 165, 165);
    padding-top: 70px;
    padding-bottom: 70px;
  }
  #select, #change
  {
    display: grid;
    grid-template-columns: 1fr 3fr 1fr 3fr 1fr;
    padding-bottom: 2%;
  }
  .my-select
  {
    width: 100%;
    border: 1px solid #39A7F6;
    padding: 10px;
  }
  .my-select:hover, .my-select:active, .my-select:focus
  {
    border-color: #00973A;
  }

  #rate
  {
    display: grid;
    grid-template-columns: 5fr 1fr 5fr;
    padding-bottom: 3%;
    padding-top: 2%;
  }
  #taux
  {
    height: 12vh;
    width: 100%;
    border: 1px solid var(--blue);
    background-color: var(--blue);
    border-radius: 100%;
    color: white;
  }
  #prix
  {
    position: relative;
    text-align: center;
    top: 25%;
  }
  #prix h5
  {
    font-weight: bold;
    color: black;
  }
  #change input
  {
    padding: 10px;
    border: 1px solid #007bff;
    border-radius: 10px;
    width: 100%;
  }
  #change input:hover, #change input:active, #change input:focus
  {
    border-color: var(--vert);
    outline: none;
  }

  @media (max-width: 991px) {
    #select, #change
    {
      grid-template-columns: 1fr;
      width: 90%;
      margin: auto;
    }
    #space
    {
      border: 1px solid transparent;
      width: 90%;
      margin: auto;
    }
    .my-select
    {
      width: 100%;
      margin: auto;
    }
    form
    {
      grid-template-columns: 1fr;
    }
    #rate
    {
      grid-template-columns: 1fr 1fr 1fr;
    }
    #taux
    {
      height: 16vh;
    }
    #change h4
    {
      padding-top: 5%;
    }

  }

  #soumettre button
  {
    width: 100%;
    height: 60px;
    background-color: #39A7F6;
    border: 1px solid #00973A;;
    font-weight: bold;
    color: white;
    transition-property: all;
    transition-duration: 500ms;
  }
  #soumettre button:hover
  {
    background-color: #00973A;
  }

  
</style>


