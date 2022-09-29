import axios from "axios";

const state = {
    looks: [],
};

const getters = {
	stateLooks: (state) => state.looks,
};

const actions = {
    async getLooks({commit}) {
        await commit("setLooks", await (await axios.get('looks')).data);
    },
    async createLook({dispatch}, form) {
        await axios.post('looks', form);
        await dispatch("getLooks")
    },
    async updateLook({dispatch}, form, id) {
        await axios.put(`looks/${id}`, form);
        await dispatch("getLooks");
    },
    async deleteLook({dispatch},id) {
        await axios.delete(`looks/${id}`);
        await dispatch("getLooks");
    }
};

const mutations = {
	setLooks: (state, looks) => (state.looks = looks),
};

export default {
	state,
	getters,
	actions,
	mutations,
};
