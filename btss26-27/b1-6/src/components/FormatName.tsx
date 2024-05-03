import React, { Component } from 'react'

export default class FormatName extends Component {
    public state;
    constructor() {
        super(Component)
        this.state = {
            firstName: "Nguyễn Văn",
            lastName: "Nam"
        }
        }
    formatName(): string{
        return this.state.firstName + " " + this.state.lastName;
    }
    render() {
        return (
            <div>Họ và tên: {this.formatName()}</div>
        )
    }
}

