import React from 'react';
import { Link } from 'react-router-dom'
import './style.css';


const Headers = (props) => {
    return (
        <div className="row">
            <div className="headers" style={{display:"flex", flexDirection:"row",justifyContent:"space-between"}}>
            {props.children}
            <ul style={{listStyleType:"none",margin:0,padding:0}}>
                <li><Link to="/">Home</Link></li>
                <li><Link to="/about">About</Link></li>
            </ul>
            {/*<h1>Ambient Sounds</h1>*/}
            {/*<p>Mix and match the sounds you want and then play!</p>*/}
            </div>
        </div>
    )
};

export default Headers;