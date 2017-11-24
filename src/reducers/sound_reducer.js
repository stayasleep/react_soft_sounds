import Rain from './../sounds/rain-01.mp3';
import Fire from './../sounds/fire.mp3';
import Wind from './../sounds/wind.mp3';
// import rain from './../images/rain.svg';
import fire from './../images/fire.svg';
import rain from './../images/cloud.svg';
import {VOLUME_CHANGE} from '../actions/type';


const defaultState = {
    sounds:[
        {name:'rain', volume: 0, src: Rain, img: rain},
        {name:'fire', volume: 0, src: Fire, img: fire}
        ]
};

export default function(state = defaultState,action){
    switch (action.type){
        case VOLUME_CHANGE:
            console.log('dis action tho',action);
            return {...state, sounds:action.payload};
        default:
            return state;
    }
}
