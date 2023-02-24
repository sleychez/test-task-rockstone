import {combineReducers, createStore } from "redux"
import nominalVarsReducer from './vars-reducer';

let reducers = combineReducers(
    {
        nominalVars: nominalVarsReducer
    }
)

const store = createStore(reducers)

export default store;