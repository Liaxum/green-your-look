import axios from 'axios';
import jwt_decode from 'jwt-decode';

const state = {
  token: null,
  refresh_token: null,
};

const getters = {
  isAuthenticated: (state) => !!state.token,
  isAdmin: (state) => jwt_decode(state.token).role === 'Admin',
  stateToken: (state) => state.token,
  stateRefreshToken: (state) => state.refresh_token,
};

const actions = {
  async register({ commit }, form) {
    await axios.post('users', form);
    await this.login(form);
  },

  async login({ commit }, user) {
    const res = await axios.get('/auth', {
      auth: {
        username: user.mail,
        password: user.password,
      },
    });
    await commit('setToken', res.data.access_token);
    await commit('setRefreshToken', res.data.refresh_token);
    axios.defaults.headers.common[
      'Authorization'
    ] = `Bearer ${res.data.access_token}`;
  },
};

const mutations = {
  setToken: (state, token) => (state.token = token),
  setRefreshToken: (state, refreshToken) =>
    (state.refresh_token = refreshToken),
};

export default {
  state,
  getters,
  actions,
  mutations,
};
