import { Component } from "react";
import { createPortal } from "react-dom";
const rootModal = document.getElementById("root-modal")

class Modal extends Component {
  state = {
    name: "",
  };

  componentDidMount() {
    window.addEventListener("keydown", this.handleEscClose);
  }



  componentWillUnmount() {
    window.removeEventListener("keydown", this.handleEscClose);
  }

  handleEscClose = (evt) => {
    if (evt.code === "Escape") {
      this.props.closeModal();
    }
  };

  handleBackdropClose = (evt) => {
    if (evt.target === evt.currentTarget) {
      this.props.closeModal();
    }
  };

handleSubmit = (evt)=>{
  evt.preventDefault()
  this.props.onName(this.state.name)
  this.setState({
    name: ""
  })
  this.props.closeModal()
}



  render() {
    const { closeModal } = this.props;

    return (
      createPortal( <div
        className="fixed top-0 right-0 left-0 bottom-0 bg-red-200/50 flex justify-center items-center"
        onClick={this.handleBackdropClose}
      >
        <div className="flex justify-center items-center flex-col gap-4 h-64 w-96 rounded-xl bg-white shadow-lg relative">
          <button
            type="button"
            className="w-10 absolute top-0 right-3"
            onClick={closeModal}
          >
            X
          </button>

          <form onSubmit={this.handleSubmit} ><input
          className="block w-full text-white outline-blue-800 border-none outline-solid rounder-lg bg-blue-500"
            type="text"
            placeholder="Enter your name"
            value={this.state.name}
            onChange={(evt) =>
              this.setState({
                name: evt.target.value,
              })
            }
          />
          <button  className=" mt-4 h-10 w-30 rounded-xl bg-blue-500 px-4 py-2 text-white font-bold text-white shadow-lg hover:bg-blue-600 transition-colors" type="submit">Sent</button>
       </form>
           </div>
      </div>, rootModal)
     
    );
  }
}

export default Modal;
