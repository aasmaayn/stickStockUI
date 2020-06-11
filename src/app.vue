<template>
  <div id="app">
    <div>
    <router-view></router-view>
    </div>
  </div>
</template>
<script>
export default {
  mounted() {
    this.$router.push('/searchtest')
  }
};
</script>

<style>
</style>