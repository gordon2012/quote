import React from 'react';

export default React.createClass({
    render: function() {
        const {quote} = this.props;

        return <div>
            <strong>{quote.quoteText}</strong><em> --{quote.quoteAuthor.length === 0 ? 'Unknown' : quote.quoteAuthor}</em>
        </div>;
    }
});
