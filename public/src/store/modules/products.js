import axios from "axios";

const state = {
    products: [],
};

const getters = {
	stateProducts: (state) => state.products,
};

const actions = {
    async getProducts({commit}) {
        await commit("setProducts", await (await axios.get('products')).data);
    },
    async createProduct({dispatch}, form) {
        await axios.post('products', form);
        await dispatch("getProducts")
    },
    async updateProduct({dispatch}, form, id) {
        await axios.put(`products/${id}`, form);
        await dispatch("getProducts");
    },
    async deleteProduct({dispatch},id) {
        await axios.delete(`products/${id}`);
        await dispatch("getProducts");
    }
};

const mutations = {
	setProducts: (state, products) => (state.products = products),
};

export default {
	state,
	getters,
	actions,
	mutations,
};
