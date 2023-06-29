import React from "react";

class Userclass extends React.Component{

    constructor(props){
        super(props);
           this.state={
            count : 0
           }
    }

  render(){

    const{name}=this.props;
    const{count}=this.state;
    return(
        <div className="User-card">
            <h1>{name}</h1>
            <div>{count}</div>
            <button onClick={()=> this.setState({
                count : this.state.count + 1,
            })}>increse counter</button>
        </div>
    )
  }
}

export default Userclass;