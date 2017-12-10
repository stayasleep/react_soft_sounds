import React from 'react';

const AudioPlayer = (props) =>{
    console.log('audio',props);
    return(
        <audio
            loop={true}
            ref={props.inputRef}
            src={props.src}
            muted={props.muted}

        />
    )
};

export default AudioPlayer;