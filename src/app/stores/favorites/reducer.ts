import { createReducer, on } from '@ngrx/store';
import { add, remove } from './actions';

export const initialState: string[] = [];

export const favoritesReducer = createReducer(
  initialState,
  on(add, (state, { id }) => {
    return [...state, id];
  }),
  on(remove, (state, { id }) => {
    return state.filter((favorite) => favorite !== id);
  })
);
