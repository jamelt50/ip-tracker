<template>
  <div class="searchbar">
    <input type="text" placeholder="Search for any IP address or domain" />
    <button><img src="../assets/icon-arrow.svg" alt="" /></button>
  </div>
</template>

<script>
export default {
  name: "searchbar",
};
</script>

<style lang="scss">
.searchbar {
  width: 87%;
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