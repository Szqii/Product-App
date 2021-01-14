import Vue from 'vue'

export const setTradeResult = ({state, commit}, tradeResult) => {
    commit("updateTradeResult", tradeResult);
    let result = {
        purchase : state.purchase,
        sale : state.sale,
    }
    Vue.http.put("https://urun-islemleri-c5282-default-rtdb.firebaseio.com/trade-result.json", result)
    .then((response) => {
        console.log(response);
    })
}

export const getTradeResult = ({commit}) => {
    Vue.http.get("https://urun-islemleri-c5282-default-rtdb.firebaseio.com/trade-result.json")
    .then((response) => {
        commit("updateTradeResult", response.body)
    })
}