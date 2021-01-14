import Vue from 'vue'

export const setTradeResult = ({state, commit}, tradeResult) => {
    commit("updateTradeResult", tradeResult);
    let result = {
        purchase : state.purchase,
        sale : state.sale,
    }
    Vue.http.put("YOUR DATABASE URL/trade-result.json", result)
    .then((response) => {
        console.log(response);
    })
}

export const getTradeResult = ({commit}) => {
    Vue.http.get("YOUR DATABASE URL/trade-result.json")
    .then((response) => {
        commit("updateTradeResult", response.body)
    })
}