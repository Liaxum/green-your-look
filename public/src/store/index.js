import Vue from "vue";
import Vuex from "vuex";
import createPersistedState from "vuex-persistedstate";
import auth from "./modules/auth";
import categories from "./modules/categories"
import looks from "./modules/looks";
import styles from "./modules/styles";
import products from "./modules/products";

Vue.use(Vuex);


export default new Vuex.Store({
	modules: {
		auth,
		categories,
		looks,
		styles,
		products
	},
	plugins: [createPersistedState()],
});
