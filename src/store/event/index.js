import { records } from '../utils.js';
import actions from './actions.js';
import mutations from './mutations.js';
import getters from './getters.js';
const state = records.get() || {
    event: [],
    count: 0
}

export default {
    state,
    getters,
    actions,
    mutations
}