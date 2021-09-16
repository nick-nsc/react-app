import '../../App.css';
import './Sidebar.css';
import React from 'react';

class Sidebar extends React.Component {
    render() {
        return(
            <div className="Sidebar">
                <h2>Content</h2>
                <ul>
                    <li>p5.js</li>
                    <li>Vega.js</li>
                    <li>Other</li>
                </ul>
            </div>
        )
    }
}

export default Sidebar;