import Rain from './../sounds/rain-01.mp3';
import Fire from './../sounds/fire.mp3';
import Wind from './../sounds/wind.mp3';
// import rain from './../images/rain.svg';
import fire from './../images/fire.svg';
import rain from './../images/cloud.svg';
import {CANCEL_ALL,TOGGLE_PLAY,VOLUME_CHANGE} from '../actions/type';


const defaultState = {
    sounds:[
        {name:'rain', volume: 0, src: Rain, img: rain},
        {name:'fire', volume: 0, src: Fire, img: fire}
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
            console.log('dis action tho',action);
            return {...state, sounds:action.payload};
        default:
            return state;
    }
}
