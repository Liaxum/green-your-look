<template>
  <v-container>
    <v-row align="center">
      <v-col
        cols="12"
        md="3"
        sm="6"
        xs="12"
        v-for="(look, l) in looks"
        :key="l"
      >
        <v-card max-width="220" @click.stop="dialog = true" :id="look.id">
          <v-img alt="look" :src="require(`@/assets/${img}`)"></v-img>
          <v-card-title style="font-weight: 400">
            {{ look.name }} <v-spacer></v-spacer> <span>{{ look.price }}</span>
          </v-card-title>
          <v-divider></v-divider>
          <v-item-group style="display: flex; justify-content: center">
            <v-item v-for="(lab, i) in look.label" :key="i" class="mx-2 my-4">
              <v-img
                :src="require('@/assets/icons/' + lab + '.png')"
                alt="bio"
                max-width="30"
              ></v-img>
            </v-item>
          </v-item-group>
        </v-card>
        <v-dialog
          v-model="dialog"
          max-width="1000"
          hide-overlay
          :retain-focus="false"
          persistent
        >
          <v-card max-width="1000" style="font-weight: 400">
            <v-card-actions>
              <v-card-title> Look </v-card-title> <v-spacer></v-spacer>
              <v-btn color="primary" icon fab @click="dialog = false">
                <v-icon>mdi-close</v-icon>
              </v-btn>
            </v-card-actions>
            <v-row>
              <v-col cols="12" md="4" sm="12" xs="12">
                <v-img
                  style="margin: 0 30px 30px 30px"
                  max-width="400px"
                  :src="require(`@/assets/${img}`)"
                  alt="look"
                ></v-img>
              </v-col>
              <v-col cols="12" md="7" sm="12" xs="12">
                <item-card :img="img" :look="look" /> <v-spacer></v-spacer>
              </v-col>
            </v-row>
            <v-card-actions>
              <v-spacer></v-spacer>
              <v-btn
                style="margin: 20px 10px 20px 0"
                large
                outlined
                color="primary"
              >
                Ajouter aux favoris
              </v-btn>
              <v-btn
                style="margin: 20px 10px 20px 0"
                large
                outlined
                color="primary"
              >
                Ajouter au panier
              </v-btn>
            </v-card-actions>
          </v-card>
        </v-dialog>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
import ItemCard from "./ItemCard.vue";
export default {
  name: "LookCard",
  data() {
    return {
      dialog: false,
      looks: [
        {
          id: 1,
          name: "Look 1",
          img: "",
          price: "36 €",
          label: ["bio", "recycle"],
          items: [
            {
              name: "Kimono coloré",
              price: "14€",
              img: "kimono",
            },
            {
              name: "T-shirt gris",
              price: "5€",
              img: "tshirt",
            },
            {
              name: "Jean denim",
              price: "11€",
              img: "jean",
            },
            {
              name: "Lunettes de soleil",
              price: "6€",
              img: "lunettes",
            },
          ],
        },
        {
          id: 2,
          name: "Look 2",
          img: "",
          price: "36 €",
          label: ["bio", "europe", "vegan"],
          items: [
            {
              name: "Kimono coloré",
              price: "14€",
              img: "kimono",
            },
            {
              name: "T-shirt gris",
              price: "5€",
              img: "tshirt",
            },
            {
              name: "Jean denim",
              price: "11€",
              img: "jean",
            },
            {
              name: "Lunettes de soleil",
              price: "6€",
              img: "lunettes",
            },
          ],
        },
        {
          id: 3,
          name: "Look 3",
          img: "",
          price: "36 €",
          label: ["bio"],
          items: [
            {
              name: "Kimono coloré",
              price: "14€",
              img: "kimono",
            },
            {
              name: "T-shirt gris",
              price: "5€",
              img: "tshirt",
            },
            {
              name: "Jean denim",
              price: "11€",
              img: "jean",
            },
            {
              name: "Lunettes de soleil",
              price: "6€",
              img: "lunettes",
            },
          ],
        },
        {
          id: 4,
          name: "Look 4",
          img: "",
          price: "36 €",
          label: ["bio", "recycle"],
          items: [
            {
              name: "Kimono coloré",
              price: "14€",
              img: "kimono",
            },
            {
              name: "T-shirt gris",
              price: "5€",
              img: "tshirt",
            },
            {
              name: "Jean denim",
              price: "11€",
              img: "jean",
            },
            {
              name: "Lunettes de soleil",
              price: "6€",
              img: "lunettes",
            },
          ],
        },
        {
          id: 5,
          name: "Look 5",
          img: "",
          price: "36 €",
          label: ["bio", "recycle"],
          items: [
            {
              name: "Kimono coloré",
              price: "14€",
              img: "kimono",
            },
            {
              name: "T-shirt gris",
              price: "5€",
              img: "tshirt",
            },
            {
              name: "Jean denim",
              price: "11€",
              img: "jean",
            },
            {
              name: "Lunettes de soleil",
              price: "6€",
              img: "lunettes",
            },
          ],
        },
        {
          id: 6,
          name: "Look 6",
          img: "",
          price: "36 €",
          label: ["bio", "europe", "vegan"],
          items: [
            {
              name: "Kimono coloré",
              price: "14€",
              img: "kimono",
            },
            {
              name: "T-shirt gris",
              price: "5€",
              img: "tshirt",
            },
            {
              name: "Jean denim",
              price: "11€",
              img: "jean",
            },
            {
              name: "Lunettes de soleil",
              price: "6€",
              img: "lunettes",
            },
          ],
        },
        {
          id: 7,
          name: "Look 7",
          img: "",
          price: "36 €",
          label: ["bio"],
          items: [
            {
              name: "Kimono coloré",
              price: "14€",
              img: "kimono",
            },
            {
              name: "T-shirt gris",
              price: "5€",
              img: "tshirt",
            },
            {
              name: "Jean denim",
              price: "11€",
              img: "jean",
            },
            {
              name: "Lunettes de soleil",
              price: "6€",
              img: "lunettes",
            },
          ],
        },
        {
          id: 8,
          name: "Look 8",
          img: "",
          price: "36 €",
          label: ["bio", "recycle"],
          items: [
            {
              name: "Kimono coloré",
              price: "14€",
              img: "kimono",
            },
            {
              name: "T-shirt gris",
              price: "5€",
              img: "tshirt",
            },
            {
              name: "Jean denim",
              price: "11€",
              img: "jean",
            },
            {
              name: "Lunettes de soleil",
              price: "6€",
              img: "lunettes",
            },
          ],
        },
      ],
    };
  },
  computed: {
    cat() {
      return this.$route.params.type.toLowerCase();
    },
    sty() {
      return this.$route.params.style.toLowerCase();
    },
    img() {
      return `${this.cat}/${this.sty}.png`;
    },
  },
  components: {
    ItemCard,
  },
};
</script>

<style scoped></style>
