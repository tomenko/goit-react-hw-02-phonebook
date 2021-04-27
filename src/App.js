import React, { Component } from 'react';
import shortid from 'shortid';
import ContactForm from './components/ContactForm'
import ContactList from './components/ContactList'
import Filter from './components/Filter'

class App extends Component {
  state = {
    contacts: [],
    filter: '',
  };

  formSubmitHandler = ({name, number}) => {
    const { contacts } = this.state;
    const entry = {
      id: shortid.generate(),
      name,
      number,
    };

    if (contacts.some(contact => contact.name === name)) {
      alert(`${name} already in the contacts.`);
      return;
    }

    this.setState(prevState => ({
      ...prevState,
      contacts: [entry, ...prevState.contacts],
    }));
  };

  hendleInputFilter = (event) => {
    const {value, name} = event.currentTarget;
    this.setState({[name]: value})
  }

  deleteContact = (contactId) => {
    this.setState(prevState => ({
      contacts: prevState.contacts.filter(contact => contact.id !== contactId)
    }));
  };

  
  getCurrentContacts = () => {
    const { contacts, filter } = this.state;
    const normalFilter = filter.toLowerCase();

    return contacts.filter(({ name }) =>
      name.toLowerCase().includes(normalFilter),
    );
  };

  render() {
      return (
      <>
        <h1>Phonebook</h1>
        <ContactForm onSubmitForm = {this.formSubmitHandler} />
        <h2>Contacts</h2>
        <Filter id={shortid.generate()} hendleInputFilter = {this.hendleInputFilter} />
        <ContactList contacts={this.getCurrentContacts}  onDeleteContact={this.deleteContact}/>
      </>
    )
  }
}



export default App;
