import './../App.css';
import React from 'react';
import Sidebar from '../components/Navigation/Sidebar.js';
import Sketch from './projects_code/spirograph.js';

class Projects extends React.Component {
    render() {
        return (
            <div name="projects-frame">
                <Sidebar></Sidebar>
                <Sketch></Sketch>
            </div>
            
        );
    }
}     

export default Projects;