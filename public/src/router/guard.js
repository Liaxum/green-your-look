import store from '../store';

export function isLogged() {
  return store.getters.isAuthenticated;
}

export function isAdmin() {
  return store.getters.isAdmin();
}
