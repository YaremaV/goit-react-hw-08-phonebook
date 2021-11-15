import { connect } from 'react-redux';
import contactsOperation from '../../redux/contacts/contacts-operations';
import './contactlist.css';
import contactsListSelector from '../../redux/contacts/contacts-selector';

function ContactsList({ contacts, onDeleteContacts }) {
  return (
    <ul className="contacts">
      {contacts.map(({ id, name, number }) => (
        <li key={id}>
          {name}:{number}
          <button
            type="button"
            className="TodoList__btn"
            onClick={() => onDeleteContacts(id)}
          >
            Delete
          </button>
        </li>
      ))}
    </ul>
  );
}

const mapStateToProps = state => ({
  contacts: contactsListSelector.getFilteredContacts(state),
});
const mapDispatchToProps = dispatch => ({
  fetchContacts: () => dispatch(contactsOperation.fetchContacts()),
  onDeleteContacts: id => dispatch(contactsOperation.deleteContacts(id)),
});

export default connect(mapStateToProps, mapDispatchToProps)(ContactsList);
