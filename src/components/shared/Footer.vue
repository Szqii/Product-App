<template>
    <nav
      class="navbar fixed-bottom navbar-light d-flex justify-content-between"
      style="background-color: #e3f2fd;"
    >
      <span class="navbar-text mr-auto">
        <strong>VueJS Ürün İşlemleri Uygulaması</strong> | Sezgi Altan
      </span>
      <div class="values d-flex align-items-center justify-content-center">
      <span class="navbar-text navbar-nav my-2 my-lg-0 p-2">
        <strong>Alış Tutarı</strong>
        <span class="badge bg-danger">{{getTradeResult.purchase | currency}}</span>
      </span>
      <span class="navbar-text navbar-nav my-2 my-lg-0 p-2">
        <strong>Satış Tutarı</strong>
        <span class="badge bg-success">{{getTradeResult.sale | currency}}</span>
      </span>
      <span class="navbar-text navbar-nav my-2 my-lg-0 p-2">
        <strong>Bakiye</strong>
        <span class="badge bg-primary px-4">{{getTradeResult.balance | currency}}</span>
      </span>
      </div>
    </nav>
</template>

<script>
import {mapGetters} from 'vuex'
export default {
computed : {
  ...mapGetters(["getTradeResult"])
}

};
</script>

<style lang="scss" scoped>
nav{
    padding: 1rem;
}
</style>
