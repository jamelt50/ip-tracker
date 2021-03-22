<template>
  <div class="banner"></div>
  <h1 @click="store.dispatch('getinfo')">IP Address Tracker</h1>
  <searchbar />
  <infoContainer @click="tryy" />
  <mapp />
</template>

<script>
import searchbar from "./component/searchbar";
import infoContainer from "./component/infoContainer";
import mapp from "./component/mapp";

import * as L from "leaflet";
import { computed, onMounted, ref } from "vue";
import { mapState, useStore } from "vuex";
export default {
  name: "App",
  components: { searchbar, infoContainer, mapp },
  setup() {
    const store = useStore();
    var mymap = ref();
    const myap = onMounted(() => {
      mymap.value = L.map("mapid").setView([51.505, -0.09], 13);
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
      ).addTo(mymap.value);
    });
    const info = computed(() => {
      return { ip: store.state.ip, lat: store.state.lat, lng: store.state.lng };
    });
    const tryy = () => {
      mymap.value.setView([info.value.lat, info.value.lng], 13);
    };
    return { store, tryy };
  },
};
</script>

<style lang="scss">
@import url("https://fonts.googleapis.com/css2?family=Rubik:wght@400;500;700&display=swap");
@import url("https://unpkg.com/leaflet@1.7.1/dist/leaflet.css");
:root {
  --VeryDarkGray: #2b2b2b;
  --DarkGray: #969696;
}

* {
  padding: 0;
  margin: 0;
  box-sizing: border-box;
}
body {
  font-family: "Rubik", sans-serif;
  font-size: 16px;
  background-color: blue;
}
.banner {
  background: url("./assets/pattern-bg.png") no-repeat;
  background-size: cover;
  background-position: center;
  width: 100%;
  height: 16.75rem;
  position: absolute;
  top: 0;
  left: 0;
  z-index: -1;
}
h1 {
  color: white;
  text-align: center;
  font-weight: 500;
  padding: 1.125rem;
  font-size: 1.75rem;
}
</style>
