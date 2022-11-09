import React, { Component } from 'react';

class StatisticLine extends Component {
    render() { 
        return (
            <tr>
            <td>{this.props.text}</td>
            <td>{this.props.value}</td>
            </tr>
        );
    }
}
 
export default StatisticLine;