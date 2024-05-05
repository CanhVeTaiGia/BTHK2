import React, { Component } from 'react'
import './App.css'

interface task{
  id: number,
  name: string,
  assign: string,
  status: boolean
}
export default class App extends Component {
  public state: task[];
  constructor(props: any) {
    super(props);
    this.state = [
      {
        id: Math.floor(Math.random() * 100000),
        name: 'task1',
        assign: 'user1',
        status: false,
      },
      {
        id: Math.floor(Math.random() * 100000),
        name: 'task2',
        assign: 'user2',
        status: false,
      }
    ];
  }
  render() {
    return (
      <>
        <table>
          <thead>
            <tr>
              <th>STT</th>
              <th>Người thực hiện</th>
              <th>Trạng thái</th>
              <th>Thời gian tạo</th>
              <th colSpan={2}>Chức năng</th>
            </tr>
          </thead>
          <tbody>
            {/* <tr>
              <th></th>
              <th></th>
              <th></th>
              <th></th>
              <th><button className='edit'>Sửa</button></th>
              <th><button className='delete'>Xóa</button></th>
            </tr> */}
            {this.state.map((item, index) =>{
              return(
              <tr key={item.id}>
                <td>{index + 1}</td>  
                <td>{item.name}</td>
                <td>{item.assign}</td>
                <td>{item.name}</td>
                <td>
                  <button className='edit'>Sửa</button>
                  <button className='delete'>Xóa</button>
                </td>
              </tr>
              )
            })}
          </tbody>
        </table>
      </>
    )
  }
}
