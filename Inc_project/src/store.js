import {createStore,applyMiddleware, combineReducers} from 'redux';
import { counterReducer } from './reducers/counterReducer';
import thunk from 'redux-thunk';
//dev pluins
import { composeWithDevTools } from 'redux-devtools-extension';
import logger from 'redux-logger'

// const store = createStore(addReducer, composeWithDevTools(applyMiddleware(logger, thunk)));

// export default store;


const rootReducers = combineReducers({
    counter: counterReducer,
});

const store = createStore(rootReducers, composeWithDevTools(applyMiddleware(logger, thunk)));

export default store;