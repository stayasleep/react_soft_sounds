import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';
import Cancel from 'material-ui/svg-icons/navigation/cancel';
import Equalizer from 'material-ui/svg-icons/av/equalizer';
import PlayCircleOutline from 'material-ui/svg-icons/av/play-circle-outline';
import PauseCircleOutline from 'material-ui/svg-icons/av/pause-circle-outline';
import IconButton from 'material-ui/IconButton';

class Home extends Component{
    constructor(props){
        super(props);
        this.state={
            play: false,
        };
        this.togglePlay = this.togglePlay.bind(this);
    }

    togglePlay(){
        //do api call
        this.setState({play: !this.state.play});
    }
    render(){
        console.log('state',this.state);
        const {play} = this.state.play;
        return(
            <div>
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
                <div>

                    NOISE COMPONENTS HERE
                </div>
            </div>
        )
    }
}

export default withRouter((Home));