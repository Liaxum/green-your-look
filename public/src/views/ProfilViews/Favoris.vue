<template>
  <v-container style="margin-bottom: 100px">
    <v-breadcrumbs :items="items" style="margin-top: 20px">
      <template v-slot:divider>
        <v-icon>mdi-chevron-right</v-icon>
      </template>
    </v-breadcrumbs>
    <h1 style="margin: 30px 0"><span>|</span> Mes favoris</h1>
    <v-simple-table style="margin-bottom: 80px">
      <template>
        <thead style="background-color: #6b2737">
          <tr>
            <th style="color: white; font-size: 16px; font-weight: 500">
              Look
            </th>
            <th style="color: white; font-size: 16px; font-weight: 500">
              Articles
            </th>
            <th style="color: white; font-size: 16px; font-weight: 500">
              Prix
            </th>
            <th
              rowspan="2"
              style="color: white; font-size: 16px; font-weight: 500"
            >
              Panier
            </th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="fav in favoris" :key="fav.id">
            <td>{{ fav.look }}</td>
            <td>{{ fav.articles }}</td>
            <td>{{ fav.prix }}</td>
            <td><v-btn small> Ajouter</v-btn></td>
          </tr>
        </tbody>
      </template>
    </v-simple-table>
  </v-container>
</template>

<script>
export default {
  name: "Favoris",
  data() {
    return {
      items: [
        {
          text: "Home",
          disabled: false,
          href: "/",
        },
        {
          text: "Mes favoris",
          disabled: true,
          href: "Favoris",
        },
      ],
      favoris: [
        {
          id: 1,
          look: "Look Automne",
          articles: "Chemise grise - Pantalon large - Chaussures en cuir",
          prix: "42 €",
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