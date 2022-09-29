<template>
  <v-card flat>
    <v-card-text>
      <v-data-table fixed-header :headers="headers" :items="stateCategories">
        <template #header.action>
          <v-btn color="green" icon fab @click="update()">
            <v-icon>mdi-reload</v-icon>
          </v-btn>
        </template>
        <template #item.action="{ item }">
          <v-btn
            fab
            icon
            color="orange"
            @click="(edit = item.id), (dialog = true)"
          >
            <v-icon> mdi-pencil </v-icon>
          </v-btn>
          <v-btn color="red" icon fab @click="deleteItem(item)">
            <v-icon> mdi-delete </v-icon>
          </v-btn>
        </template>
      </v-data-table>
    </v-card-text>
    <v-card-actions style="justify-content: right">
      <v-btn color="primary" dark @click="dialog = true">
        Ajouter une Catégorie
      </v-btn>
    </v-card-actions>
    <AddEditCategory v-if="dialog" :dialog.sync="dialog" :edit.sync="edit" />
  </v-card>
</template>
<script>
import { mapActions, mapGetters } from "vuex";
import AddEditCategory from "./dialog/addEditCategory.vue";

export default {
  name: "Categories",
  created() {
    this.update();
  },
  data() {
    return {
      dialog: false,
      edit: null,
      headers: [
        {
          text: "Nom",
          value: "name",
        },
        {
          text: "",
          value: "action",
          sortable: false,
          width: "20%",
        },
      ],
    };
  },
  computed: {
    ...mapGetters(["stateCategories"]),
  },
  methods: {
    ...mapActions(["getCategories", "deleteCategory"]),
    async update() {
      // this.$root.$overlay.show();
      await this.getCategories();
      this.$root.$overlay.hide();
    },
    deleteItem(item) {
      this.$root
        .$confirm(
          "Suppression d'une catégorie",
          "Voulez-vous vraiment supprimer cette catégorie ?",
          { color: "red", width: 500 }
        )
        .then(async () => {
          this.$root.$overlay.show("Suppression d'une catégorie");
          try {
            await this.deleteCategory(item.id);
          } catch (e) {
            this.$root.$notif(
              "Erreur lors de la suppression, Veuillez réssayer !",
              { type: "error" }
            );
          }
          this.$root.$overlay.hide();
        })
        .catch((e) => {});
    },
  },
  components: {
    AddEditCategory,
  },
};
</script>

<style></style>
