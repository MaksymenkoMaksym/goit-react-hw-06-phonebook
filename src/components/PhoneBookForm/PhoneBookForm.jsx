import PropTypes from 'prop-types';
import React, { Component } from 'react';
import { Form } from './PhoneBookForm.styled';
import { Button } from 'components/ContactsList/ContactList.styled';
import InputName from '../InputName/InputName';

class PhoneBookForm extends Component {
  state = {
    name: '',
    number: '',
  };

  handleSubmit = e => {
    e.preventDefault();
    this.props.onInputContact(this.state);
  };
  handleChange = evt => {
    this.setState({ [evt.target.name]: evt.target.value });
  };
  render() {
    return (
      <Form onSubmit={this.handleSubmit}>
        <InputName
          type="text"
          name="name"
          title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
          pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
          mainTitle="Name"
          defaultValue="Bob"
          value={this.state.name}
          handleChange={this.handleChange}
        />
        <InputName
          type="tel"
          name="number"
          title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
          pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
          mainTitle="Number"
          defaultValue="+1"
          value={this.state.number}
          handleChange={this.handleChange}
        />
        <Button type="submit">Add Contact</Button>
      </Form>
    );
  }
}

PhoneBookForm.propTypes = {
  onInputContact: PropTypes.func.isRequired,
};
export default PhoneBookForm;
