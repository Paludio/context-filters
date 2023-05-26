import { Input, Button } from '@material-tailwind/react';
import { useContext, useState } from 'react';
import { AiFillEyeInvisible, AiFillEye } from 'react-icons/ai';
import { useHistory } from 'react-router-dom';
import Logo from '../../components/logo/Logo';
import Loading from '../../components/loading/Loading';
import { postAPI } from '../../services/api';
import UserContext from '../../context/UserContext';
import { notifyError, notifySuccess } from '../../utils/toastifyMessages';

export default function Login() {
  const { setUser } = useContext(UserContext);
  const history = useHistory();

  const [visible, setVisible] = useState(false);
  const [loading, setLoading] = useState(false);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const onClick = async () => {
    setLoading(true);
    try {
      const response = await postAPI('/login', { email, password });
      
      console.log(response);

      setUser(response);
      setLoading(false);
      notifySuccess('Login realizado com sucesso');
      history.push('/analytics');
    } catch (err) {
      notifyError(err.message);
      setLoading(false);
    }
  };

  const activeButton = () => {
    const regexEmail = /\S+@\S+\.\S+/i;
    const MIN_LENGTH_PASSWORD = 6;

    const test = regexEmail.test(email) && password.length >= MIN_LENGTH_PASSWORD;

    return test;
  };

  return (
    <div className="bg-stone-100 min-h-screen flex items-center justify-center relative">
      <form className="bg-white px-16 py-12 rounded-2xl shadow-lg text-center h-96 w-96">
        <Logo />
        <div className="mt-28">
          <fieldset className="mb-4">
            <label
              htmlFor="input-email"
            >
              <Input
                id="input-email"
                type="email"
                name="email"
                value={ email }
                onChange={ (e) => setEmail(e.target.value) }
                label="Email"
                size="lg"
              />
            </label>
          </fieldset>
          <fieldset className="relative mb-4">
            <label htmlFor="input-password">
              <Input
                id="input-password"
                type={ visible ? 'text' : 'password' }
                name="password"
                value={ password }
                onChange={ (e) => setPassword(e.target.value) }
                label="password"
                size="lg"
              />
            </label>
            <button
              type="button"
              className="absolute top-4 right-3"
              onClick={ () => setVisible(!visible) }
            >
              {
                visible
                  ? <AiFillEye />
                  : <AiFillEyeInvisible />
              }
            </button>
          </fieldset>
          {
            loading
              ? (
                <button
                  className="
                  bg-yellow-600
                  py-2 px-28 rounded-lg
                  flex items-center justify-center
                  "
                  type="button"
                  disabled
                >
                  <Loading />
                </button>
              )
              : (
                <Button
                  size="lg"
                  variant="gradient"
                  className="min-w-full text-lg py-3"
                  color="yellow"
                  type="button"
                  disabled={ !activeButton() }
                  onClick={ () => onClick() }
                >
                  Login
                </Button>
              )
          }
        </div>
      </form>
      <div
        className="w-full h-14 absolute bg-yellow-600 bottom-0"
      />
    </div>
  );
}
