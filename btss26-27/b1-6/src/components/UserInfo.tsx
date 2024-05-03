import React, { Component } from 'react'
type StateType = {
    name: string,
    gender: string,
    birthDate: string[],
    email: string,
    address: string
}

export default class extends Component {
    state: StateType;
    constructor() {
        super(Component);
        this.state = {
            name: "Nguyễn Văn A",
            gender: 'Nam',
            birthDate: ['06', '03', '2024'],
            email: 'nva@gmail.com',
            address: 'Thanh Xuân, Hà Nội'
        }
    }
  render() {
    return (
        <>
        <h3>Thông tin cá nhân</h3>
        <ul>
            <li>Họ và tên: {this.state.name}</li>
            <li>Giới tính: {this.state.gender}</li>
            <li>Ngày sinh {this.state.birthDate.join('/')}</li>
            <li>Email {this.state.email}</li>
            <li>Địa chỉ {this.state.address}</li>
        </ul>
        </>
    )
  }
}
