import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';
import Cancel from 'material-ui/svg-icons/navigation/cancel';
import Equalizer from 'material-ui/svg-icons/av/equalizer';
import PlayCircleOutline from 'material-ui/svg-icons/av/play-circle-outline';
import PauseCircleOutline from 'material-ui/svg-icons/av/pause-circle-outline';
import IconButton from 'material-ui/IconButton';
import Ambient from '../component/sound_generator/index';

class Home extends Component{
    constructor(props){
        super(props);
        this.state={
            play: false,
            audio:0,
        };
        this.togglePlay = this.togglePlay.bind(this);
        //this.handleAudio = this.handleAudio.bind(this);
        this.handleSlider = this.handleSlider.bind(this);
    }

    componentDidMount(){
        // const audio = this.audioElement;
    }
    handleSlider(event, value){
        const audio = this.audioElement;
        if(value > 0){
            audio.currentTime=0;
            audio.volume = value;
            //audio.play();

        }else{
            audio.currentTime = 0;
            audio.volume =0;
            audio.pause();
        }
        if(this.state.play){
            audio.play();
        }
        console.log('audio',audio.volume,audio.currentTime);
        this.setState({audio: value});
    }


    togglePlay(){
        //do api call
        this.setState({play: !this.state.play});
    }
    render(){
        console.log('home props',this);
        return(
            <div ref="ref1">
                <div className="player-controls" style={{margin:"2em 0"}}>
                    <div className="randomizer" style={{alignSelf:"center"}}>
                        <IconButton iconStyle={{width: 60, height:60}}>
                            <Equalizer />
                        </IconButton>
                    </div>
                    <div className="play stop">
                        <IconButton onClick={this.togglePlay} iconStyle={{width: 120, height: 120}}>
                            {!this.state.play ?
                                <PlayCircleOutline/> :
                                <PauseCircleOutline/>
                            }
                        </IconButton>
                    </div>
                    <div className="reset" style={{alignSelf:"center"}}>
                        <Cancel style={{width: 60, height:60}} />
                    </div>
                </div>
                <div ref="ref2">
                    <Ambient
                        inputRef={el=>this.audioElement = el}
                        noise="rain"
                        handleSlider={this.handleSlider}
                        volume={this.state.audio}
                    />
                    {/*{this.handleAudio()}*/}
                </div>
            </div>
        )
    }
}

export default withRouter((Home));