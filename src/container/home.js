import React, { Component } from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import Cancel from 'material-ui/svg-icons/navigation/cancel';
import Equalizer from 'material-ui/svg-icons/av/equalizer';
import PlayCircleOutline from 'material-ui/svg-icons/av/play-circle-outline';
import PauseCircleOutline from 'material-ui/svg-icons/av/pause-circle-outline';
import IconButton from 'material-ui/IconButton';
import Unmute from 'material-ui/svg-icons/av/volume-off';
import Mute from 'material-ui/svg-icons/av/volume-up'
import Headers from '../component/home/headers';
import Ambient from '../component/sound_generator/index';
import {grey500, grey100, grey900,grey700,grey200, grey400, grey300} from 'material-ui/styles/colors';
import {cancelMedia,changeVolume, togglePlay} from '../actions/index';

class Home extends Component{
    constructor(props){
        super(props);
        this.state={
            play: false,
            audio:0,
            mute: false
        };
        this.togglePlay = this.togglePlay.bind(this);
        this.handleCancel = this.handleCancel.bind(this);
        //this.handleAudio = this.handleAudio.bind(this);
        this.handleSlider = this.handleSlider.bind(this);
        this.toggleMute = this.toggleMute.bind(this);
    }

    componentDidMount(){
        // const audio = this.audioElement;
    }

    ahandleSlider(event, value){
        const audio = this.audioElement;
        if(value > 0){
            audio.volume = value;
        }else{
            audio.currentTime = 0;
            audio.volume =0;
            audio.pause();
        }

        console.log('audio',audio.volume,audio.currentTime);
        this.setState({audio: value});
    }

    handleCancel(){
        //reset everything to null
        const resetArr = this.props.sound.map((noise,index)=>{
            return {name: noise.name, volume: 0, src: noise.src, img: noise.img};
        });
        console.log('cancelled bub', resetArr);
        const resetObj = {play: false, sounds: resetArr};
        this.props.dispatch(cancelMedia(resetObj));
    }

    handleSlider(index,value){
        console.log('particular sound', index);
        console.log('its val,',value);
        const soundArr = this.props.sound.slice();
        let temp = Object.assign({},soundArr[index],{volume:value});
        console.log('temmmmmppppp',temp);
        soundArr[index]=temp;
        console.log('new temmmp',soundArr);
        this.props.dispatch(changeVolume(soundArr));

    }


    togglePlay(){
        //do api call
        const { play } = this.props;
        this.props.dispatch(togglePlay(!play));
        // this.setState({play: !this.state.play});
    }
    toggleMute(){
        this.setState({mute: !this.state.mute});
    }
    render(){
        console.log('home props',this.props);
        return(
            <div ref="ref1" className="container-fluid">
                <Headers>
                    <div className="player-mute">
                        <IconButton onClick={this.toggleMute} touch={true} tooltipPosition={'bottom-right'} tooltip={!this.state.mute ? "Mute": "Unmute"}>
                            {!this.state.mute ?
                                <Mute hoverColor={grey400} /> :
                                <Unmute hoverColor={grey400} />
                            }
                        </IconButton>
                    </div>
                </Headers>
                <div className="player-controls" style={{margin:"2em 0"}}>
                    <div className="randomizer" style={{alignSelf:"center"}}>
                        <IconButton iconStyle={{width: 60, height:60}}>
                            <Equalizer hoverColor={grey400}/>
                        </IconButton>
                    </div>
                    <div className="play stop">
                        <IconButton onClick={this.togglePlay} iconStyle={{width: 120, height: 120}} touch={true} tooltipPosition={'bottom-right'} tooltip={!this.props.play ? "Play": "Pause"}>
                            {!this.props.play ?
                                <PlayCircleOutline hoverColor={grey400}/> :
                                <PauseCircleOutline hoverColor={grey400} />
                            }
                        </IconButton>
                    </div>
                    <div className="reset" style={{alignSelf:"center"}}>
                        <IconButton onClick={this.handleCancel} iconStyle={{width:60, height:60}} tooltip="Cancel Mix" touch={true} tooltipPosition={'bottom-right'}>
                        <Cancel hoverColor={grey400} style={{width: 60, height:60}} />
                        </IconButton>
                    </div>
                </div>
                <div ref="ref2" className="row">
                    {this.props.sound.map((noise,index)=>{
                        return (
                            <Ambient
                                key={index}
                                position={index}
                                noise={noise}
                                play={this.props.play}
                                muted={this.state.mute}
                                //inputRef={el => this.audioElement=el}
                                onSlider={(index,value)=>this.handleSlider(index,value) }
                            />
                        )
                    })}
                </div>
            </div>
        )
    }
}

function mapStateToProps(state) {
    return {
        play: state.sound.play,
        sound: state.sound.sounds
    }
}
export default withRouter(connect(mapStateToProps)(Home));
