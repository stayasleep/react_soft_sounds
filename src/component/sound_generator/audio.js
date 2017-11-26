import React from 'react';

const AudioPlayer = (props) =>{
    console.log('audio',props);
    return(
        <audio
            loop={true}
            ref={props.inputRef}
            src={props.src}

        />
    )
};

export default AudioPlayer;