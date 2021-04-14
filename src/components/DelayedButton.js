// Code DelayedButton Component Here
import React, {Component} from 'react';

class DelayedButton extends React.Component {
    constructor(props) {
        super(props);
        this.onDelayedClick = this.props.onDelayedClick
        this.delay = this.props.delay
    }

    handleClick = (e) => {
        e.persist();
        setTimeout(() => {
            this.onDelayedClick(e)
        }, this.delay)
    }

    render() {
        return (
            <button onClick={this.handleClick}></button>
        )
    } 
}

export default DelayedButton; 