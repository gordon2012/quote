export default function(state = {}, action) {
    switch(action.type) {
        case 'SET_STATE':
            return Object.assign({}, state, action.state);
        case 'RECEIVE_QUOTE':
            return Object.assign({}, state, {
                quotes: Object.assign({}, state.quotes, {
                    [action.data.quoteLink.split('/')[4]]: action.data
                })
            });
        case 'RECEIVE_LIST':
            return {
                ...state,
                list: [action.data, ...state.list]
            };
        case 'CHANGE_COUNT':
            return {
                ...state,
                count: state.count + action.inc
            }
        default:
            return state;
    }
}
