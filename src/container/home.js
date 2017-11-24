import React, { Component } from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import Cancel from 'material-ui/svg-icons/navigation/cancel';
import Equalizer from 'material-ui/svg-icons/av/equalizer';
import PlayCircleOutline from 'material-ui/svg-icons/av/play-circle-outline';
import PauseCircleOutline from 'material-ui/svg-icons/av/pause-circle-outline';
import IconButton from 'material-ui/IconButton';
import Ambient from '../component/sound_generator/index';
import {changeVolume} from '../actions/index';

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
    componentWillUpdate(nextProps,nextState){
        const audio = this.audioElement;
        if(nextState.play){
            audio.play();
        }
        if(!nextState.play){
            audio.pause();
        }
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
        this.setState({play: !this.state.play});
    }
    render(){
        console.log('home props',this.props);
        return(
            <div ref="ref1" className="container-fluid">
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
                <div ref="ref2" className="row">
                    {/*<Ambient*/}
                        {/*inputRef={el=>this.audioElement = el}*/}
                        {/*noise="rain"*/}
                        {/*handleSlider={this.handleSlider}*/}
                        {/*volume={this.state.audio}*/}
                    {/*/>*/}
                    {this.props.sound.map((noise,index)=>{
                        return (
                            <Ambient
                                key={index}
                                position={index}
                                noise={noise}
                                inputRef={el => this.audioElement=el}
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
        sound: state.sound.sounds
    }
}
export default withRouter(connect(mapStateToProps)(Home));
