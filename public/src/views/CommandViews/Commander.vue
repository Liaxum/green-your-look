<template>
  <v-container style="margin-bottom: 100px">
    <v-breadcrumbs :items="items" style="margin-top: 20px">
      <template v-slot:divider>
        <v-icon>mdi-chevron-right</v-icon>
      </template>
    </v-breadcrumbs>
    <v-stepper v-model="e1">
      <v-stepper-header>
        <v-stepper-step :complete="e1 > 1" step="1" @click="e1 = 1">Livraison</v-stepper-step>
        <v-divider></v-divider>
        <v-stepper-step :complete="e1 > 2" step="2" @click="e1 = 2">Paiement</v-stepper-step>
      </v-stepper-header>
      <v-stepper-items>
        <v-stepper-content step="1" style="margin-bottom: 50px">
          <v-card>
            <v-card-title style="margin-left: 80px"
              >Vos informations</v-card-title
            >
            <v-row align="center" justify="center">
              <v-col cols="12" md="3">
                <v-text-field label="Nom"></v-text-field>
              </v-col>
              <v-col cols="12" md="3">
                <v-text-field label="Prénom"></v-text-field>
              </v-col>
              <v-col cols="12" md="4">
                <v-text-field label="Email"></v-text-field>
              </v-col>
            </v-row>
            <v-card-title style="margin-left: 80px"
              >Vos coordonnées</v-card-title
            >
            <v-row align="center" justify="center">
              <v-col cols="12" md="5">
                <v-text-field label="Pays"></v-text-field>
              </v-col>
              <v-col cols="12" md="5">
                <v-text-field label="Rue"></v-text-field>
              </v-col>
              <v-col cols="12" md="5">
                <v-text-field label="Code postal"></v-text-field>
              </v-col>
              <v-col cols="12" md="5">
                <v-text-field label="Ville"></v-text-field>
              </v-col>
            </v-row>
          </v-card>
          <v-btn absolute right color="primary" @click="e1 = 2">
            Continue
          </v-btn>
        </v-stepper-content>
        <v-stepper-content step="2">
          <v-card-title>Mode de paiement</v-card-title>
          <v-expansion-panels style="margin-bottom: 50px">
            <v-row>
              <v-col cols="12" md="6">
                <v-expansion-panel>
                  <v-expansion-panel-header>
                    Carte bleue
                  </v-expansion-panel-header>
                  <v-expansion-panel-content>
                    <v-row align="center" justify="center">
                      <v-col cols="12" md="6">
                        <v-text-field label="Prénom Nom"></v-text-field>
                      </v-col>
                      <v-col cols="12" md="6">
                        <v-text-field label="Date d'expiration"></v-text-field>
                      </v-col>
                      <v-col cols="12" md="8">
                        <v-text-field label="Numéro de la carte"></v-text-field>
                      </v-col>
                      <v-col cols="12" md="4">
                        <v-text-field label="CVC"></v-text-field>
                      </v-col>
                    </v-row>
                  </v-expansion-panel-content>
                </v-expansion-panel>
              </v-col>
              <v-col cols="12" md="6">
                <v-expansion-panel>
                  <v-expansion-panel-header> Paypal </v-expansion-panel-header>
                  <v-expansion-panel-content>
                    <v-text-field label="Email"></v-text-field>
                    <v-text-field label="Mot de passe"></v-text-field>
                  </v-expansion-panel-content>
                </v-expansion-panel>
              </v-col>
            </v-row>
          </v-expansion-panels>
          <v-btn text @click="e1 = 1"> Retour </v-btn>
          <v-btn color="primary" to="/Message"> Payer </v-btn>
        </v-stepper-content>
      </v-stepper-items>
    </v-stepper>
  </v-container>
</template>

<script>
export default {
  name: "Commander",
  data() {
    return {
      e1: 1,
      items: [
        {
          text: "Home",
          disabled: false,
          href: "/",
        },
        {
          text: "Panier",
          disabled: false,
          href: "/Panier",
        },
        {
          text: "Commander",
          disabled: true,
          href: "Favoris",
        },
      ],
    };
  },
};
</script>

<style>
</style>