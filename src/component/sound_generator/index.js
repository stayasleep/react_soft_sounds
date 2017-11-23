import React from 'react';
import Slider from 'material-ui/Slider';
import AudioPlayer from './audio';
import rain from '../../images/rain.svg';

const Ambient = (props) =>{
    console.log('proppy',props);
    return(
        <div className="ambient-box">
            <div className="ambient-img" style={{backgroundImage: `url(../../images/${props.noise}.svg)`}}>
                <img src={rain}/>
            </div>
            <div className="ambient-title">
                <h1>{props.noise.name}</h1>
            </div>
            <Slider
                value={props.noise.volume}
                onChange={props.handleSlider}
            />
            <AudioPlayer
                inputRef={props.inputRef}
            />
        </div>
    )
};

export default Ambient;