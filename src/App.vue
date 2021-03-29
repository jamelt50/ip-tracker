<template>
  <div class="banner"></div>
  <h1>IP Address Tracker</h1>
  <searchbar @enter="search" />
  <infoContainer />
  <mapp v-if="store.state.isp" />
</template>

<script>
import searchbar from "./component/searchbar";
import infoContainer from "./component/infoContainer";
import mapp from "./component/mapp";
import { useStore } from "vuex";
export default {
  name: "App",
  components: { searchbar, infoContainer, mapp },
  setup() {
    const store = useStore();
    store.dispatch("getinfo");
    const search = () => {
      store.dispatch("getinfo");
    };
    return { store, search };
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
}
#app {
  min-height: 100vh;
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
