import React from "react";

export default class Livecricle extends React.Component{
    constructor(){
        super();
        this.state={ colorChange:"yellow", status:true };
        
    }
    handleClick() {
        this.setState({status:!this.state.status});
    }
    componentDidMount(){
         setTimeout(()=> {
            this.setState({colorChange:"crimson"})
         },2000)
    }
    render(){
        return(
            <>
            <h1 style={{
                fontSize:"80px",
                backgroundColor:this.state.colorChange,
            }}>
                {" "}
                Check life Cycle {" "}
            </h1>

            <div>
                <button onClick={this.handleClick}> Remove Heading</button>
                <span> 1 </span>
            </div>
            </>
        );
    }

}