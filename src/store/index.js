import { createStore } from "vuex";

export default createStore({
  state: {
    ip: "8.8.8.8",
    lat: 58.505,
    lng: -0.09,
  },
  mutations: {
    applyinfo(state, res) {
      state.lat = res.location.lat;
      state.lng = res.location.lng;
      console.log(state.lat, state.lng);
    },
  },
  actions: {
    getinfo({ commit, state }) {
      fetch(
        "https://geo.ipify.org/api/v1?apiKey=at_MOGdYg8lmfWZnOMWwfdqBsGAb3S0V&ipAddress=" +
          state.ip
      )
        .then((res) => res.json())
        .then((res) => {
          commit("applyinfo", res);
        });
    },
  },
  modules: {},
});
