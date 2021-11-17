import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import contactsOperations from '../../redux/contacts/contacts-operations';
import ContactsList from '../../components/Contactslist/Contactslist';
import Filter from '../../components/Filter/Filter';
import Form from '../../components/Form/Form';

export default function Contacts() {
  const dispatch = useDispatch();
  useEffect(() => dispatch(contactsOperations.fetchContacts())[dispatch]);
  return (
    <>
      <Form />
      <Filter />
      <ContactsList />
    </>
  );
}
