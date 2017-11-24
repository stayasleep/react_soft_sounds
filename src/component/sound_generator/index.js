import React from 'react';
import Slider from 'material-ui/Slider';
import AudioPlayer from './audio';
import { Col } from 'react-bootstrap';

const Ambient = (props) =>{
    console.log('proppy',props);
    return(
        <Col sm={3}>
        <div className="ambient-box">
            <div className="ambient-img" style={{backgroundImage: `url(../../images/${props.noise}.svg)`}}>
                <img src={props.noise.img}/>
            </div>
            <div className="ambient-title">
                <h1>{props.noise.name}</h1>
            </div>
            <Slider
                value={props.noise.volume}
                //onChange={props.onSlider}
                onChange={(index,value) => {props.onSlider(props.position,value)}}
                //onChange={}

            />
            <AudioPlayer
                inputRef={props.inputRef}
                src={props.noise.src}
            />
        </div>
        </Col>
    )
};

export default Ambient;