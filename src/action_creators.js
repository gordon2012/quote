export function setState(state) {
    return {
        type: 'SET_STATE',
        state
    };
}

export function receiveQuote(json) {
    return {
        type: 'RECEIVE_QUOTE',
        data: json,
        receivedAt: Date.now()
    }
}

export function receiveList(data) {
    return {
        type: 'RECEIVE_LIST',
        data
    }
}

export function changeCount(inc) {
    return {
        type: 'CHANGE_COUNT',
        inc
    }
}


function randRange(min, max) {
    return Math.floor(Math.random() * (max-min+1) + min);
}

var api = 'http://api.forismatic.com/api/1.0/?method=getQuote&lang=en&format=json';
var cors = process.env.NODE_ENV === 'development' ?
    'http://localhost:3001' : 'https://gordon2012-cors-anywhere.herokuapp.com';

const doFetch = () => dispatch => {
    dispatch(changeCount(1));
    return fetch(`${cors}/${api}&key=${randRange(0, 1000000)}`)
        .then((res, rej) => res.json())
        .then(json => dispatch(receiveQuote(json)))
        .catch(reason => dispatch(changeCount(-1)));
}

export const fetchQuote = () => dispatch =>
    dispatch(doFetch());

export const prefetchQuotes = () => dispatch =>
    dispatch(doFetch())
        .then(dispatch(doFetch()))
        .then(dispatch(doFetch()))
        .then(dispatch(doFetch()))
        .then(dispatch(doFetch()));

export const addList = () => (dispatch, getState) => {
    const {list, quotes, count} = getState();
    const keys = Object.keys(quotes).filter(e1 => !list.some(e2 => e1 === e2) );
    const len = keys.length;

    var promises = [];

    if(count - list.length < 10) promises.push(dispatch(prefetchQuotes()));
    if(len > 0) promises.push(dispatch(receiveList(keys[randRange(0, len-1)])));

    return Promise.all(promises);
}
