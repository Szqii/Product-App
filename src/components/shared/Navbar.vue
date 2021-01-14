<template>
  <nav
    class="navbar navbar-expand-lg navbar-light"
  >
    <router-link class="navbar-brand active" to="/" tag="a">
      Ürün Listesi
    </router-link>
    <div class="collapse navbar-collapse" id="navbarSupportedContent">
      <ul class="navbar-nav mr-auto">
        <router-link active-class="active" tag="li" to="/add">
          <a class="nav-link">Ürün Girişi</a>
        </router-link>
        <router-link active-class="active" tag="li" to="/remove">
          <a class="nav-link">Ürün Çıkışı</a>
        </router-link>
      </ul>
    </div>
  </nav>
</template>

<script>
export default {};
</script>

<style lang="scss" scoped>
nav {
  padding: 1rem;
  background-color: rgba(#ff8b8b, .8);
}
</style>
