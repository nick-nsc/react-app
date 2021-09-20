import '../../App.css';
import './Sidebar.css';
import React from 'react';
import { Link } from 'react-router-dom';

const Sidebar = ({description, linkList, ...other}) => {
    //evaluate the given linkList, return a <ul> for each topic with their links
    return(
        <div className="Sidebar">
            <h2>{description}</h2>
            {linkList.map((item) => {
                return (
                    <ul>
                        <li>{item['topic']}</li>
                            <ul>
                                {item['links'].map((link) => {
                                    return(
                                        <li><Link to={link['link']}>{link['description']}</Link></li>
                                    )                                        
                                })}
                            </ul>    
                    </ul>
                )
            })}
        </div>
    )
}

export default Sidebar;