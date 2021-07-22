import { createStore, combineReducers, applyMiddleware } from 'redux';
import searchReducer from './search-reducer';
import thunkMiddleware from 'redux-thunk';

let rootReducer = combineReducers({
    search: searchReducer,
});

type PropertiesTypes<T> = T extends { [key: string]: infer U } ? U : never;
export type InferActionsTypes<T extends { [key: string]: (...args: any[]) => any }> = ReturnType<PropertiesTypes<T>>

type RootReducerType = typeof rootReducer;
export type AppStateType = ReturnType<RootReducerType>

let store = createStore(rootReducer, applyMiddleware(thunkMiddleware));

export default store;