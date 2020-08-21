import React, { Component } from 'react'
import "./App.css"

export default class Rectangle extends Component {
    render() {
        console.log(this.props.btn)
        return (
            <div className="container">
                <div className={(this.props.btn) ? "redBackGround" : "greenBackGround"}>
                </div>
                
            </div>
        )
    }
}
