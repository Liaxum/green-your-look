<template>
  <v-container style="text-align:center; margin-bottom: 100px;">
    <div style="display: flex; justify-content: center; margin-bottom:50px">
      <v-img
        alt="Logo"
        style="margin-top: 80px"
        contain
        :src="require('../../assets/logo/complet.png')"
        max-width="150"
      />
    </div>
    <h1>Green You Look vous remercie pour votre commande</h1>
    <h4>Vous pourrez suivre le statut de votre colis par mail</h4>
    <v-btn color="primary" to="/">Revenir à l'accueil</v-btn>
  </v-container>
</template>

<script>
export default {};
</script>

<style scoped>
h1 {
    font-size: 20px;
    font-weight: 500;
    margin-bottom: 20px;
}

h4 {
    font-size: 16px;
    font-weight: 400;
    margin-bottom: 40px;
}

</style>