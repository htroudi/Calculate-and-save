import store from './store'

export default class Calculate {

     calculateResult(l, r, op) {
        let res = 0;
        switch (op) {
            case '+': res = l + r;
                break;
            case '-': res = l - r;
                break;
            case '*': res = l * r;
                break;
            case '/': res = (r === 0 ? 'ERROR' : l / r);
                break;
            default: res = l + r;
                break;
        }
        return res;
    }

    updateResult() {
        let left = (isNaN(store.getters.left) ? 0 : store.getters.left);
        let right = (isNaN(store.getters.right) ? 0 : store.getters.right);
        let operator = store.getters.operator;
        let res = this.calculateResult(left, right, operator);
        store.commit("setResult", res);
    }

}