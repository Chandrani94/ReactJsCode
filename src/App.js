import React, { Component } from 'react'
import Rectangle from "./rectangle"
import "./App.css"

export default class App extends Component {
    state={
        btn: true,
        text:["Hello"],
        txtLength:0
    }
    handleClick = () =>{
        console.log("button clicked");
        this.setState({btn: false})
    }
    click= (num) =>{
        if(this.state.txtLength !== num)
        {
        this.state.text.push("Hello");
        this.setState({txtLength: this.state.txtLength+1})
        }
    }
    render() 
           {
           var tt = this.state.text;           
            console.log("TT",tt);
    
        return (
            <div>
                {/* <h1>Hello</h1>
                <h1>Hello Hello</h1>
                <h1>Hello Hello Hello</h1>
                <h1>Hello Hello Hello Hello</h1> */}
                <div>{tt}{this.click(3)}</div>
                <Rectangle btn={this.state.btn}/>
                <div className="container">
                <button onClick={(e)=>this.handleClick()}className="rect">Press</button>
                </div>
                <div className={(this.state.btn)? "hideText":"showText"}>Button Clicked</div>
            </div>
        )
    }
}
