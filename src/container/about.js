import React, { Component } from 'react';

class About extends Component{

    componentWillMount(){
        document.title = "About Page";
    }

    render(){
        return(
            <div>
                this is the about page
            </div>
        )
    }
}

export default About;