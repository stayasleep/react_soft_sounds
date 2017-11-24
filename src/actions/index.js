import {VOLUME_CHANGE} from './type';

export const changeVolume = (volumeObj) =>({
    type:VOLUME_CHANGE,
    payload: volumeObj
});