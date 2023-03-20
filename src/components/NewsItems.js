import React from "react";

class NewsItems extends React.Component {
    render(){
        return (
            <>
            <h2>{this.props.title}</h2>
            </>
        );
    }
}

export default NewsItems