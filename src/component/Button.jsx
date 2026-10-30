import { Component } from "react";
class Button extends Component {
  render() {
    const {onOpen} = this.props
        return (
      <>
                 <button type="button" onClick={()=>onOpen()} className="h-10 w-30 rounded-xl bg-blue-500 px-4 py-2 text-white font-bold text-white mx-auto shadow-lg hover:bg-blue-600 transition-colors">Modal</button>
          
      </>
    );
  }
}

export default Button;
