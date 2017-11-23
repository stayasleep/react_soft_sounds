import React from 'react';
import Slider from 'material-ui/Slider';
import AudioPlayer from './audio';
import Noise from '../../images/rain.svg';

const Ambient = (props) =>{
    return(
        <div className="ambient-box">
            <div className="ambient-img" style={{backgroundImage: `url(../../images/${props.noise}.svg)`}}>
                <img src={Noise}/>
            </div>
            <div className="ambient-title">
                <h1>{props.noise}</h1>
            </div>
            <Slider
                value={props.volume}
                onChange={props.handleSlider}
            />
            <AudioPlayer
                inputRef={props.inputRef}
            />
        </div>
    )
};

export default Ambient;