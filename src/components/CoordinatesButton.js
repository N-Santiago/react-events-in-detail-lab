// Code CoordinatesButton Component Here
import React, {Component} from 'react';

class CoordinatesButton extends React.Component {
    constructor(props) {
        super(props);
        this.onReceiveCoordinates = this.props.onReceiveCoordinates;
    }

    handleClick = (e) => {
        e.persist();
        const coordinates = [e.clientX, e.clientY];
        this.onReceiveCoordinates(coordinates);
    }

    render() {
        return (
            <button onClick={this.handleClick}></button>
        )
    }
}

export default CoordinatesButton;