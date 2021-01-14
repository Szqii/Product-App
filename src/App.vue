<template>
  <div>
    <Navbar></Navbar>
    <transition name="fade" mode="out-in">
      <router-view></router-view>
    </transition>
    <Footer></Footer>
  </div>
</template>

<script>
import Navbar from "./components/shared/Navbar.vue";
import Footer from "./components/shared/Footer.vue";

export default {
  components: {
    Navbar,
    Footer,
  },
  created() {
    this.$store.dispatch("getTradeResult");
    this.$store.dispatch("initApp")
  },
};
</script>

<style lang="scss">
* {
  padding: 0;
  margin: 0;
  box-sizing: border-box;
}
body {
  background-color: rgba(#ff8b8b, 0.3);
}

.fade-enter{
  opacity: 0;
}
.fade-enter-active{
  transition: opacity .5s ease-out;
}
.fade-leave{}
.fade-leave-active{
  opacity: 0;
  transition: opacity .5s ease-out;
}
</style>
