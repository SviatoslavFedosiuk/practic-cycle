import './App.css'
import Modal from './component/modal';
import Button from './component/Button';
import Title from './component/Title';
import { Component } from "react";


class App extends Component{

// стейт
  state = {
    isModal: false,
    name: "",
  }

componentDidMount(){
  const userName = localStorage.getItem("name")
  this.setState({
    name: userName || ""
  })
}

componentDidUpdate(_, prevState){
  if (prevState.name !== this.state.name) {
     localStorage.setItem("name", this.state.name)

  }
 }

// функції
  handleToggleModal = ()=>{
    this.setState((prev)=>({
      isModal: !prev.isModal
    }))
  }
  handleName = (text) =>{
    this.setState({
      name: text,
    })
  }


  render(){

// деструктурізація
    const {isModal} = this.state

console.log(this.state.name);

// ретурн
    return(
      <>
      {!this.state.name ? <Button onOpen={this.handleToggleModal }/> : ""}
      <Title name={this.state.name}/>
      {isModal && <Modal closeModal={this.handleToggleModal} onName={this.handleName}/>}
      </>
    )
  }
}

export default App