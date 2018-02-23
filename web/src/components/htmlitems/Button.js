import React, { Component } from 'react'

 /* Helpers */

 /* CSS */
 import {btnActive, btn} from "../../css/htmlitems/Button.scss";

 class Button extends Component {

    constructor(props, context) {
        super(props, context);
        this.state = {
            active: this.props.status
        };
    }

    buttonClickAction(event) {
        this.setState({
            active: true
        });
        if (this.props.buttonAction) {
            this.props.buttonAction(event);
        }
    }

    render() {
        let buttonClassString = `${btn} ${this.props.classOption}`;
        if (this.state.active === true) {
            buttonClassString += ` ${btnActive}`;
        }
        return (
            <button data-value={this.props.datavalue} className={buttonClassString} onClick={this.buttonClickAction.bind(this)}>{this.props.title}</button>
        )
    }
 }

 export default Button;
