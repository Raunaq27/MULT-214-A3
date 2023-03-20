import React from "react";


class Header extends React.Component {
    render() {
      return (<header>
        <h1>{this.props.title}</h1>
        <p>{this.props.message}</p>
      </header>);
    }
  }
  
  export default Header