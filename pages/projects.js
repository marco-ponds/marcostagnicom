import React from 'react';
import Layout from '../app/Layout';
import ProjectsList from '../app/projects/Projects';

import "antd/dist/antd.min.css";

class Projects extends React.Component {

    render() {
        return (
            <div>
                <link href='https://api.tiles.mapbox.com/mapbox-gl-js/v0.39.1/mapbox-gl.css' rel='stylesheet' />
                <Layout>
                    <ProjectsList />
                </Layout>
            </div>
        )
    }
}

export default Projects;
