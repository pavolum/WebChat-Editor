import { createStore, applyMiddleware } from 'redux';
import { reducers } from '../../rootReducer';
import { initialAppState } from './reduxState';
import { composeWithDevTools } from 'redux-devtools-extension';

export const store = createStore(reducers, initialAppState, composeWithDevTools());
