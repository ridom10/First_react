import React from 'react';

export default

class ButtonZ extends React.Component {
    constructor(props) {
        super(props);
        this.state = {isToggleOn: false};
        this.handleClick = this.handleClick.bind(this);
    }

    handleClick() {
        this.isToggleOn = !this.isToggleOn;
        if(this.isToggleOn)
            console.log("Is pressed");
        else
            console.log("Released");  
    }

    
    render() {
        let buttonName = "firstButton";
        let buttonID = "button1"
        return (<button id = {buttonID} class = {buttonName}
        onClick = {this.handleClick}>Hello</button>
        );
    }
}
