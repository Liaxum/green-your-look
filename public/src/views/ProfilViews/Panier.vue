<template>
  <v-container style="margin-bottom: 50px">
    <v-breadcrumbs :items="items" style="margin-top: 20px">
      <template v-slot:divider>
        <v-icon>mdi-chevron-right</v-icon>
      </template>
    </v-breadcrumbs>
    <div style="display: flex; margin: 20px 0">
      <h1 style="margin-bottom: 30px"><span>|</span> Mon panier</h1>
      <p
        style="
          position: absolute;
          right: 0;
          margin: 35px 150px 0 0;
          font-size: 18px;
        "
      >
        2 articles
      </p>
    </div>
    <v-expansion-panels>
      <v-expansion-panel v-for="look in panier" :key="look.id">
        <v-expansion-panel-header>
          <v-img
            max-width="100px"
            style="margin-right: 30px"
            :src="require('@/assets/femmes/' + look.img + '.png')"
          ></v-img>
          {{ look.nom }} - {{ look.prix }}
        </v-expansion-panel-header>
        <v-expansion-panel-content>
          <v-list
            v-for="article in look.articles"
            :key="article.id"
            style="padding: 0"
          >
            <v-list-item-content style="display: flex; padding: 0">
              <v-card>
                <v-card-text style="padding:6px; font-size:14px; color:black"
                  >{{ article.nom }} - {{ article.details }}</v-card-text
                >
              </v-card>
            </v-list-item-content>
          </v-list>
        </v-expansion-panel-content>
      </v-expansion-panel>
    </v-expansion-panels>
    <v-row style="margin-top: 60px; text-align: center">
      <v-col cols="12" md="6" sm="12">
        <p style="font-size: 18px; font-weight: 500">Montant total : 85,90 €</p>
      </v-col>
      <!-- <v-col cols="12" md="2" sm="12">
        <v-card-subtitle style="font-size:16px; color: black">
          Code de réduction
        </v-card-subtitle>
      </v-col>
      <v-col cols="12" md="3" sm="12">
        <v-text-field
          label="Saisissez votre code"
          solo
          style="max-width: 100%"
        ></v-text-field>
      </v-col> -->
      <v-col cols="12" md="6" sm="12">
        <v-btn to="/Commander" color="primary">Commander</v-btn>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
export default {
  name: "Panier",
  data() {
    return {
      items: [
        {
          text: "Home",
          disabled: false,
          href: "/",
        },
        {
          text: "Mon panier",
          disabled: true,
          href: "Favoris",
        },
      ],
      panier: [
        {
          id: 1,
          nom: "Look Été",
          img: "ete",
          prix: "36 €",
          articles: [
            {
              nom: "T-shirt manches courtes",
              details: "Taille S - 6 €",
            },
            {
              nom: "Short boutonné en jean denim",
              details: "Taille S - 14 €",
            },
            {
              nom: "Sandales plates zippées sable",
              details: "Taille 41 - 16 €",
            },
          ],
        },
        {
          id: 2,
          nom: "Ensemble plage",
          img: "plage",
          prix: "49,90 €",
          articles: [
            {
              nom: "Blouse courte à nouer",
              details: "Taille M - 21,40 €",
            },
            {
              nom: "Jupe longue fendue",
              details: "Taille M - 28,50 €",
            },
            {
              nom: "Sac bohème en paille",
              details: "Diamètre 20cm - 20 €",
            },
          ],
        },
      ],
    };
  },
};
</script>

<style scoped>
h1 {
  font-size: 20px;
  color: #6b2737;
}
</style>