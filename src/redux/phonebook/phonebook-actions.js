import { createAction } from '@reduxjs/toolkit';
//import shortid from 'shortid';



const addContactRequest = createAction('contacts/addContactRequest');
const addContactSuccess = createAction('contacts/addContactSuccess');
const addContactError = createAction('contacts/addContactError');

/* const addContact = createAction('phonebook/Add', (name, number) => ({
     payload: { id: shortid.generate(), name, number},
})); */

const removeContact = createAction('phonebook/Delete');

const filterContact = createAction('phonebook/Filter');

export default {addContactRequest, addContactSuccess, addContactError, removeContact, filterContact}