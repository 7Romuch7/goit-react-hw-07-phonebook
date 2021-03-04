import { createReducer } from '@reduxjs/toolkit';
import { combineReducers } from "redux";
import actions from '../phonebook/phonebook-actions';

const items = createReducer([], {
    addContactSucces: (state, {payload}) => [payload, ...state],
    [actions.removeContact]: (state, {payload}) => state.filter(({ id }) => id !== payload)
})

const filter = createReducer('', {
    [actions.filterContact]: (_, {payload}) => payload,
})

export default combineReducers({
  items,
  filter,
});