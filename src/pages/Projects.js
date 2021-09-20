import './../App.css';
import React from 'react';
import { Route, Switch, Redirect } from 'react-router-dom';
import Sidebar from '../components/Navigation/Sidebar.js';
import Spirograph from './projects_code/spirograph.js';
import BezierAnimation from './projects_code/bezier_animation.js';

const linkList = [
    {
        topic: 'p5.js',
        links: [
            {
                link: '/projects/spirograph',
                description: 'Spirograph'
            },
            {
                link: '/projects/bezier_animation',
                description: 'Animated Bezier curve'
            }
        ]
    },
    {
        topic: 'Vega.js',
        links: [
            
        ]
    },
    {
        topic: 'Other',
        links: [
            
        ]
    }
]

export default class Projects extends React.Component {
    render() {
        return (
            <div name="projects-frame">
                <Sidebar
                    description="Content"
                    linkList={linkList}
                ></Sidebar>

                <Switch>
                    <Route exact path="/projects/spirograph" component={Spirograph} />
                    <Route exact path="/projects/bezier_animation" component={BezierAnimation} />
                    <Redirect from="/projects" to="/projects/spirograph" />
                </Switch>
            </div>
        );
    }
}
