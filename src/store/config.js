import {createStore} from 'redux';
import rootReducer from '../reducers/index';

const configureStore = () => {
    // const sagaMiddleware = createSagaMiddleware();
    return{
        ...createStore(rootReducer),
        //runSaga: sagaMiddleware.run(rootSaga)
    };
};

export default configureStore;