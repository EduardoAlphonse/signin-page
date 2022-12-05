import { Input } from './components/Input';
import { FormEvent } from 'react';

import { ReactComponent as GoogleLogo } from './assets/google-logo.svg';

export default function App() {
  const signIn = (event: FormEvent) => {
    event.preventDefault();
  };

  return (
    <div className='flex h-screen'>
      <main className='flex flex-col w-full justify-center items-center px-5 sm:px-32 lg:w-1/2'>
        <h1 className='text-3xl text-zinc-900 font-semibold w-full mb-4'>
          Welcome back
        </h1>
        <p className='text-sm text-zinc-500 w-full mb-8'>
          Welcome back! Please enter your details.
        </p>

        <div className='w-full'>
          <form
            onSubmit={signIn}
            className='flex flex-col gap-6'
          >
            <Input
              label='Email'
              type='email'
              name='email'
              placeholder='Enter your email'
            />
            <Input
              label='Password'
              type='password'
              name='password'
              placeholder='******'
            />

            <div className='flex justify-between items-center'>
              <label className='flex gap-2 items-center'>
                <input
                  type='checkbox'
                  name='rememberLogin'
                />
                <span className='text-xs font-semibold'>
                  Remember for 30 days
                </span>
              </label>

              <a
                href='#'
                className='text-xs font-semibold text-violet-600'
              >
                Forgot password
              </a>
            </div>

            <button
              type='submit'
              className='bg-violet-600 text-white text-sm font-semibold px-2 h-11 rounded-lg hover:bg-violet-700 transition-colors'
            >
              Sign in
            </button>
          </form>
          <button className='flex justify-center items-center gap-2 mt-4 border-zinc-200 border-2 bg-white w-full px-2 h-11 rounded-lg text-sm font-semibold'>
            <GoogleLogo className='w-6 h-6' /> Sign in with Google
          </button>

          <p className='text-center text-xs text-zinc-500 mt-6'>
            Don't have an account?{' '}
            <a
              href='#'
              className='text-violet-600 font-semibold'
            >
              Sign Up
            </a>
          </p>
        </div>
      </main>

      <div className='w-1/2 bg-zinc-100 hidden lg:flex'>
        <img
          src=''
          alt=''
        />
      </div>
    </div>
  );
}
