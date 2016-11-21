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


var api = 'http://api.forismatic.com/api/1.0/?method=getQuote&lang=en&format=json';
var cors = process.env.NODE_ENV === 'development' ?
    'http://localhost:3001' : 'https://gordon2012-cors-anywhere.herokuapp.com';

const doFetch = () => dispatch =>
    fetch(`${cors}/${api}&key=${Math.floor(Math.random() * 1000000)}`)
        .then(res => res.json())
        .then(json => dispatch(receiveQuote(json)));

export const fetchQuote = () => dispatch =>
    dispatch(doFetch());

export const prefetchQuotes = () => dispatch =>
    dispatch(doFetch())
        .then(dispatch(doFetch()))
        .then(dispatch(doFetch()))
        .then(dispatch(doFetch()))
        .then(dispatch(doFetch()));
