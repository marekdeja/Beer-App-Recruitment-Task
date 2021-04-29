import {
    createStore,
} from 'redux';
import { reducers } from './reducers';
export type AppDispatch = typeof store.dispatch

export function configureStore(initialState = {}) {
    const store = createStore(
        reducers,  initialState, 
        (window as any).__REDUX_DEVTOOLS_EXTENSION__ && (window as any).__REDUX_DEVTOOLS_EXTENSION__()
    );
    return store;
};

export const store = configureStore();