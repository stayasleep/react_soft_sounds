import React from 'react';
import Rain from '../../sounds/rain-01.mp3';

const AudioPlayer = (props) =>{
    console.log('audio',props);
    return(
        <audio
            //ref={(ref)=>{this.audioElement = ref;}}
            loop={true}
            //src="../../sounds/rain-01.mp3"
            ref={props.inputRef}
            src={Rain}
        />
    )
};

export default AudioPlayer;