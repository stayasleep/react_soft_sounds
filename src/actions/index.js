import {CANCEL_ALL,TOGGLE_PLAY,VOLUME_CHANGE} from './type';

export const cancelMedia = (cancelCurrent) =>({
    type: CANCEL_ALL,
    payload: cancelCurrent
});

export const changeVolume = (volumeObj) =>({
    type:VOLUME_CHANGE,
    payload: volumeObj
});

export const togglePlay = (playMedia) =>({
    type: TOGGLE_PLAY,
    payload: playMedia
});