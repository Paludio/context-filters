import { useContext } from 'react';
import { useHistory } from 'react-router-dom';
import UserContext from '../../context/UserContext';
import logo from '../../images/logo.png';

export default function Header() {
  const { user: { name } } = useContext(UserContext);
  const history = useHistory();

  const userName = name === undefined
    ? JSON.parse(localStorage.getItem('user')) : { name };

  const onClick = () => {
    localStorage.clear('user');
    history.push('/');
  };

  return (
    <header
      className="flex min-w-full items-center justify-between h-28 bg-yellow-500"
    >
      <h1 className="ml-3 text-2xl font-medium">
        {`Bem vindo(a): ${userName.name}`}
      </h1>
      <button
        className="hover:cursor-pointer active:scale-105"
        onClick={ () => onClick() }
      >
        <img src={ logo } alt="logo" className="mr-3" />
      </button>
    </header>
  );
}
