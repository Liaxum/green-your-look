import axios from "axios";

const state = {
    styles: [],
};

const getters = {
	stateStyles: (state) => state.styles,
};

const actions = {
    async getStyles({commit}) {
        await commit("setStyles", await (await axios.get('styles')).data);
    },
    async createStyle({dispatch}, form) {
        await axios.post('styles', form);
        await dispatch("getStyles")
    },
    async updateStyle({dispatch}, form, id) {
        await axios.put(`styles/${id}`, form);
        await dispatch("getStyles");
    },
    async deleteStyle({dispatch},id) {
        await axios.delete(`styles/${id}`);
        await dispatch("getStyles");
    }
};

const mutations = {
	setStyles: (state, styles) => (state.styles = styles),
};

export default {
	state,
	getters,
	actions,
	mutations,
};
