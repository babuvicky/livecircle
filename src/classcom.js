import React from "react";
// import Img1 from "./img1.jfif";
// import Img2 from "./img2.jfif";

class Name extends React.Component{
    constructor(){
        super();
        this.state={count:0,increment:'+',decrement:'-',reset:"Reset"}
        this.check= this.Increce.bind(this);
    }
    Increce(){
        this.setState({increment:this.state.count+1,decrement:this.state.count-1,reset:0});

        
    }
    render(){
        return(
            <>
            <button onClick={this.check}>{this.state.increment} </button>
            <button onClick={this.check}>{this.state.count} </button>
            <button onClick={this.check}>{this.state.decrement} </button>
            <button onClick={this.check}>{this.state.reset}</button>
            </>
        
            
           
        );
    }
}
export default Name;