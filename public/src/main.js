import Vue from 'vue';
import App from './App.vue';
import router from './router';
import store from './store';
import axios from 'axios';
import vuetify from './plugins/vuetify';

axios.defaults.withCredentials = true;
axios.defaults.baseURL = 'https://green-your-look.liaxum.fr/api';

Vue.config.productionTip = false;

new Vue({
	router,
	store,
	vuetify,
	render: function (h) {
		return h(App);
	},
}).$mount('#app');
