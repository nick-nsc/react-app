import '../../App.css';
import './Sidebar.css';
import React from 'react';
import { Link } from 'react-router-dom';

const Sidebar = ({description, ...other}) => {

    return(
        <div className="Sidebar">
            <h2>{description}</h2>
            <ul>
                <li>p5.js</li>
                    <ul>
                        <li><Link to="/projects/spirograph">Spirograph</Link></li>
                        <li><Link to="/projects/bezier_animation">Animated Bezier curve</Link></li>
                    </ul>
                <li>Vega.js</li>
                <li>Other</li>
            </ul>
        </div>
    )
}

export default Sidebar;