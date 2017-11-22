import {combineReducers} from 'redux';
import soundReducer from './sound_reducer';

const rootReducer = combineReducers({
    sound: soundReducer
});

export default rootReducer;