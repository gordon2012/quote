import React from 'react';
import {connect} from 'react-redux';
import * as actionCreators from '../action_creators';

export const Quote = React.createClass({
    render: function() {
        const {quotes} = this.props;

        return <div>
            <h1>Random Quote Generator</h1>
            <button onClick={this.props.fetchQuote}>Get a Quote</button>
            <button onClick={this.props.prefetchQuotes}>Get many Quotes</button>

            <ul>
                {typeof quotes !== 'undefined' ?
                    Object.keys(quotes).map(key => {
                        var quote = quotes[key];
                        return <li key={key}><strong>{quote.quoteText}</strong><em> --{quote.quoteAuthor.length === 0 ? 'Unknown' : quote.quoteAuthor}</em></li>
                    }) : null
                }
            </ul>

            <hr /><pre><code>{JSON.stringify(this.props, null, 2)}</code></pre>
        </div>;
    }
});

function mapStateToProps(state) {
    return state;
}

export const QuoteContainer = connect(
    mapStateToProps,
    actionCreators
)(Quote);
