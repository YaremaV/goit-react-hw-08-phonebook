import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import contactsOperation from './redux/contacts/contacts-operations';
import ContactsList from './components/Contactslist/Contactslist';
import Form from './components/Form/Form';
import Filter from './components/Filter/Filter';
import Layout from './components/Layout/Layout';

export default function App() {
  const dispatch = useDispatch();
  useEffect(() => dispatch(contactsOperation.fetchContacts())[dispatch]);

  return (
    <Layout>
      <Form />
      <Filter />
      <ContactsList />
    </Layout>
  );
}

// const mapDispatchToProps = dispatch => ({
//   fetchContacts: () => dispatch(contactsOperation.fetchContacts()),
// });

// export default connect(null, mapDispatchToProps)(App);
