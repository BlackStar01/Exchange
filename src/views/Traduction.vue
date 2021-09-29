<template>
  <div id="padd">
    <br />
    <h4 class="container">Un petit texte pour commencer</h4>
    <br />
    <form action="" method="post">
      <div></div>
      <div id="space">
        <div id="select">
            <div id="selected">
              <label for=""> Ajouter un fichier texte </label>
              <br>
              <input id="select-file" type="file" accept="" v-on:change="verif_info_complet"/>
              <small id="fileHelpId"> Les formats de fichiers à envoyer </small>
            </div>
            <div id="selected">
              <label for=""> Vers quelle langue </label>
              <select v-model="langue_choisie" class="my-select" v-on:change="verif_info_complet" id="">
                <option v-for="langue in langues" :key="langue.id">
                  {{ langue.name }}
                </option>
              </select>
              <br><br>
              <label for=""> Recevoir votre traduction en quel type de fichier </label>
              <select v-model="format_choisi" class="my-select" v-on:change="verif_info_complet" id="">
                <option v-for="format in formats" :key="format.id">
                  {{ format.name }}
                </option>
              </select>
            </div>
        </div>

        <!-- S'affiche uniquement si les renseignements sont complets  -->

        <transition name="fade">
          <div id="cache" v-if="complet">
            <h4> Rapport de la transaction </h4>
            <hr>
            <div id="rapport">
              <div id="r1">
                <h5>Nombre de caractères</h5>
                <div id="rap">
                  <span><p>80000</p></span>
                </div>
              </div>
              <div id="r2">
                <h5>Nombre de mots resencés</h5>
                <div id="rap">
                  <span><p>8000</p></span>
                </div>
              </div>
            </div>
            <h5 id="cout">Coût total: 45555 </h5>
          </div>
        </transition>
        
        <div id="soumettre" class="container">
          <button >Soumettre</button>
        </div>
      </div>
      <div></div>
    </form>
    <br />
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
import HelloWorld from "../components/HelloWorld.vue";
export default {
  components: { HelloWorld },
  name: "",
  data() {
    return {
      langue_choisie: "",
      format_choisi: "",
      complet: false,
      langues: [
        {
          id: 1,
          name: "Français",
        },
        {
          id: 2,
          name: "Fon",
        },
        {
          id: 3,
          name: "Anglais",
        },
        {
          id: 4,
          name: "Arabe",
        },
      ],
      formats: [
        {
          id: 1,
          name: "EBU-STL",
        },
        {
          id: 2,
          name: "Json",
        },
        {
          id: 3,
          name: "Srt",
        },
        {
          id: 4,
          name: "VTT",
        },
        {
          id: 5,
          name: "Text",
        },
        {
          id: 6,
          name: "Word",
        },
      ],
    };
  },
  computed: {

  },
  methods: {

    // Verifier toutes les infos pour afficher le rapport de transaction 

    verif_info_complet: function () {  

      let the_file = document.getElementById("select-file").value
      this.nbr_caracteres(this.getFile('texte', 'txt'))

      if(the_file != "" && this.langue_choisie != "" && this.format_choisi != "")
      {
        this.complet = true
      }
      else
      {
        this.complet = false
      }
    },

    // Recupération du lien

    getFile(url, ext) {
      return require(`!raw-loader!@/assets/${url}.${ext}`)
    },

    // Fonction calcul le nombre de caractères du fichier uploadé

    nbr_caracteres: function (file_source) {
      let xhr = new XMLHttpRequest();

      xhr.onreadystatechange = function()
      {
        console.log(this)
      }

      xhr.open('GET', file_source, true)
      xhr.send()
    }

  },
  props: {
    msg: String,
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
:root {
  --blue: #39A7F6;
  --bluehover: #1787ff;
  --vert: #00973A;
}

#padd {
  
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
    border: 1px solid #007bff;
    box-shadow: 0px 0px 20px rgb(165, 165, 165);
    padding-top: 70px;
    padding-bottom: 70px;
  }
#select-file
{
  width: 100%;
  padding: 10px;
}
#fileHelpId
{
  color: var(--vert);
}
#select {
  display: grid;
  grid-template-columns: 5fr 5fr;
  padding-bottom: 2%;
}
#selected
{
  width: 80%;
  margin: auto;
}
.my-select {
  width: 100%;
  border: 1px solid var(--blue);
  padding: 10px;
}
.my-select:hover,
.my-select:active,
.my-select:focus {
  border-color: #00973A;
}

  @media (max-width: 991px) {
    #padd {
    padding-top: 12%;
    padding-bottom: 5%;
    }
    #select
    {
      grid-template-columns: 1fr;
      margin: auto;
    }
    #selected
    {
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
  }
#cache
{
  text-align: center;
  padding-bottom: 5%;
}
#rapport
{
  display: inline-flex;
  width: 100%;
  padding: 10px;
}
#r1
{
  width: 50%;
}
#r2
{
  width: 50%;
}

#rap span
{
  height: 12vh;
  width: 12vh;
  display: inline-block;
  border-radius: 100%;
  background-color: #00973A;
  color: white;
  font-weight: bold;
}
#rap span p
{
  position: relative;
  top: 40%;
}
#cout
{
  font-weight: bold;
}
.fade-enter-active, .fade-leave-active
{
  transition: opacity .5s, transform 1s;
}
.fade-enter, .fade-leave-active
{
  opacity: 0;
  transform: translateY(100px);
}
#soumettre {
  padding-top: 2%;
}
#soumettre button {
  width: 100%;
  height: 60px;
  background-color: #00973A;
  border: 1px solid var(--blue);
  font-weight: bold;
  color: white;
  transition-property: all;
  transition-duration: 500ms;
}
#soumettre button:hover {
  background-color: var(--blue);
}

</style>


