import { createAction } from '@reduxjs/toolkit';
//import shortid from 'shortid';

export const addContactRequest = createAction('contacts/addContactRequest');
export const addContactSuccess = createAction('contacts/addContactSuccess');
export const addContactError = createAction('contacts/addContactError');

export const removeContactRequest = createAction('contacts/removeContactRequest');
export const removeContactSuccess = createAction('contacts/removeContactSuccess');
export const removeContactError = createAction('contacts/removeContactError');

export const fetchContactRequest = createAction('contacts/fetchContactRequest');
export const fetchContactSuccess = createAction('contacts/fetchContactSuccess');
export const fetchContactError = createAction('contacts/fetchContactError');

/* const addContact = createAction('phonebook/Add', (name, number) => ({
     payload: { id: shortid.generate(), name, number},
})); */

/* const removeContact = createAction('phonebook/Delete'); */

export const filterContact = createAction('phonebook/Filter');