import { createStore, combineReducers } from 'redux';

import userReducer from './reducers/user'
import programReducer from "./reducers/programs"

const allReducers = combineReducers({ userReducer,programReducer })

let store = createStore(allReducers);

window.store = store

export default store