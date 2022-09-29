<template>
  <v-expansion-panels>
    <v-expansion-panel class="mb-2" v-for="(item, i) in look.items" :key="i">
      <v-expansion-panel-header>
        {{ item.name }}
      </v-expansion-panel-header>
      <v-expansion-panel-content>
        <v-card elevation="0">
          <v-row>
            <v-col cols="12" sm="4">
              <v-img
                :src="require(`@/assets/femmes/${item.img}.png`)"
                alt="look"
              ></v-img>
            </v-col>
            <v-col cols="12" sm="8">
              <v-card-text
                style="
                  display: flex;
                  justify-content: center;
                  align-items: center;
                "
              >
                <div v-for="(label, i) in look.label" :key="i">
                  <v-img
                    class="mr-5"
                    :src="require('@/assets/icons/' + label + '.png')"
                    alt="bio"
                    max-width="30"
                  ></v-img>
                </div>
                <div style="font-size: 18px; margin-left: auto">
                  {{ item.price }}
                </div>
              </v-card-text>
              <v-card-text>
                <v-chip-group
                  v-model="selection"
                  active-class="primary accent-4 white--text"
                  column
                >
                  <v-chip>XS</v-chip>
                  <v-chip>S</v-chip>
                  <v-chip>M</v-chip>
                  <v-chip>L</v-chip>
                  <v-chip>XL</v-chip>
                  <v-chip>XXL</v-chip>
                </v-chip-group>
              </v-card-text>
            </v-col>
          </v-row>
        </v-card>
      </v-expansion-panel-content>
    </v-expansion-panel>
  </v-expansion-panels>
</template>

<script>
export default {
  name: "ItemCard",
  data() {
    return {
      selection: 1,
    };
  },
  props: {
    img: { required: true, type: String },
    look: { required: true, type: Object },
  },
};
</script>

<style></style>
