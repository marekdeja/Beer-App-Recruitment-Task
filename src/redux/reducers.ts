import { combineReducers } from 'redux';
import { SAVE_BEERS } from './actions'

export type RootState = ReturnType<typeof beerReducer>


const beerReducer = (state = [], action: { type: string; beers: any; }) => {
    switch (action.type) {
        case SAVE_BEERS:
            return action.beers;
        default:
            return state;
    }
};

export const reducers = combineReducers({ beerReducer });
