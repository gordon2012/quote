import React from 'react';

export default React.createClass({
    render: function() {
        const {quote} = this.props;

        return <div className="entry">
            <p><strong>{quote.quoteText}</strong></p>
            <p><em>--{quote.quoteAuthor.length === 0 ? 'Unknown' : quote.quoteAuthor}</em></p>
        </div>;
    }
});
