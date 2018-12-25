export default{
    state: {
        serverHost:'ws://localhost:3003',
        statusSocket: 'OFFLINE',
        isOnline: false,
        timeout: 1000,
        ws: null,
        lastData: '',
        retryConnect: 5,
        reconnectIntervalID: 0,
        emitMessageIntervalID: 0,
    },
    mutations: {
        setStatus: (state, {
            status
        }) => {
            state.statusSocket = status || 'ERROR';
        },
        setData: (state, {
            data
        }) => {
            if (data) state.lastData = data;
        },
    },
    actions: {
        startSocket({ commit, state, dispatch }) {

            if (!state.isOnline) {
                if (!state.ws) state.ws = new WebSocket(state.serverHost);

                state.ws.onopen = () => {
                    commit('setStatus', { status: 'ONLINE' });
                    state.isOnline = true;
                    clearInterval(state.reconnectIntervalID);
                    state.reconnectIntervalID = 0;
                    if (!state.emitMessageIntervalID) dispatch('emmitMessage');
                }
                state.ws.onclose = () => {
                    commit('setStatus', { status: 'DISCONNECTED' });
                    state.isOnline = false;
                    state.ws = null;
                    clearInterval(state.emitMessageIntervalID);
                    state.emitMessageIntervalID = 0;
                    if (!state.reconnectIntervalID) dispatch('restartSocket');
                }
                state.ws.onerror = () => {
                    state.isOnline = false;
                    state.ws = null;
                    clearInterval(state.emitMessageIntervalID);
                    state.emitMessageIntervalID = 0;
                    if (!state.reconnectIntervalID) dispatch('restartSocket');
                }
                state.ws.onmessage = resp => {
                    let parseData;

                    try {
                        const parseResp = JSON.parse(resp.data);
                        parseData = parseResp.data;
                    } catch (e) {
                        console.log('parseData', e);
                    }
                    if (parseData) commit('setData', { data: parseData });
                }
            }
        },
        restartSocket({ commit, state, dispatch }) {
            state.reconnectIntervalID = setInterval(() => {
                dispatch('startSocket');
            }, 3000);
        },
        emmitMessage({ state }) {
            state.emitMessageIntervalID = setInterval(() => {
                if (state.ws) state.ws.send('{"command": "up"}');
            }, state.timeout);
        }
    },
    getters: {
        getSocketStatus: state => {
            return state.statusSocket;
        },
        getSocketData: state => {
            return state.lastData;
        },
        isOnline: state => {
            return state.isOnline;
        },

    }
}