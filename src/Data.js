import React from 'react';
class Data extends React.Component{
    constructor(){
        super();
        this.state={
            count:0
            }
        }
        countIncrement=()=>{
            this.setState({count:this.state.count+1});
    }
    render(){
        return(
            <div>
                <h1>{this.state.count}</h1>
                <button onClick={this.countIncrement}> countIncrement </button>
            </div>

        )
    }
}
export default Data;