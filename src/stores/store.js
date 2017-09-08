import Vue from 'vue';
import Vuex from 'vuex';
import * as mtypes  from './mutation-types.js';
import { toViewModel } from './helpers/dataviewhelper.js'
import dataService from '@/services/dataService.js'

Vue.use(Vuex);

var state = {
    playList:[],
    currentList:{},
    changeTrack: false,
    startStopTrack: false,
    isPlaying: false,
    loading:true
}

var mutations = {

    [mtypes.FETCH_PLAYLIST](state, payload){
        const {id, data} = payload;
        var viewData = toViewModel(data);
        state.playList = viewData;
        state.currentList = viewData.list[id];
        state.loading = false;
    },
    [mtypes.GET_CURRENT_LIST](state, id){
        state.currentList = state.playList.list[id];
    },
    [mtypes.PLAYER_STARTSTOP_TRACK](state, status){
        state.startStopTrack = status
    }
}

var actions = {
    [mtypes.FETCH_PLAYLIST](context, [dataUrl, id]){
        dataService.fetchData(dataUrl)
            .then((res) => { return res.json(); })
            .then((res) => {
                context.commit(mtypes.FETCH_PLAYLIST, { 
                    id: id,
                    data: res
                });
            });
    }
}

export default new Vuex.Store({
    state,
    mutations,
    actions
});