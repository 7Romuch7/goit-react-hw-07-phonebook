import { Component } from 'react';
import { connect } from "react-redux";
import Title from './Title';
import ContactForm from './ContactForm';
import ContactList from './ContactList';
import Filter from './Filter';
import { phonebookOperations, phonebookSelectors } from '../redux/phonebook';

class App extends Component {

  componentDidMount() {
    this.props.fetchContact();
  }

  render() {
    return (
      <div className="container" >
        <Title title='Phonebook'/>
        <ContactForm />
        <Filter />
        {this.props.isLoadingContacts && <h1>Loading...</h1>}
        <ContactList />
     </div>
    )
  }
}

const mapStateToProps = state => ({
  isLoadingContacts: phonebookSelectors.getLoading(state)
})

const mapDispatchToProps = dispatch => ({
fetchContact: () => dispatch(phonebookOperations.fetchContact())
})

export default connect( null, mapDispatchToProps )(App);
