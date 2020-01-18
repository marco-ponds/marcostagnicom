import React from 'react';

export default class MapComponent extends React.Component {

    constructor(props) {
        super(props);
        this.state = { loaded: false };
    }

    componentDidMount() {

            import('mapbox-gl').then((mapbox) => {
                mapbox.accessToken = 'pk.eyJ1IjoibWFyY29zdGFnbmkiLCJhIjoiY2s1azBsdHBqMDhnazNlcWN6ZnEza2J3MSJ9.-A4uAbmAXAXcxgtEKI9ETw';
                const position = [-0.18, 51.50];
                const map = new mapbox.Map({
                    container: this.mapContainer,
                    style: 'mapbox://styles/mapbox/dark-v10',
                    center: position,
                    zoom: 12
                });
            })

    }

    render() {
        return <div className='map' ref={el => this.mapContainer = el }/>
    }
}
