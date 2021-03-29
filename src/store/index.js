import { createStore } from "vuex";
import * as L from "leaflet";
export default createStore({
  state: {
    ip: "",
    lat: null,
    lng: null,
    location: "",
    timezone: "",
    isp: "",
    mymap: "",
    marker: "",
  },
  mutations: {
    enterip(state, newvalue) {
      state.ip = newvalue;
    },
    applyinfo(state, res) {
      state.ip = res.ip;
      state.lat = res.location.lat;
      state.lng = res.location.lng;
      state.location = res.location.city + " " + res.location.region;
      state.timezone = res.location.timezone;
      state.isp = res.isp;
    },
    addmap(state) {
      state.mymap = L.map("mapid").setView([state.lat, state.lng], 7);
      L.tileLayer(
        "https://api.mapbox.com/styles/v1/{id}/tiles/{z}/{x}/{y}?access_token=pk.eyJ1IjoibWFwYm94IiwiYSI6ImNpejY4NXVycTA2emYycXBndHRqcmZ3N3gifQ.rJcFIG214AriISLbB6B5aw",
        {
          maxZoom: 18,
          attribution:
            'Map data &copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors, ' +
            'Imagery © <a href="https://www.mapbox.com/">Mapbox</a>',
          id: "mapbox/streets-v11",
          tileSize: 512,
          zoomOffset: -1,
        }
      ).addTo(state.mymap);
      state.marker = L.marker([state.lat, state.lng]).addTo(state.mymap);
    },
    changemap(state) {
      state.mymap.setView([state.lat + 1, state.lng], 7);
      state.marker.setLatLng([state.lat, state.lng]);
    },
  },
  actions: {
    getinfo({ commit, state }) {
      let tmp =
        state.ip.match(/\./g) !== null ? state.ip.match(/\./g).length : 0;
      var lnk =
        tmp < 2
          ? "https://geo.ipify.org/api/v1?apiKey=at_MOGdYg8lmfWZnOMWwfdqBsGAb3S0V&domain="
          : "https://geo.ipify.org/api/v1?apiKey=at_MOGdYg8lmfWZnOMWwfdqBsGAb3S0V&ipAddress=";
      fetch(lnk + state.ip)
        .then((res) => res.json())
        .then((res) => {
          commit("applyinfo", res);
        })
        .then(() => {
          if (state.mymap) {
            commit("changemap");
          } else {
            commit("addmap");
          }
        });
    },
  },
});
