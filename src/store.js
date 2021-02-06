

import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export default new Vuex.Store({
    state: {
        operation: {
            left: 0,
            right: 0,
            operator: '+',
            result: 0
        },
        history: {
            header: {
                col1: 'Date',
                col2: 'Operation',
                col3: 'Result',
                col4: 'Action',
            },
            contents: []
        }
    },
    getters: {
        left: state => {
            return parseFloat(state.operation.left)
        },
        right: state => {
            return parseFloat(state.operation.right)
        },
        operator: state => {
            return state.operation.operator
        },
        result: state => {
            if (state.operation.result === 'ERROR') {
                return state.operation.result
            } else {
                return parseFloat(state.operation.result.toFixed(2))
            }
        },
        header: state => {
            return state.history.header
        },
        contents: state => {
            return state.history.contents
        }
    },
    mutations: {
        setLeft(state, num) {
            state.operation.left = num
        },
        setRight(state, num) {
            state.operation.right = num
        },
        setOperator(state, op) {
            state.operation.operator = op
        },
        setResult(state, num) {
            state.operation.result = num
        },
        setContents(state, obj) {
            state.history.contents = obj
        },
        addContent(state, obj) {
            state.history.contents.push(obj)
        },
        removeContent(state, id) {
            state.history.contents.splice(id,1)
        }
    },
    actions: {}
});