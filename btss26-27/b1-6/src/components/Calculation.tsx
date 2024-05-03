import React, { Component } from 'react'

type Props = {
    number: number
}
export default class Calculation extends Component {
    state: Props;
    constructor() {
        super(Component);
        this.state = {
            number: 10
        }
    }
    render() {
    return (
        <>
            <h3>Danh sách kết quả</h3>
            <ul>
                <li>{this.state.number} + {this.state.number} = {this.state.number + this.state.number}</li>
                <li>{this.state.number} - {this.state.number} = {this.state.number - this.state.number}</li>
                <li>{this.state.number} * {this.state.number} = {this.state.number * this.state.number}</li>
                <li>{this.state.number} / {this.state.number} = {this.state.number / this.state.number}</li>
            </ul>
        </>
        )
    }
}
