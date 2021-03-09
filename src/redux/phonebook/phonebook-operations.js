import axios from 'axios';
import {
  addContactRequest,
  addContactSuccess,
  addContactError,
  removeContactRequest,
  removeContactSuccess,
  removeContactError,
  fetchContactRequest,
  fetchContactSuccess,
  fetchContactError,
} from './phonebook-actions'

axios.defaults.baseURL = 'http://localhost:4040';

const fetchContact = () => async dispatch => {
    dispatch(fetchContactRequest());
    
    try {
        const { data } = await axios.get('/contacts');
        dispatch(fetchContactSuccess(data));
    } catch (error) {
        dispatch(fetchContactError(error.message));
    }
};

const addContact = ({ name, number }) => async dispatch => {
    dispatch(addContactRequest())

    try {
        const contact = { name, number }
        const { data } = await axios.post('/contacts', contact);
        dispatch(addContactSuccess(data));
    } catch (error) {
        dispatch(addContactError(error.message));
    }
}

const removeContact = contactId => async dispatch => {
    dispatch(removeContactRequest());

    try {
        const {_} = await axios.delete(`/contacts/${contactId}`);
        dispatch(removeContactSuccess(contactId));
    } catch (error) {
        dispatch(removeContactError(error.message));
    }
}

export default {
    fetchContact,
    addContact,
    removeContact
}