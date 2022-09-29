<template>
  <v-container>
    <div style="display: flex; margin: 20px">
      <v-breadcrumbs :items="items">
        <template v-slot:divider>
          <v-icon>mdi-chevron-right</v-icon>
        </template>
      </v-breadcrumbs>
    </div>
    <v-btn color="primary" outlined style="margin-bottom:20px"> Déconnexion </v-btn>
    <v-tabs
      class="d-none d-md-flex"
      vertical
      height="200px"
      style="margin-top: 50px"
    >
      <v-card flat width="200px">
        <v-tab style="margin: 10px 0">Informations</v-tab>
        <v-tab style="margin: 10px 0">Notifications</v-tab>
      </v-card>
      <v-tab-item>
        <v-card flat>
          <v-form v-model="valid" style="margin-bottom: 50px">
            <v-container>
              <v-row>
                <v-col cols="12" md="4">
                  <v-text-field
                    v-model="prenom"
                    label="Prénom"
                    required
                  ></v-text-field>
                </v-col>
                <v-col cols="12" md="4">
                  <v-text-field
                    v-model="nom"
                    label="Nom"
                    required
                  ></v-text-field>
                </v-col>
                <v-col cols="12" md="4">
                  <v-text-field
                    v-model="email"
                    label="E-mail"
                    required
                  ></v-text-field>
                </v-col>
              </v-row>
              <v-row>
                <v-col cols="12" md="4">
                  <v-menu
                    ref="menu"
                    v-model="menu"
                    :close-on-content-click="false"
                    :return-value.sync="date"
                    transition="scale-transition"
                    offset-y
                    min-width="auto"
                  >
                    <template v-slot:activator="{ on, attrs }">
                      <v-text-field
                        v-model="date"
                        label="Date de naissance"
                        readonly
                        v-bind="attrs"
                        v-on="on"
                      ></v-text-field>
                    </template>
                    <v-date-picker v-model="date" no-title scrollable>
                      <v-spacer></v-spacer>
                      <v-btn text color="primary" @click="menu = false">
                        Cancel
                      </v-btn>
                      <v-btn
                        text
                        color="primary"
                        @click="$refs.menu.save(date)"
                      >
                        OK
                      </v-btn>
                    </v-date-picker>
                  </v-menu>
                </v-col>
                <v-col cols="12" md="4">
                  <v-text-field
                    v-model="password"
                    :type="show ? 'text' : 'password'"
                    :append-icon="show ? 'mdi-eye' : 'mdi-eye-off'"
                    @click:append="show = !show"
                    label="Mot de passe"
                    required
                  ></v-text-field>
                </v-col>
                <v-col cols="12" md="4">
                  <v-text-field
                    v-model="password"
                    :type="show2 ? 'text' : 'password'"
                    :append-icon="show2 ? 'mdi-eye' : 'mdi-eye-off'"
                    @click:append="show2 = !show2"
                    label="Confirmation mot de passe"
                    required
                  ></v-text-field>
                </v-col>
              </v-row>
            </v-container>
            <v-btn color="primary" outlined absolute right> Modifier </v-btn>
          </v-form>
        </v-card>
      </v-tab-item>
      <v-tab-item>
        <v-card flat>
          <v-list style="margin-left: 50px">
            <v-list-item-group>
              <v-list-item v-for="(notif, i) in notifications" :key="i">
                <template v-slot:default="{ active }">
                  <v-list-item-action>
                    <v-checkbox :input-value="active"></v-checkbox>
                  </v-list-item-action>
                  <v-list-item-content>
                    <v-list-item-title> {{ notif }} </v-list-item-title>
                  </v-list-item-content>
                </template>
              </v-list-item>
            </v-list-item-group>
          </v-list>
        </v-card>
      </v-tab-item>
    </v-tabs>
    <v-tabs class="d-flex d-md-none" v-model="tab">
      <v-tab>Informations</v-tab>
      <v-tab>Notifications</v-tab>
    </v-tabs>
    <v-tabs-items class="d-block d-md-none" v-model="tab">
      <v-tab-item style="margin-bottom: 50px">
        <v-card flat>
          <v-form v-model="valid" style="margin: 30px 0">
            <v-container>
              <v-text-field
                v-model="prenom"
                label="Prénom"
                required
              ></v-text-field>
              <v-text-field v-model="nom" label="Nom" required></v-text-field>

              <v-text-field
                v-model="email"
                label="E-mail"
                required
              ></v-text-field>
              <v-menu
                ref="menu"
                v-model="menu"
                :close-on-content-click="false"
                :return-value.sync="date"
                transition="scale-transition"
                offset-y
                min-width="auto"
              >
                <template v-slot:activator="{ on, attrs }">
                  <v-text-field
                    v-model="date"
                    label="Date de naissance"
                    readonly
                    v-bind="attrs"
                    v-on="on"
                  ></v-text-field>
                </template>
                <v-date-picker v-model="date" no-title scrollable>
                  <v-spacer></v-spacer>
                  <v-btn text color="primary" @click="menu = false">
                    Cancel
                  </v-btn>
                  <v-btn text color="primary" @click="$refs.menu.save(date)">
                    OK
                  </v-btn>
                </v-date-picker>
              </v-menu>
              <v-text-field
                v-model="password"
                :type="show ? 'text' : 'password'"
                :append-icon="show ? 'mdi-eye' : 'mdi-eye-off'"
                @click:append="show = !show"
                label="Mot de passe"
                required
              ></v-text-field>
              <v-text-field
                v-model="password"
                :type="show2 ? 'text' : 'password'"
                :append-icon="show2 ? 'mdi-eye' : 'mdi-eye-off'"
                @click:append="show2 = !show2"
                label="Confirmation mot de passe"
                required
              ></v-text-field>
            </v-container>
            <v-btn color="primary" outlined absolute right> Modifier </v-btn>
          </v-form>
        </v-card>
      </v-tab-item>
      <v-tab-item style="margin-bottom: 100px">
        <v-card flat>
          <v-list style="margin: 30px 0">
            <v-list-item-group>
              <v-list-item v-for="(notif, i) in notifications" :key="i">
                <template v-slot:default="{ active }">
                  <v-list-item-action>
                    <v-checkbox :input-value="active"></v-checkbox>
                  </v-list-item-action>
                  <v-list-item-content>
                    <v-list-item-title> {{ notif }} </v-list-item-title>
                  </v-list-item-content>
                </template>
              </v-list-item>
            </v-list-item-group>
          </v-list>
        </v-card>
      </v-tab-item>
    </v-tabs-items>
  </v-container>
</template>

<script>
export default {
  data() {
    return {
      tab: null,
      show: false,
      show2: false,
      menu: false,
      valid: true,
      prenom: "Laurence",
      nom: "Bray",
      email: "laurence.bray@gmail.com",
      date: "1990-02-10",
      password: "mot2passe",
      notifications: [
        "Nouveautés",
        "Actualités",
        "Offres spéciales",
        "Newsletter",
      ],
      items: [
        {
          text: "Home",
          disabled: false,
          href: "/",
        },
        {
          text: "Mon compte",
          disabled: true,
          href: "Compte",
        },
      ],
    };
  },
};
</script>

<style>
</style>