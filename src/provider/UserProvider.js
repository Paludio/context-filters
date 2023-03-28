import PropTypes from 'prop-types';
import { useState } from 'react';
import UserContext from '../context/UserContext';

export default function UserProvider({ children }) {
  const [user, setUser] = useState({});

  const value = {
    user,
    setUser,
  };

  return (
    <UserContext.Provider value={ value }>
      {children}
    </UserContext.Provider>
  );
}

UserProvider.propTypes = {
  children: PropTypes.node.isRequired,
};
