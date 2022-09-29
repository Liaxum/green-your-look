<template>
  <v-container class="mb-5">
    <h1>Bienvenue sur notre Blog !</h1>
    <v-row align="center">
      <v-col cols="12" md="4" sm="12" v-for="(article, a) in articles" :key="a">
        <v-card width="400px">
          <v-img
            max-width="400px"
            :src="require('@/assets/blog/' + article.img + '.png')"
            :alt="article.img"
          ></v-img>
          <v-card-title style="justify-content: center; font-weight: 400">{{
            article.title
          }}</v-card-title>
        </v-card>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
export default {
  name: "Blog",
  data() {
    return {
      articles: [
        {
          title: "Femmes - Top 10 des looks été",
          img: "look-ete",
          content: "content",
        },
        {
          title: "Bien s'habiller : conseils et astuces",
          img: "conseils",
          content: "content",
        },
        {
          title: "Acheter écolo à petit prix !",
          img: "ecolo",
          content: "content",
        },
        {
          title: "3 matières éco-responsables",
          img: "matieres",
          content: "content",
        },
        {
          title: "Femmes - Top 3 des looks automne",
          img: "femme-automne",
          content: "content",
        },
        {
          title: "La mode éthique expliquée",
          img: "ethique",
          content: "content",
        },
      ],
    };
  },
};
</script>

<style scoped>
h1 {
  font-weight: 500;
  font-size: 30px;
  text-align: center;
  margin: 40px 0;
}
</style>