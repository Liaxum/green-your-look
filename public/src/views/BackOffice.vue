<template>
  <v-card width="100%" class="ma-5">
    <v-toolbar color="primary" dark>
      <v-toolbar-title>BackOffice</v-toolbar-title>
    </v-toolbar>
    <v-card-text>
      <v-tabs v-model="tab">
        <v-tab href="#tab-1"> Catégories </v-tab>
        <v-tab href="#tab-2"> Styles </v-tab>
        <v-tab href="#tab-3"> Looks </v-tab>
        <v-tab href="#tab-4"> Produits </v-tab>
        <v-tab href="#tab-5"> Comptes Clients </v-tab>
        <v-tab href="#tab-6"> Comptes Admin </v-tab>
      </v-tabs>

      <v-tabs-items v-model="tab">
        <v-tab-item value="tab-1"> <Categories /> </v-tab-item>
        <v-tab-item value="tab-2"> <Styles /> </v-tab-item>
        <v-tab-item value="tab-3"> <Looks /> </v-tab-item>
        <v-tab-item value="tab-4"> <Products /> </v-tab-item>
        <v-tab-item value="tab-5"> <Users :admin="false" /> </v-tab-item>
        <v-tab-item value="tab-6"> <Users :admin="true" /> </v-tab-item>
      </v-tabs-items>
    </v-card-text>
  </v-card>
</template>

<script>
import Categories from "../components/backoffice/Categories.vue";
import Looks from "../components/backoffice/Looks.vue";
import Products from "../components/backoffice/Products.vue";
import Styles from "../components/backoffice/Styles.vue";
import Users from "../components/backoffice/Users.vue";

export default {
  name: "BackOffice",
  data() {
    return {
      tab: null,
    };
  },
  components: {
    Categories,
    Looks,
    Products,
    Styles,
    Users,
  },
};
</script>

<style></style>
