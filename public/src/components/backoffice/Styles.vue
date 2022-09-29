<template>
  <v-card flat>
    <v-card-text>
      <v-data-table fixed-header :headers="headers" :items="stateStyles">
        <template #header.action>
          <v-btn color="green" icon fab @click="update()">
            <v-icon>mdi-reload</v-icon>
          </v-btn>
        </template>
        <template #item.action="{ item }">
          <v-btn fab icon color="orange">
            <v-icon> mdi-pencil </v-icon>
          </v-btn>
          <v-btn icon flab color="red" @click="deleteItem(item)">
            <v-icon> mdi-delete </v-icon>
          </v-btn>
        </template>
      </v-data-table>
    </v-card-text>
    <v-card-actions style="justify-content: right">
      <v-spacer />
      <v-btn color="primary" @click="dialog = true"> Ajouter un style </v-btn>
    </v-card-actions>
    <AddEditStyle v-if="dialog" :dialog.sync="dialog" :edit.sync="edit" />
  </v-card>
</template>

<script>
import { mapActions, mapGetters } from "vuex";
import AddEditStyle from "./dialog/addEditStyle.vue";
export default {
  name: "Styles",
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
    ...mapGetters(["stateStyles"]),
  },
  methods: {
    ...mapActions(["getStyles", "deleteStyle"]),
    async update() {
      // this.$root.$overlay.show();
      await this.getStyles();
      this.$root.$overlay.hide();
    },
    deleteItem(item) {
      this.$root
        .$confirm(
          "Suppression d'un Styles",
          "Voulez-vous vraiment supprimer ce style ?",
          {
            color: "red",
            width: 500,
          }
        )
        .then(async () => {
          this.$root.$overlay.show("Suppression d'un style");
          try {
            await this.deleteStyle(item.id);
          } catch (e) {
            this.$root.$notif(
              "Erreur lors de la suppression, Veuillez réssayer !",
              {
                type: "error",
              }
            );
          }
          this.$root.$overlay.hide();
        })
        .catch((e) => {});
    },
  },
  components: {
    AddEditStyle,
  },
};
</script>

<style></style>
