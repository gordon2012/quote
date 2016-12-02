import React from 'react';

export default React.createClass({
    openTweet: function() {
        const {quote} = this.props;

        window.open(`https://twitter.com/intent/tweet?text=${quote.quoteText}--${quote.quoteAuthor}`, '_blank');
    },
    
    render: function() {
        return <button onClick={this.openTweet}>Tweet</button>
    }
});
