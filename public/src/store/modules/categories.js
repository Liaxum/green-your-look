import axios from "axios";

const state = {
	categories: [],
};

const getters = {
	stateCategories: (state) => state.categories,
};

const actions = {
	async getCategories({ commit }) {
		await commit(
			"setCategories",
			await (
				await axios.get("categories")
			).data
		);
	},
	async createCategory({ dispatch }, form) {
		await axios.post("categories", form);
		await dispatch("getCategories");
	},
	async updateCategory({ dispatch }, { form, id }) {
        console.log(form, id)
		await axios.patch(`categories/${id}`, form);
		await dispatch("getCategories");
	},
	async deleteCategory({ dispatch }, id) {
		await axios.delete(`categories/${id}`);
		await dispatch("getCategories");
	},
};

const mutations = {
	setCategories: (state, categories) => (state.categories = categories),
};

export default {
	state,
	getters,
	actions,
	mutations,
};
