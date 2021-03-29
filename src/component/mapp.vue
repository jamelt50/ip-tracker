<template>
  <div id="mapid"></div>
</template>

<script>
import { onMounted } from "vue";
import { useStore } from "vuex";

export default {
  name: "mapp",
  setup() {
    const store = useStore();
    const map = onMounted(() => {
      store.commit("addmap");
    });
  },
};
</script>

<style lang="scss">
#mapid {
  height: calc(100vh - 16.75rem);
  position: absolute;
  bottom: 0;
  left: 0;
  width: 100%;
  z-index: -1;
  .leaflet-control-container {
    display: none;
  }
}
</style>