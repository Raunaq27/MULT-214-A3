import React from "react";

class NewsItems extends React.Component {
    render(){
        return (
            <>
            <h2>{this.props.title}</h2>
            <img src={this.props.imageUrl} alt=""/>
            <p>{this.props.paraText}</p>
            <hr />
            </>
        );
    }
}

export default NewsItems