import { Input, Button } from '@material-tailwind/react';
import { useState } from 'react';
import { AiFillEyeInvisible, AiFillEye } from 'react-icons/ai';
import Logo from '../../components/logo/Logo';
import Loading from '../../components/loading/Loading';

export default function Login() {
  const [visible, setVisible] = useState(false);
  const loading = true;

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
                label="Login"
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
