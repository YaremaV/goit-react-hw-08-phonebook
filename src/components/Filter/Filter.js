import React from 'react';
import { connect } from 'react-redux';
import s from './filter.module.css';
import { filterContacts } from '../../redux/contacts/contacts-actions';
import filterSelector from '../../redux/contacts/contacts-selector';

function Filter({ value, onHandleFilter }) {
  return (
    <>
      <h2>Contacts</h2>
      <label className={s.filter}>
        Find contacts by name
        <input type="text" value={value} onChange={onHandleFilter} />
      </label>
    </>
  );
}

const mapStateToProps = state => ({
  value: filterSelector.getFilter(state),
});
const mapDispatchToProps = dispatch => ({
  onHandleFilter: event => dispatch(filterContacts(event.target.value)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Filter);
