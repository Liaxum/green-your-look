<template>
  <div>
    <v-app-bar height="80px" app color="secondary">
      <v-app-bar-nav-icon
        class="d-md-none mt-0"
        @click="menu = true"
      ></v-app-bar-nav-icon>
      <v-tabs color="primary" class="d-md-none">
        <v-tab to="/"
          ><v-img
            alt="Logo"
            class="logo"
            contain
            :src="require('../../assets/logo/texte.png')"
            width="150"
          />
        </v-tab>
      </v-tabs>

      <v-tabs color="primary" class="d-none d-md-block">
        <v-tab to="/"
          ><v-img
            alt="Logo"
            class="logo"
            contain
            :src="require('../../assets/logo/texte.png')"
            width="150"
          />
        </v-tab>
        <v-tab id="femmes" to="/Femmes">OUTFITS FEMMES </v-tab>
        <v-tab to="/Hommes">OUTFITS HOMMES</v-tab>
        <v-tab to="/Blog" class="mr-5">LE BLOG</v-tab>
        <!-- <v-text-field
          prepend-inner-icon="mdi-magnify"
          clearable
          solo
          class="mx-4 mt-3"
        ></v-text-field> -->
        <v-spacer></v-spacer>
        <v-menu close-on-click offset-y>
          <template v-slot:activator="{ on, attrs }">
            <v-btn id="account" icon v-bind="attrs" v-on="on">
              <v-icon color="black">mdi-account</v-icon>
            </v-btn>
          </template>
          <v-list class="text-center">
            <v-list-item
              @click="login"
              class="pb-2"
              style="border-bottom: solid 1px black"
              id="login"
            >
              <v-list-item-title> Connexion / Inscription </v-list-item-title>
            </v-list-item>
            <v-list-item
              to="/Compte"
              class="py-2"
              style="border-bottom: solid 1px black"
            >
              <v-list-item-title> Mon compte </v-list-item-title>
            </v-list-item>
            <v-list-item
              to="/Commandes"
              class="py-2"
              style="border-bottom: solid 1px black"
            >
              <v-list-item-title> Mes commandes</v-list-item-title>
            </v-list-item>
            <v-list-item class="pt-2" to="/Favoris">
              <v-list-item-title> Mes favoris</v-list-item-title>
            </v-list-item>
          </v-list>
        </v-menu>
        <v-btn icon to="/Favoris"
          ><v-icon color="black">mdi-cards-heart</v-icon></v-btn
        >
        <v-menu offset-y nudge-width="300">
          <template v-slot:activator="{ on, attrs }">
            <v-btn icon v-bind="attrs" v-on="on"
              ><v-icon color="black">mdi-cart</v-icon></v-btn
            >
          </template>
          <v-card class="panier">
            <v-card-title
              >Mon panier
              <span style="position: absolute; right: 0; padding: 20px"
                >2 articles</span
              >
            </v-card-title>
            <v-divider></v-divider>
            <v-row v-for="look in panier" :key="look.id" style="margin: 0">
              <v-col cols="12" md="4">
                <v-img
                  max-width="80px"
                  style="margin-right: 30px"
                  :src="require('@/assets/femmes/' + look.img + '.png')"
                ></v-img>
              </v-col>
              <v-col cols="12" md="4">
                <v-card-title style="font-size: 16px">{{
                  look.nom
                }}</v-card-title>
              </v-col>
              <v-col cols="12" md="4">
                <v-card-title style="font-size: 16px">{{
                  look.prix
                }}</v-card-title>
              </v-col>
            </v-row>
            <v-divider></v-divider>
            <v-card-subtitle style="color: black">
              Code de réduction ou bon d'achat
            </v-card-subtitle>
            <v-text-field
              label="Saisissez votre code"
              solo
              style="max-width: 80%; margin-left: 15px"
            ></v-text-field>
            <v-divider></v-divider>
            <v-card-title style="font-size: 16px"
              >Montant total
              <span style="position: absolute; right: 0; padding: 20px"
                >85,90€</span
              ></v-card-title
            >
            <v-card-actions style="background-color: #6b2737">
              <v-btn
                depressed
                x-large
                tile
                color="primary"
                to="/Panier"
                class="mt-0"
                >Voir mon panier</v-btn
              >
              <v-btn
                depressed
                x-large
                tile
                color="primary"
                to="/Commander"
                class="mt-0 mr-2"
                >Commander</v-btn
              >
            </v-card-actions>
          </v-card>
        </v-menu>
      </v-tabs>
    </v-app-bar>

    <v-navigation-drawer
      fixed
      left
      clipped
      app
      v-model="menu"
      temporary
      color="secondary"
    >
      <v-list nav>
        <v-list-item-group active-class="primary--text text--accent-4">
          <v-img
            alt="Logo"
            class="logo-complet"
            contain
            :src="require('../../assets/logo/complet.png')"
            width="150"
          />

          <!-- <v-text-field
            prepend-inner-icon="mdi-magnify"
            clearable
            solo
            class="mx-4 mt-2"
          ></v-text-field> -->

          <v-divider></v-divider>

          <v-list-item class="my-2 text-center" @click="login">
            <v-list-item-title>Connexion / Inscription</v-list-item-title>
          </v-list-item>

          <v-divider></v-divider>

          <v-list-item class="mt-3 mb-0 text-center" to="/Femmes">
            <v-list-item-title>OUTFITS FEMMES</v-list-item-title>
          </v-list-item>

          <v-list-item class="mb-3 text-center" to="/Hommes">
            <v-list-item-title>OUTFITS HOMMES</v-list-item-title>
          </v-list-item>

          <v-divider></v-divider>

          <v-list-item class="mt-3 ml-2" to="/Compte">
            <v-list-item-icon class="mr-4">
              <v-icon color="black">mdi-account</v-icon>
            </v-list-item-icon>
            <v-list-item-content>
              <v-list-item-title class="ml-2 mt-1"
                >MON COMPTE</v-list-item-title
              >
            </v-list-item-content>
          </v-list-item>

          <v-list-item class="ml-2" to="/Panier">
            <v-list-item-icon class="mr-4">
              <v-icon color="black">mdi-cart</v-icon>
            </v-list-item-icon>
            <v-list-item-content>
              <v-list-item-title class="ml-2 mt-1"
                >MON PANIER</v-list-item-title
              >
            </v-list-item-content>
          </v-list-item>

          <v-list-item class="ml-2" to="/Commandes">
            <v-list-item-icon class="mr-4">
              <v-icon color="black">mdi-shopping</v-icon>
            </v-list-item-icon>
            <v-list-item-content>
              <v-list-item-title class="ml-2 mt-1"
                >MES COMMANDES</v-list-item-title
              >
            </v-list-item-content>
          </v-list-item>

          <v-list-item class="ml-2" to="/Favoris">
            <v-list-item-icon class="mr-4">
              <v-icon color="black">mdi-cards-heart</v-icon>
            </v-list-item-icon>
            <v-list-item-content>
              <v-list-item-title class="ml-2 mt-1"
                >MES FAVORIS</v-list-item-title
              >
            </v-list-item-content>
          </v-list-item>
        </v-list-item-group>
      </v-list>
    </v-navigation-drawer>
  </div>
