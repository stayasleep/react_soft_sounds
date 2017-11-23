const defaultState = {
    sounds:[{name:'rain', volume: 0}, {name:'fire', volume: 0}]
};

export default function(state = defaultState,action){
    switch (action.type){
        default:
            return state;
    }
}
