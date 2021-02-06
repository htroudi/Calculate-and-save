import store from './store'
import moment from 'moment'

export default class History {

    update() {
        let op = {
            date: '',
            operation: '',
            result: '',
        }
        op.date = moment().format('MM/DD/YYYY hh:mm');
        op.operation = store.getters.left + ' ' + store.getters.operator + ' ' +  store.getters.right;
        op.result = store.getters.result;
        store.commit("addContent", op);
    }

    delete(itemId) {
        store.commit("removeContent", itemId)
    }

    reset() {
        store.commit("setContents", [])
    }

}