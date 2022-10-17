import React, { Component } from 'react';

class DisplayFurnitureOptions extends React.Component {

    render() {
        return (
            <p >Dimensions: {this.props.height}x{this.props.width}x{this.props.length}</p>
        )     
    }
}

export default DisplayFurnitureOptions;



