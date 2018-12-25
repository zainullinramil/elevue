import Vue from 'vue';
import Vuex from 'vuex';

import socketModule from './store/socket';


Vue.use(Vuex);

export default new Vuex.Store({
    modules: {
        socketModule,
    }
});
