import React from 'react';
import Twitter from './Twitter'

export default React.createClass({
    render: function() {
        const {quote} = this.props;

        return <div className="entry">
            <p><strong>{quote.quoteText}</strong></p>
            <p><em>--{quote.quoteAuthor.length === 0 ? 'Unknown' : quote.quoteAuthor}</em></p>
            <Twitter quote={quote}/>
        </div>;
    }
});
