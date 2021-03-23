<template>
  <div class="infoContainer">
    <div>
      <h5>IP ADDRESS</h5>
      <span>{{store.state.ip}}</span>
    </div>
    <div>
      <h5>LOCATION</h5>
      <span>{{store.state.location}}</span>
    </div>
    <div>
      <h5>TIMEZONE</h5>
      <span>UTC {{store.state.timezone}}</span>
    </div>
    <div>
      <h5>ISP</h5>
      <span>{{store.state.isp}}</span>
    </div>
  </div>
</template>

<script>
import { useStore } from 'vuex';
export default {
  setup(){
    const store = useStore();
    return{store}
  }
};
</script>

<style lang="scss">
.infoContainer {
  width: 87%;
  border-radius: 0.875rem;
  background-color: white;
  margin: 2rem auto;
  text-align: center;
  padding: 1rem;
  h5 {
    font-size: 0.625rem;
    color: var(--DarkGray);
    padding: 0.75rem 0;
  }
  span {
    font-weight: 700;
    color: var(--VeryDarkGray);
    padding: 0.75rem 0;
    font-size: 1.125rem;
  }
}
</style>