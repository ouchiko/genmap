import React, { Component } from 'react'
import Button from './htmlitems/Button';
import Mapping from './blocks/containers/Mapping';
import Block from './blocks/containers/Block';
import Position from './blocks/containers/Position';
/* Helpers */

/* CSS */
import {container, mapContainer, uiContainer} from "../css/Application.scss";

class Application extends Component {
    constructor(props, context) {
        super(props, context);
        this.state = {
            token: "pk.eyJ1Ijoic2NvdHRiZXJ3aWNrbG9uZG9udG93biIsImEiOiJjMVFnelBzIn0.jDehcQpMLsuwgNQP2Hafgg",
            latitude: 51,
            longitude: 0,
            zoom: 10,
            minZoom: 5,
            styleID: "mapbox://styles/scottberwicklondontown/ciwxa4nns00hm2ppv9iltdizw"
        };
    }

    actionButtonChangeMapStyle() {
        this.setState({
            styleID: "mapbox://styles/scottberwicklondontown/cjc9c5vt90naj2srvv307l8nf"
        });
    }

    render() {
        /**
         * Mapping - A MAPBOX implementation within a react component.
         * Position - A defined area in a specific location, It can contain 1..N elements.
         * Block - A system defined content block with unknown child elements of 1..N
         * A position is created and you may include a number of blocks
         * which will be vertically stacked on top of each other.
         *  Position
         *      Block
         *      Block
         *      Block
         */
        return (
            <div className={container}>
                <div className={mapContainer}>
                    <Mapping
                        token={this.state.token}
                        longitude={this.state.longitude}
                        latitude={this.state.latitude}
                        zoom={this.state.zoom}
                        minZoom={this.state.minZoom}
                        styleID={this.state.styleID}
                    />
                </div>
                <div className={uiContainer}>
                    <Position left="20" top="80" width="300">
                        <Block title="YOUR MAP">
                            <div>Hello World</div>
                            <Button title="Nice"/>
                        </Block>
                        <Block title="CUSTOMER SERVICE" excludeHeader={true}>
                            <div>Hello World</div>
                            <Button title="Nice"/>
                        </Block>
                    </Position>
                    <Position right="20" top="80" width="300">
                        <Block title="YOUR RETAURANTS">
                            <div>Hello World</div>
                            <Button title="Nice"/>
                        </Block>
                    </Position>
                    <Button title="Yes!" classOption="btn-green" buttonAction={this.actionButtonChangeMapStyle.bind(this)} status={false} datavalue="some_id"/>
                </div>
            </div>
        )
    }
}

export default Application;
