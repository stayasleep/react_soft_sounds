import React, { Component } from 'react';
import Headers from '../component/home/headers';

class About extends Component{

    componentWillMount(){
        document.title = "About Page";
    }

    render(){
        return(
            <div className="container-fluid">
                <Headers/>
                this is the about page
            </div>
        )
    }
}

export default About;