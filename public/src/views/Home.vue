<template>
  <div style="width: 100%">
    <v-banner color="primary" class="text-center" max-height="150">
      Chez Green Your Look, nous mettons en avant des marques respectueuses de
      l'environnement
    </v-banner>
    <v-carousel
      class="carousel"
      cycle
      interval="3000"
      show-arrows-on-hover
      hide-delimiters
    >
      <template v-for="(item, index) in slider">
        <v-carousel-item
          style="position: relative"
          v-if="(index + 1) % columns === 1 || columns === 1"
          :key="index"
        >
          <v-row class="flex-nowrap" style="height: 100%">
            <template v-for="(n, i) in columns">
              <template v-if="+index + i < slider.length">
                <v-col :key="i">
                  <v-row
                    v-if="+index + i < slider.length"
                    height="100%"
                    class="fill-height"
                    align="center"
                    justify="center"
                  >
                    <v-img
                      :src="require('../assets/' + slider[+index + i] + '.png')"
                      style="width: 10px; height: 120%"
                    />
                  </v-row>
                </v-col>
              </template>
            </template>
          </v-row>
          <div style="position: absolute; bottom: 0; left: 0; right: 0">
            <v-img
              src="../assets/logo/carre.png"
              max-width="150"
              style="display: block; margin: auto; margin-bottom: 15px"
            ></v-img>
            <v-banner color="primary" class="text-center">
              Découvrez des looks stylés et éco-responsables</v-banner
            >
          </div>
        </v-carousel-item>
      </template>
    </v-carousel>
    <div style="margin: 50px 0 100px 0">
      <h1>NOUVEAUTÉS</h1>
      <h4>Découvrez les dernières nouveautés Green Your Look !</h4>
      <v-row align="center" class="center">
        <v-col cols="12" md="3" sm="12" class="center">
          <v-card max-width="300">
            <v-img src="../assets/femmes/feminin.png"></v-img>
            <v-card-title class="center">LOOK ÉTÉ</v-card-title>
          </v-card>
        </v-col>
        <v-col cols="12" md="3" sm="12" class="center">
          <v-card max-width="300">
            <v-img src="../assets/hommes/boheme.png"></v-img>
            <v-card-title class="center">BOHÈME</v-card-title>
          </v-card>
        </v-col>
        <v-col cols="12" md="3" sm="12" class="center">
          <v-card max-width="300">
            <v-img src="../assets/femmes/vintage.png"></v-img>
            <v-card-title class="center">VINTAGE</v-card-title>
          </v-card>
        </v-col>
      </v-row>
    </div>
    <div style="padding: 50px 0; background-color: #f8f0df">
      <h1>NOS VALEURS</h1>
      <h4>Découvrez nos valeurs et nos critères de sélection des articles</h4>
      <v-row align="center" class="center my-5">
        <v-col cols="4" md="1" sm="2" class="center">
          <v-img max-width="70" src="../assets/icons/vegan.png"></v-img>
        </v-col>
        <v-col cols="4" md="1" sm="2" class="center">
          <v-img max-width="70" src="../assets/icons/recycle.png"></v-img>
        </v-col>
        <v-col cols="4" md="1" sm="2" class="center">
          <v-img max-width="70" src="../assets/icons/bio.png"></v-img>
        </v-col>
        <v-col cols="4" md="1" sm="2" class="center">
          <v-img max-width="70" src="../assets/icons/europe.png"></v-img>
        </v-col>
      </v-row>
      <div class="text-center" style="margin: 30px 0">
        <v-btn color="primary" to="/Identite"
          >Découvrir Green Your Look</v-btn
        >
      </div>
    </div>
    <div style="margin: 100px 0">
      <h1>INSCRIPTION NEWSLETTER</h1>
      <h4>
        Inscrivez-vous à notre newsletter pour être au courant des nouveautés et
        des promos !
      </h4>
      <v-row justify="center" class="my-5" no-gutters>
        <v-col cols="6" lg="3" sm="4">
          <v-text-field
            label="Adresse email"
            dense
            filled
            color="primary"
          ></v-text-field>
        </v-col>
        <v-col cols="6" lg="1" sm="2">
          <v-btn
            style="margin-left: 10px; height: 53px"
            color="primary"
            small
            outlined
            elevation="8"
            >S'inscrire</v-btn
          >
        </v-col>
      </v-row>
      <p>
        En renseignant votre adresse email, vous acceptez de recevoir nos offres
        commerciales par courrier électronique et vous prenez connaissance de
        notre <a href="">politique de confidentialité</a>.
        <br />
        Vous pouvez vous désinscrire à tout moment à l'aide des liens de
        désinscription ou en nous contactant à l'adresse
        greenyourlook@gmail.com.
      </p>
    </div>
  </div>
</template>

<script>
export default {
  name: "Home",

  components: {},

  data() {
    return {
      slider: [
        "femmes/basique",
        "hommes/casual",
        "femmes/boheme",
        "hommes/chic",
        "femmes/chic",
        "hommes/streetwear",
        "femmes/gothique",
        "hommes/vintage",
      ],
    };
  },

  computed: {
    columns() {
      if (this.$vuetify.breakpoint.lg) {
        return 4;
      }
      if (this.$vuetify.breakpoint.md) {
        return 2;
      }
      if (this.$vuetify.breakpoint.sm) {
        return 2;
      }
      return 1;
    },
  },
};
</script>

<style scoped>
h1,
h4,
p {
  text-align: center;
}

h1 {
  font-size: 22px;
  font-weight: 600;
  color: #79b4b7;
}

h4 {
  margin: 30px 0;
  font-size: 18px;
  font-weight: 400;
}

.v-banner {
  font-size: 18px;
  color: white;
}

.center {
  display: flex;
  justify-content: center;
}

p {
  font-size: 12px;
  font-weight: 300;
  font-style: italic;
}
</style>