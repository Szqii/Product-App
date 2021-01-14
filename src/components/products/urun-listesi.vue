<template>
  <div class="container">
    <div class="row">
      <div class="col-12 card shadow">
        <div class="card-body">
          <h3>Ürün Listesi</h3>
          <hr />
          <table
            class="table table-hover table-striped table-bordered"
            v-if="getProducts.length > 0"
          >
            <thead>
              <th>ID</th>
              <th>Ürün Adı</th>
              <th>Adet</th>
              <th>Fiyat</th>
              <th>Açıklama</th>
            </thead>
            <tbody>
              <tr v-for="(product, key) in getProducts" :key="key">
                <td class="align-middle text-center" style="width: 120px;">
                  <span class="badge bg-info"> {{ product.key || product.id }} </span>
                </td>
                <td class="align-middle text-center">{{ product.title }}</td>
                <td
                  class="align-middle text-center text-white"
                  :class="setCountBackground(product.count)"
                  style="width: 100px;"
                >
                  {{ product.count }}
                </td>
                <td class="align-middle text-center" style="width: 120px;">
                  {{ product.price | currency }}
                </td>
                <td class="align-middle" style="max-width: 100px;">
                  {{ product.description }}
                </td>
              </tr>
            </tbody>
          </table>
          <div class="alert alert-warning" v-else>
            <strong>Burada Henüz Kayıt Bulamadık</strong>
            <br />
            <small
              >Kayıt eklemek için 'Ürün Girişi' menüsünden yararlanabilirsiniz.
              💨
            </small>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapGetters } from "vuex";
export default {
  computed: {
    ...mapGetters(["getProducts"]),
  },
  methods: {
    setCountBackground(count) {
    return (count > 0) ? "bg-success" : "bg-danger";
    },
  },
};
</script>

<style lang="scss" scoped>
.card {
  margin: 20px 0 100px 0;
}
</style>
