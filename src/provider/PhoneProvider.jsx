import PropTypes from 'prop-types';
import { useState } from 'react';
import PhoneContext from '../context/PhoneContext';

export default function PhoneProvider({ children }) {
  const [phones, setPhones] = useState([]);
  const [loading, setLoading] = useState(true);

  const value = {
    phones,
    setPhones,
    loading,
    setLoading,
  };

  return (
    <PhoneContext.Provider value={ value }>
      {children}
    </PhoneContext.Provider>
  );
}

PhoneProvider.propTypes = {
  children: PropTypes.node.isRequired,
};
