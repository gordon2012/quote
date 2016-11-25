import React from 'react';
import {connect} from 'react-redux';
import * as actionCreators from '../action_creators';
import Entry from './Entry';

export const Quote = React.createClass({
    render: function() {
        const {list, quotes} = this.props;

        return <div>
            <h1>Random Quote Generator</h1>
            <button onClick={this.props.addList}>Get a Quote</button>

            <div>
                {list.map(e =>
                    <Entry key={e} quote={quotes[e]}></Entry>
                )}
            </div>

            {process.env.NODE_ENV === 'development' && <div><hr /><pre><code>{JSON.stringify(this.props, null, 2)}</code></pre></div>}
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
