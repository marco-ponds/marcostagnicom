import React from 'react';

const POSITION = [-0.18, 51.50];

export default class MapComponent extends React.Component {

    componentDidMount() {
            import('mapbox-gl')
                .then((mapbox) => {
                mapbox.accessToken = 'pk.eyJ1IjoibWFyY29zdGFnbmkiLCJhIjoiY2s1azBsdHBqMDhnazNlcWN6ZnEza2J3MSJ9.-A4uAbmAXAXcxgtEKI9ETw';
                new mapbox.Map({
                    container: this.mapContainer,
                    style: 'mapbox://styles/mapbox/dark-v10',
                    center: POSITION,
                    zoom: 12
                });
            })
    }

    render() {
        return <div className='map' ref={el => this.mapContainer = el }/>
    }
}
