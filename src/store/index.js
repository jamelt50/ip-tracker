import { createStore } from "vuex";

export default createStore({
  state: {
    ip: "",
    lat: null,
    lng: null,
    location:"",
    timezone:"",
    isp:""
  },
  mutations: {
    enterip(state,newvalue){
state.ip = newvalue;
    },
    applyinfo(state, res) {
      state.ip = res.ip;
      state.lat = res.location.lat;
      state.lng = res.location.lng;
      state.location = res.location.city + res.location.region;
      state.timezone = res.location.timezone;
      state.isp = res.isp;
      console.log(res);
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
