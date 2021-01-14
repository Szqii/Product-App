<template>
  <div class="container">
    <div class="loading" :style="isLoading">
    <div class="lds-ripple">
        <div></div>
        <div></div>
    </div>
</div>
    <div class="row">
      <div class="col-6 offset-3 pt-3 card mt-5 shadow">
        <div class="card-body">
          <h3>Ürün İşlemleri</h3>
          <hr />
          <div class="form-group">
            <label>Ürün Adı</label>
            <input
              type="text"
              class="form-control"
              placeholder="Ürün adını giriniz.."
              v-model="product.title"
            />
          </div>
          <div class="form-group">
            <label>Adet</label>
            <input
              type="number"
              class="form-control"
              placeholder="Ürün adetini giriniz.."
              v-model="product.count"
            />
          </div>
          <div class="form-group">
            <label>Fiyat</label>
            <input
              type="number"
              class="form-control"
              placeholder="Ürün fiyatı giriniz.."
              v-model="product.price"
            />
          </div>
          <div class="form-group">
            <label>Açıklama</label>
            <textarea
              cols="30"
              rows="5"
              placeholder="Ürüne ait bir açıklama giriniz..."
              v-model="product.description"
              class="form-control"
            ></textarea>
          </div>
          <hr />
          <button
            class="btn btn-primary"
            :disabled="saveEnable"
            @click="saveProduct()"
          >
            Kaydet
          </button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      product: {
        title: "",
        count: null,
        price: null,
        description: "",
      },
      isSubmitted: false,
    };
  },
  methods: {
    saveProduct() {
      this.isSubmitted = true;
      this.$store.dispatch("saveProduct", this.product);
    },
  },
  computed: {
    saveEnable() {
      if (
        this.product.title.length > 0 &&
        this.product.count > 0 &&
        this.product.price > 0 &&
        this.product.description.length > 0
      ) {
        return false;
      } else {
        return true;
      }
    },
    isLoading(){
      if(this.isSubmitted){
        return {
          display : "block"
        }
      }else{
        return {
          display : "none"
          }
      }
    }
  },
  beforeRouteLeave(to, from, next) {
    if (
      (this.product.title.length > 0 ||
        this.product.count > 0 ||
        this.product.price > 0 ||
        this.product.description.length > 0) &&
      !this.isSubmitted
    ) {
      if (
        confirm(
          "Kaydedilmemiş değişiklikler var. Devam etmek istediğinize emin misiniz?"
        )
      ) {
        next();
      } else {
        next(false);
      }
    } else {
      next();
    }
  },
};
</script>

<style lang="scss" scoped></style>
