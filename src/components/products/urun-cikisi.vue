<template>
  <div class="container">
    <div class="row">
      <div class="col-6 offset-3 pt-3 card mt-5 shadow">
        <div class="card-body">
          <h3>Ürün Çıkışı</h3>
          <hr />
          <div class="form-group">
            <label>Ürün Adı</label>
            <select
              class="form-control mb-4"
              v-model="selectedProduct"
              @click="productSelected"
              aria-valuetext="Select"
            >
              <option disabled selected>Stokta olan bir ürün seçiniz.</option>
              <option
                :disabled="product.count == 0"
                v-for="product in getProducts"
                :key="product.key"
                :value="product.key"
                >{{ product.title }}</option
              >
            </select>
          </div>
          <transition name="fade" mode="out-in">
            <div
              class="card mb-2 border border-info bg-info"
              v-if="product !== null"
            >
              <div class="card-body">
                <div class="row">
                  <div class="col-12 text-center">
                    <div class="mb-3">
                      <span class="badge bg-success m-2"
                        >Stok : {{ product.count }}</span
                      >
                      <span class="badge bg-primary"
                        >Fiyat : {{ product.price | currency }}</span
                      >
                    </div>
                    <p class="border border-info bg-info p-2 text-black">
                      {{ product.description }}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </transition>

          <div class="form-group">
            <label>Adet</label>
            <input
              type="number"
              class="form-control"
              placeholder="Ürün adetini giriniz.."
              v-model="product_count"
              :class="isBigger(product_count)"
            />
          </div>
          <hr />
          <button @click="save" class="btn btn-primary">Kaydet</button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapGetters } from "vuex";
export default {
  data() {
    return {
      selectedProduct: null,
      product: null,
      product_count: null,
    };
  },
  computed: {
    ...mapGetters(["getProducts"]),
  },

  methods: {
    productSelected() {
      this.product = this.$store.getters.getProduct(this.selectedProduct)[0];
    },
    save() {
      if (this.product_count > 0 && this.product_count <= this.product.count) {
        let product = {
          key: this.selectedProduct,
          count: this.product_count,
        };
        this.$store.dispatch("sellProduct", product);
      } else {
        alert("Yeterli sayıda ürününüz yok veya pozitif olmayan bir sayı girdiniz.");
      }
    },
    isBigger(value) {
      if (this.product != null) {
        return (value > this.product.count)
          ? "border-5 border-danger"
          : "";
      }
    },
  },
};
</script>

<style lang="scss" scoped>
</style>
