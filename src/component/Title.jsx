import { Component } from "react";
class Title extends Component{
render(){

    return(
        <>
        <h1>Hello, {this.props.name ? this.props.name : "NN"}</h1>
        </>
    )
}
}
export default Title