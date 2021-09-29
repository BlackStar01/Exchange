<template>
    <div id="login">
        <div id="logo">
            <img src="../assets/logo.png" alt="">
        </div>
        <div id="form">
            <form action="" method="post" v-on:submit.prevent="submit">
                <div id="gauche">  

                    <div id="img">
                        <img src="../assets/logo.png" alt="logo"> 
                    </div>

                    <input type="email" v-bind:class="{'is-invalid': validationStatus($v.mail)}" v-model.trim="$v.mail.$model" id="input" placeholder="Adresse Mail">
                    <small id="erreur" v-if="!$v.mail.required" class="invalid-feedback"> Le mail est requis *</small>
                    <small id="erreur" v-if="!$v.mail.email" class="invalid-feedback"> Le mail n'est pas valide *</small>
                    <br>

                    <input type="password" v-bind:class="{'is-invalid': validationStatus($v.motPasse)}" v-model="$v.motPasse.$model" id="input" placeholder="Mot de passe">
                    <small id="erreur" v-if="!$v.motPasse.required" class="invalid-feedback"> Le mot de passe est requis *</small>
                    <br>
                    <small id="pass_forget"><a href=""> Mot de pass oublié </a></small>

                    <br><br>
                    <a v-if="admin_is_there" id="admin_redirect" v-bind:href="redirection">Admin Page</a>
                    <button type="submit" id="soumettre"> Soumettre </button>
                    
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
            mail: '',
            motPasse: '',
            admin_is_there: false,
            redirection: '/Admin',
        }
    },
    validations: {
        mail: {required, email},
        motPasse: {required},
    },

    methods: {    
        
        resetForm: function() {
            this.mail = '';
            this.motPasse = '';
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
            else if(this.mail=="admin@admin.com" && this.motPasse=="admin")
            {
                this.admin_is_there = true;
                this.redirection = '/Admin'
            }
            else
            {
                this.$v.$reset();
                this.resetForm();
                this.admin_is_there = false;
            }
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
    background-size: cover;
    background-repeat: no-repeat;
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
    max-width: 200px;
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
#form form #gauche #img
{
    width: 150px;
    margin-left: auto;
    margin-right: auto;
}
#form form #gauche #img img
{
    width: 100%;
    padding-bottom: 30px;
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
#pass_forget
{
    float: inline-end;
}
#admin_redirect
{
    color: white;
}
#soumettre
{
    width: 100%;
    padding: 10px;
    background-color: #00973A ;
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