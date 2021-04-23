import React, { Component } from 'react'
import Carousal from 'react-elastic-carousel'
export default class Carousall extends Component {
    state={
        items:[
            {id:1,image:'item1'},
            {id:2,image:'item1'},
            {id:3,image:'item1'},
            {id:4,image:'item1'},
            {id:5,image:'item1'},
            {id:6,image:'item1'},
            {id:7,image:'item1'},
            {id:8,image:'item1'},
            {id:9,image:'item1'},
            {id:10,image:'item1'},
            {id:11,image:'item1'},
            {id:12,image:'item1'}






        ]
    }
    render() {
        const {items} =this.state;
        return (
            <div>
                <Carousall>
                    {items.map(item=> <div key={item.id}>{item.title}</div>)}
                </Carousall>
            </div>
        )
    }
}
