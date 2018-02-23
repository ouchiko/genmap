import React, { Component } from 'react'

 /* Helpers */

 /* CSS */

 class Position extends Component {
 	constructor(props, context) {
 		super(props, context);
 		this.state = {};
 	}

    getStyles() {
        const { left, top, right, width } = this.props;
        let styleSet = {
            position:"fixed",
        };
        if (parseInt(left)>0) {
            styleSet.left = left + "px";
        }
        if (parseInt(top)>0) {
            styleSet.top = top + "px";
        }
        if (parseInt(right)>0) {
            styleSet.right = right + "px";
        }
        if (parseInt(width)>0) {
            styleSet.width = width + "px";
        }
        return styleSet;
    }

 	render() {
        let styleSet = this.getStyles();
 		return (
     		<div data-name="Position" style={styleSet}>
                {this.props.children}
            </div>
 		)
 	}
 }

 export default Position;
