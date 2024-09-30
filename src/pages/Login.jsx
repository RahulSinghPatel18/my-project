import React, { useState } from 'react'

const Login = () => {
  const [currentState, setcurrentState] = useState('Login');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [name, setName] = useState('');
  const [warning, setWarning] = useState('');

  const onSubmitHandler = async (event) => {
    event.preventDefault();

    // Basic validation for required fields
    if (currentState === 'Sign Up' && !name) {
      setWarning('Name is required for sign up.');
    } else if (!email) {
      setWarning('Email is required.');
    } else if (!password) {
      setWarning('Password is required.');
    } else {
      setWarning('');
      // Continue with the form submission logic here...
      console.log('Form submitted!');
    }
  }

  return (
   <form onSubmit={onSubmitHandler} className='flex flex-col items-center w-[90%] sm:max-w-96 m-auto mt-14 gap-4 text-gray-500'>
    <div className="inline-flex items-center gap-2 mb-2 mt-10">
      <p className='prata-regular text-3xl'>{currentState}</p>
      <hr className="border-none h-[1.5px] w-8 bg-gray-800" />
    </div>

    {/* Warning message display */}
    {warning && <p className="text-red-500">{warning}</p>}

    {/* Conditional input for name */}
    {currentState === 'Login' ? '' : 
      <input 
        type="text" 
        className='w-full py-2 border border-gray-800 ' 
        placeholder='Name' 
        value={name} 
        onChange={(e) => setName(e.target.value)} 
      /> 
    }

    {/* Email input */}
    <input 
      type="email" 
      className='w-full py-2 border border-gray-800 ' 
      placeholder='Email' 
      value={email} 
      onChange={(e) => setEmail(e.target.value)} 
    />

    {/* Password input */}
    <input 
      type="password" 
      className='w-full py-2 border border-gray-800 ' 
      placeholder='Password' 
      value={password} 
      onChange={(e) => setPassword(e.target.value)} 
    />

    <div className="w-full flex justify-between text-sm mt-[-8px]">
      <p className="cursor-pointer ">Forgot your password?</p>
        {
          currentState === "Login"
          ? <p onClick={() => setcurrentState('Sign Up')} className='cursor-pointer'>Create account</p>
          : <p onClick={() => setcurrentState('Login')} className='cursor-pointer'>Login Here</p>
        }
    </div>

    <button className='bg-black text-white font-medium py-2 px-4'>
      {currentState === 'Login' ? 'Sign In' : 'Sign Up'}
    </button>
   </form>
  )
}

export default Login;
