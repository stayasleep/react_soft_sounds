import React, {Component} from 'react';
import Slider from 'material-ui/Slider';
import AudioPlayer from './audio';
import { Col } from 'react-bootstrap';

class Ambient extends Component{

    componentDidMount(){
        //we set the volume for all mounted audio to 0 as to not automatically start playing
        const audio = this.audioElement;
        audio.volume = 0;

    }

    componentWillReceiveProps(nextProps){
        console.log('nexoo',nextProps);
        const audio = this.audioElement;

        if(this.props.noise.volume !== nextProps.noise.volume){
            console.log('aduio vol',audio);
            audio.volume = nextProps.noise.volume;
            if(nextProps.noise.volume === 0){
                audio.currentTime = 0;
                audio.pause();
            }
        }

        if(this.props.play !== nextProps.play){
            if(nextProps.play){
                audio.play();
            }else{
                audio.pause();
            }
        }
    }
    componentWillUnmount(){
        console.log('dat unmount');
    }
    render(){
        return(
            <Col sm={3}>
                <div className="ambient-box">
                    <div className="ambient-img" >
                        <img src={this.props.noise.img}/>
                    </div>
                    <div className="ambient-title">
                        <h3 style={{textAlign: "center"}}>{this.props.noise.name}</h3>
                    </div>
                    <Slider
                        value={this.props.noise.volume}
                        //onChange={props.onSlider}
                        onChange={(index,value) => {this.props.onSlider(this.props.position,value)}}
                    />
                    <AudioPlayer
                        //inputRef={this.props.inputRef}
                        inputRef={el=>this.audioElement = el}
                        src={this.props.noise.src}
                    />
                </div>
            </Col>
        )
    }
}
export default Ambient;