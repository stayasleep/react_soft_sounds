import Rain from './../sounds/rain-01.mp3';
import Fire from './../sounds/fire.mp3';
import Wind from './../sounds/wind.mp3';
import Crowd from './../sounds/crowd-talking-9.mp3';
import WhiteNoise from './../sounds/white_noise.mp3';
import Lawn from './../sounds/grass.mp3';
import Heart from './../sounds/heartbeat-01a.mp3';
import fire from './../images/fire.svg';
import rain from './../images/raining.svg';
import wind from './../images/wind.svg';
import heart from './../images/heart.svg';
import conversation from './../images/conversation.svg';
import thunder from './../images/thunder.svg';
import lawn from './../images/trees.svg';
import white_nosie from './../images/whitenoise.svg';
import {CANCEL_ALL,TOGGLE_PLAY,VOLUME_CHANGE} from '../actions/type';


const defaultState = {
    sounds:[
        {name:'rain', volume: 0, src: Rain, img: rain},
        {name:'fire', volume: 0, src: Fire, img: fire},
        {name: 'wind', volume: 0, src: Wind, img: wind},
        {name: 'white noise', volume:0, src: WhiteNoise, img: white_nosie},
        {name:'landscaping', volume: 0, src: Lawn, img: lawn},
        {name: 'crowd talking', volume: 0, src: Crowd, img: conversation },
        {name: 'heart beat', volume: 0, src: Heart, img: heart}
        ],
    play: false,
};

export default function(state = defaultState,action){
    switch (action.type){
        case CANCEL_ALL:
            return {...state, play: action.payload.play, sounds: action.payload.sounds};
        case TOGGLE_PLAY:
            return {...state, play: action.payload};
        case VOLUME_CHANGE:
            return {...state, sounds:action.payload};
        default:
            return state;
    }
}
