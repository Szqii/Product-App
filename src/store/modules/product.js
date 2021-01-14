import Vue from 'vue'
import router from '@/router/index'

const state = {
  products : []
}

const getters = {
  getProducts(state){
    return state.products;
  },
  getProduct(state){
    return key => state.products.filter(element => {
      return element.key == key 
    })
  }
}

const mutations = {
  updateProductList(state, product){
    state.products.push(product)
  }
}

const actions = {
  initApp({commit}){
    Vue.http.get("https://urun-islemleri-c5282-default-rtdb.firebaseio.com/products.json")
    .then(response => {
      let data = response.body;
      for(let key in data){
        data[key].key = key;
        commit("updateProductList", data[key])
      }
    })
  },

  saveProduct( {commit, dispatch} ,product){
    Vue.http.post("https://urun-islemleri-c5282-default-rtdb.firebaseio.com/products.json", product)
    .then((response) => {
      // Ürün Listesinin Güncellemesi \\
      product.id = response.body.name
      commit("updateProductList", product)
      // Bakiyenin Güncellenmesi \\
      let TradeResult = {
        purchase : product.price,
        sale : 0,
        count : product.count,
      }
      dispatch("setTradeResult", TradeResult);
      router.replace("/");

    });
  },
  sellProduct({dispatch, state}, payload){
    let product = state.products.filter(element => {
      return element.key == payload.key 
    })
    if(product){
      let totalSellCount = product[0].count - payload.count
      Vue.http.patch("https://urun-islemleri-c5282-default-rtdb.firebaseio.com/products/" + payload.key + ".json", {count : totalSellCount})
      .then( () => {
        product[0].count = totalSellCount;
        // Bakiyenin güncellenmesi
        let TradeResult = {
          purchase : 0,
          sale : product[0].price,
          count : payload.count,
        }

        // dispatch("setTradeResult", TradeResult);
        // router.replace("/");

        setTimeout( () => {
          dispatch("setTradeResult", TradeResult);
          router.replace("/");
        }, 1500)
      })
    }
  }
}

export default {
  state,
  getters,
  mutations,
  actions,
}