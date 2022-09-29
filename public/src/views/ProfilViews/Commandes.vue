<template>
  <v-container style="margin-bottom: 100px">
    <v-breadcrumbs :items="items" style="margin-top:20px">
      <template v-slot:divider>
        <v-icon>mdi-chevron-right</v-icon>
      </template>
    </v-breadcrumbs>
    <h1 style="margin: 30px 0"><span>|</span> Mes commandes en cours</h1>
    <v-simple-table style="margin-bottom: 80px">
      <template>
        <thead style="background-color: #6b2737">
          <tr>
            <th
              style="
                color: white;
                font-size: 16px;
                font-weight: 500;
                padding: 20px;
              "
            >
              Statut
            </th>
            <th style="color: white; font-size: 16px; font-weight: 500">
              Date
            </th>
            <th style="color: white; font-size: 16px; font-weight: 500">
              Look
            </th>
            <th style="color: white; font-size: 16px; font-weight: 500">
              Articles
            </th>
            <th style="color: white; font-size: 16px; font-weight: 500">
              Prix
            </th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="commande in commandes" :key="commande.id">
            <td>{{ commande.statut }}</td>
            <td>{{ commande.date }}</td>
            <td>{{ commande.look }}</td>
            <td>{{ commande.articles }}</td>
            <td>{{ commande.prix }}</td>
          </tr>
        </tbody>
      </template>
    </v-simple-table>
    <h1 style="margin: 30px 0"><span>|</span> Mes anciennes commandes</h1>
    <v-simple-table>
      <template>
        <thead style="background-color: #6b2737">
          <tr>
            <th
              style="
                color: white;
                font-size: 16px;
                font-weight: 500;
                padding: 20px;
              "
            >
              Date
            </th>
            <th style="color: white; font-size: 16px; font-weight: 500">
              Look
            </th>
            <th style="color: white; font-size: 16px; font-weight: 500">
              Articles
            </th>
            <th style="color: white; font-size: 16px; font-weight: 500">
              Prix
            </th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="historique in historiques" :key="historique.id">
            <td>{{ historique.date }}</td>
            <td>{{ historique.look }}</td>
            <td>{{ historique.articles }}</td>
            <td>{{ historique.prix }}</td>
          </tr>
        </tbody>
      </template>
    </v-simple-table>
  </v-container>
</template>

<script>
export default {
  data() {
    return {
      items: [
        {
          text: "Home",
          disabled: false,
          href: "/",
        },
        {
          text: "Mes commandes",
          disabled: true,
          href: "Compte",
        },
      ],
      commandes: [
        {
          id: 1,
          statut: "En préparation",
          date: "06/2022",
          look: "Look Été",
          articles:
            "T-shirt manches courtes - Short boutonné en jean - Sandales plates sable",
          prix: "58 €",
        },
        {
          id: 2,
          statut: "En préparation",
          date: "06/2022",
          look: "Ensemble plage",
          articles: "Blouse courte à nouer - Jupe longue fendue",
          prix: "66,90 €",
        },
      ],
      historiques: [
        {
          id: 1,
          date: "11/2020",
          look: "Look Casual Hiver",
          articles: "Manteau à carreaux - Écharpe noire - Bonnet noir",
          prix: "98,99 €",
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