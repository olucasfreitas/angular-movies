import { createAction, props } from '@ngrx/store';

export const add = createAction(
  '[Favorites Component] add',
  props<{ id: string }>()
);
export const remove = createAction(
  '[Favorites Component] remove',
  props<{ id: string }>()
);
