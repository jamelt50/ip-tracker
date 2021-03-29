<template>
  <div class="searchbar">
    <input
      v-model="searchValue"
      @keyup.enter="up"
      type="text"
      placeholder="Search for any IP address or domain"
    />
    <button @click="up"><img src="../assets/icon-arrow.svg" alt="" /></button>
  </div>
</template>

<script>
import { useStore } from "vuex";
import { ref } from "vue";
export default {
  name: "searchbar",
  setup(props, context) {
    const searchValue = ref("");
    const store = useStore();
    const up = () => {
      store.commit("enterip", searchValue.value);
      context.emit("enter");
    };
    return { up, searchValue };
  },
};
</script>

<style lang="scss">
.searchbar {
  width: 87%;
  max-width: 34.75rem;
  height: 3.625rem;
  background-color: white;
  display: flex;
  justify-content: space-between;
  margin: auto;
  border-radius: 0.875rem;
  overflow: hidden;
  button {
    height: 100%;
    width: 3.625rem;
    border: none;
    background-color: var(--VeryDarkGray);
    transition: all 0.3s ease-in-out;
    cursor: pointer;
    &:hover {
      opacity: 0.8;
    }
  }
  input {
    height: 100%;
    border: none;
    padding-left: 1.125rem;
    flex-grow: 1;
  }
}
</style>