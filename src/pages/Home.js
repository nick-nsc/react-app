import logo from './../images/logo.svg';
import './../App.css';
import React from 'react';

export default class Home extends React.Component {
    render() {
        return (
            <div>
                <header className="App-header">
                    <img src={logo} className="App-logo" alt="logo" />
                    <br></br>
                    <a
                        className="App-link"
                        href="https://reactjs.org"
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        Learn React
                    </a>
                    <br></br>
                    <a
                        className="App-link"
                        href="https://github.com/nick-nsc/react-app"
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        Find the repo here
                    </a>
                </header>
            </div>
        );
    }
}     
