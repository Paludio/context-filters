import { useContext } from 'react';
import UserContext from '../../context/UserContext';
import logo from '../../images/logo.png';

export default function Header() {
  const { user: { name } } = useContext(UserContext);

  return (
    <header
      className="flex min-w-full items-center justify-between h-28 bg-yellow-500"
    >
      <h1 className="ml-3 text-2xl font-medium">
        {`Bem vindo(a): ${name}`}
      </h1>
      <img src={ logo } alt="logo" className="mr-3" />
    </header>
  );
}
