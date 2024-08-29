<template>
  <div id="home">
    <Sidebar v-show="hideSiderbar" />
    <router-view />
  </div>
</template>

<script>
import Sidebar from "@/components/Sidebar.vue";
export default {
  components: {
    Sidebar,
  },
  computed: {
    hideSiderbar() {
      let temp = ["/fileDetail"];
      return !temp.includes(this.$route.path);
    },
  },
};
</script>

<style lang="scss" scoped>
@import "@/assets/css/common.css";
#home {
  display: flex;
  justify-content: center;
  background: #171718;
  min-height: 100vh;
  min-width: 1440px;
  box-sizing: border-box;
}
</style>
