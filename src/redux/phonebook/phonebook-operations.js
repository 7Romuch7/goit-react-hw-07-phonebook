import axios from 'axios';
import actions from './phonebook-actions'

axios.default.baseURL = 'http://localhost:3000';

const addContact = (name, number) => dispatch => {
    const contact = { name, number, completed: false }
    dispatch(actions.addContactRequest())
    axios
        .post('/contacts', contact)
        .then(({ data }) =>
            dispatch({ type: 'contacts/addContactSuccess', payload: data }))
        .catch(error => dispatch({ type: 'contacts/addContactError', payload: error }))
}