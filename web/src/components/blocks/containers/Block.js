import React, { Component } from 'react'

 /* Helpers */

 /* CSS */
 import {block, blockHead, blockContent} from "../../../css/htmlitems/Block.scss";

 class Block extends Component {
 	constructor(props, context) {
 		super(props, context);
 		this.state = {};
 	}

 	render() {
        let blockHeading = (!this.props.excludeHeader) ?
            <div className={blockHead}>{this.props.title}</div> : null;

 		return (
     	    <div className={block}>
                {blockHeading}
                <div className={blockContent}>
                    {this.props.children}
                </div>
            </div>
 		)
 	}
 }

 export default Block;
