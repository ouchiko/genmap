import React, { Component } from 'react'

import {map} from "../../../css/htmlitems/Map.scss";

class Mapping extends Component {
    constructor(props, context) {
        super(props, context);
        this.state = {};
    }


    componentDidMount() {
        const { token, longitude, latitude, zoom, minZoom, styleID } = this.props;

        const mapConfig = {
            container: 'map',
            style: this.props.styleID,
            center: [longitude, latitude],
            zoom: zoom
        };
        if(this.props.pitch) mapConfig['pitch'] = this.props.pitch;
        if(this.props.bearing) mapConfig['bearing'] = this.props.bearing;

        mapboxgl.accessToken = token;

        this.map = new mapboxgl.Map(mapConfig);
    }

    componentDidUpdate(prevProps, prevState) {
        if (prevProps.styleID !== this.props.styleID) {
            this.map.setStyle(this.props.styleID);
        }
    }

    render() {
        return (
            <section className="map--container">
                <div id="map" className={map}></div>
            </section>
        )
    }
}

export default Mapping;
