import Vue from 'vue';
import Vuex from 'vuex';
Vue.use(Vuex);

import event from './event/index.js';
import theme from './theme/index.js';

export default new Vuex.Store({
    modules: {
        event,
        theme
    }
});