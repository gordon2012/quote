import React from 'react';
import {connect} from 'react-redux';
import * as actionCreators from '../action_creators';

export const Quote = React.createClass({
    render: function() {
        const {list, quotes} = this.props;

        return <div>
            <h1>Random Quote Generator</h1>
            <button onClick={this.props.addList}>Get a Quote</button>

            <ul>
                { list.map(e =>
                    <li key={e}>
                        <strong>{quotes[e].quoteText}</strong>
                        <em> --{quotes[e].quoteAuthor.length === 0 ? 'Unknown' : quotes[e].quoteAuthor}</em>
                    </li>
                )}
            </ul>

            {/*true && <div><hr /><pre><code>{JSON.stringify(this.props, null, 2)}</code></pre></div>*/}
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
