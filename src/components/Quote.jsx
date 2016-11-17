import React from 'react';
import {connect} from 'react-redux';
import * as actionCreators from '../action_creators';

export const Quote = React.createClass({
    render: function() {
        return <div>
            <h1>Random Quote Generator</h1>
            <p>{this.props.quote}</p>
        </div>;
    }
});

function mapStateToProps(state) {
    return {
        quote: state.quote
    }
}

export const QuoteContainer = connect(
    mapStateToProps,
    actionCreators
)(Quote);
