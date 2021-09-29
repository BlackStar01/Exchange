<template>
    <div id="login">
        <div id="logo">
            <img src="../assets/logo.png" alt="">
        </div>
        <div id="form">
            <form action="" method="post" v-on:submit.prevent="submit">
                <div id="gauche">   

                    <input type="text" v-bind:class="{'is-invalid': validationStatus($v.nom)}" v-model.trim="$v.nom.$model" id="input" placeholder="Nom"> 
                    <small id="erreur" v-if="!$v.nom.required" class="invalid-feedback"> Le nom est requis *</small>
                    <br>

                    <input type="text" v-bind:class="{'is-invalid': validationStatus($v.prenom)}" v-model.trim="$v.prenom.$model" id="input"  placeholder="Prénom">
                    <small id="erreur" v-if="!$v.prenom.required" class="invalid-feedback"> Le prenom est requis *</small>
                    <br>

                    <input type="email" v-bind:class="{'is-invalid': validationStatus($v.mail)}" v-model.trim="$v.mail.$model" id="input" placeholder="Adresse Mail">
                    <small id="erreur" v-if="!$v.mail.required" class="invalid-feedback"> Le mail est requis *</small>
                    <small id="erreur" v-if="!$v.mail.email" class="invalid-feedback"> Le mail n'est pas valide *</small>
                    <br>

                    <input type="text" v-bind:class="{'is-invalid': validationStatus($v.tel)}" v-model.number.trim="$v.tel.$model" id="input"  placeholder="Numéro de Télephone"><br>
                    <small id="erreur" v-if="!$v.tel.required" class="invalid-feedback"> Le numéro de télephone est requis *</small>

                    <input type="password" v-bind:class="{'is-invalid': validationStatus($v.motPasse)}" v-model="$v.motPasse.$model" id="input" placeholder="Mot de passe">
                    <small id="erreur" v-if="!$v.motPasse.required" class="invalid-feedback"> Le mot de passe est requis *</small>
                    <br>

                    <input type="password" v-bind:class="{'is-invalid': validationStatus($v.confirmPass)}" v-model="$v.confirmPass.$model" id="input" placeholder="Confirmer mot de passe">
                    <small id="erreur">{{verif_confirm_pass}}</small>
                    <br>
                    <br>

                    <button type="submit" id="soumettre">Submit</button>
                </div>
            </form>
        </div>

    </div>
</template>

<script>

import { required, email } from 'vuelidate/lib/validators'

export default {
    data() {
        return {
            nom: '',
            prenom: '',
            mail: '',
            tel: '',
            motPasse: '',
            confirmPass: '',
            confirm: false,
        }
    },
    validations: {
        nom: {required},
        prenom: {required},
        mail: {required, email},
        tel: {required},
        motPasse: {required},
        confirmPass: {required}
    },

    methods: {    
        
        resetForm: function() {
            this.nom = '';
            this.prenom = '';
            this.mail = '';
            this.tel = '';
            this.motPasse = '';
            this.confirmPass = '';
        },

        validationStatus: function(validation)
        {
            return typeof validation != "undefined" ? validation.$error: false;
        },

        submit: function() {
            this.$v.$touch();
            if (this.$v.$pendding || this.$v.$error)
            {
                return;
            }
            else
            {
                if(this.motPasse != this.confirmPass)
                {
                    // Cas où les mot de passe diffèrent
                    return;
                }
                else
                {
                    alert("Informations bien envoyées. Merci !");
                    this.$v.$reset();
                    this.resetForm();
                }
            }
        }   
    },

    computed: {
        verif_confirm_pass: function () {
            let message = ''
            if (this.motPasse != this.confirmPass) {
                message = 'Mot de passe differents';
            }
            return message
        }
    },
}
</script>

<style scoped>

:root {
  --blue: #39A7F6;
  --bluehover: #1787ff;
  --vert: #00973A;
}

#login
{
    height: 100vh;
    display: grid;
    grid-template-columns: 2fr 5fr;
    background-image: url('../assets/cover.jpg');
    background-blend-mode: multiply;
    background-color: rgba(0, 0, 0, 0.74);
}
#logo
{
    background: linear-gradient(to bottom, var(--blue), #00973A);
    display: block;
    border: 2px solid;
    display: flex;

}
#logo img
{
    align-self: center;
    margin-left: auto;
    margin-right: auto;
    max-width: 100px;
}
#form
{
    background-color: var(--blue);
    border: 1px solid transparent;
    box-shadow: 0px 0px 30px black;
    margin: auto;
    width: 50%;
    align-self: center;
    overflow: hidden;
}
#form form
{
    display: grid;
    grid-template-columns: 1fr;
}
#form form #gauche
{
    margin-left: auto;
    margin-right: auto;
    width: 70%; 
    padding-top: 10%;
    padding-bottom: 10%;

}
#input
{
    width: 100%;
    padding: 10px;
    display: block;
    border: 2px solid transparent;
}
#input:hover, #input:focus, #input:active
{
    border-color: var(--vert);
}
small a
{
    color: white;
}
#erreur
{
    color: white;
    font-weight: bold;
}
#soumettre
{
    width: 100%;
    padding: 10px;
    background-color: #00973A;
    font-weight: bold;
    color: white;
    border: 2px solid var(--blue);
    transition-property: all;
    transition-duration: 300ms;
}
#soumettre:hover
{
    background-color: rgb(3, 168, 3);
}

@media (max-width: 991px) {
    #login
    {
        height: 100vh;
        display: grid;
        grid-template-columns: 1fr;
    }
    #logo
    {
        display: none;
    }
    #form
    {
        width: 90%;
    }
}

</style>