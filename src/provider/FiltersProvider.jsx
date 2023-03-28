import PropTypes from 'prop-types';
import { useState } from 'react';
import FilterContext from '../context/FilterContext';

export default function FilterProvider({ children }) {
  const [searchInput, setSearchInput] = useState('');
  const [selectInput, setSelectInput] = useState('');
  const [sortInput, setSortInput] = useState('');

  const value = {
    searchInput,
    setSearchInput,
    selectInput,
    setSelectInput,
    sortInput,
    setSortInput,
  };

  return (
    <FilterContext.Provider value={ value }>
      {children}
    </FilterContext.Provider>
  );
}

FilterProvider.propTypes = {
  children: PropTypes.node.isRequired,
};
