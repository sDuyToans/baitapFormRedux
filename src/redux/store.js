import { createStore } from 'redux'
import { rootReducer } from './rootReducer.config'


export const store = createStore(rootReducer, window.__REDUX_DEVTOOLS_EXTENTION__ && window.__REDUX_DEVTOOLS_EXTENSION__());