</template>

<script>
import { mapActions } from "vuex";

export default {
  name: "AppHeader",
  mounted() {
    this.render();
  },
  data() {
    return {
      menu: false,
      loading: true,
      categorie: null,
      panier: [
        {
          id: 1,
          nom: "Look Été",
          img: "ete",
          prix: "36 €",
        },
        {
          id: 2,
          nom: "Ensemble plage",
          img: "plage",
          prix: "49,90 €",
        },
      ],
    };
  },
  methods: {
    ...mapActions(["getCategories"]),
    login() {
      this.$root.$loginRegister();
    },
    categories() {
      this.getCategories()
        .then((response) => response.data)
        .then((response) => {
          this.categorie = response;
        })
        .catch((error) => console.log(error))
        .finally(() => (this.loading = false));
    },
    render() {
      this.categories();
    },
  },
};
</script>

<style scoped>
.logo {
  margin-left: 30px;
  margin-right: 60px;
}

.logo-complet {
  display: block;
  margin: auto;
  margin-top: 10px;
  margin-bottom: 20px;
}

.v-btn {
  margin-top: 15px;
  margin-right: 10px;
}

.panier {
  background-color: white;
}

.panier .v-subheader {
  font-size: 18px;
  color: black;
  padding-top: 30px;
  padding-bottom: 30px;
}
</style>
