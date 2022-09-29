import Vue from "vue";
import Vuetify from "vuetify/lib/framework";

Vue.use(Vuetify);

export default new Vuetify({
	theme: {
		themes: {
			light: {
				primary: "#6B2737", // Violet
				secondary: "#F8F0DF", // Beige
				accent: "#79B4B7", // Bleu
				info: "#777777", // Gris
			},
		},
	},
});
