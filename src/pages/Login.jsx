import React, { useState } from 'react'

const Login = () => {
  const [currentState, setcurrentState] = useState('Login');



  return (
   <form className='flex flex-col items-center w-[90%] sm:max-w-96 m-auto mt-14 gap-4 text-gray-500'>
    <div className="inline-flex items-center gap-2 mb-2 mt-10">
      <p className='prata-regular text-3xl'>{currentState}</p>
      <hr className="border-none h-[1.5px] w-8 bg-gray-800" />
    </div>
   {currentState === 'Login' ? '' : <input type="text" className='w-full py-2 border border-gray-800 ' placeholder='  Name' /> }
    <input type="email" className='w-full py-2 border border-gray-800 ' placeholder='   Email' />
    <input type="password" className='w-full py-2 border border-gray-800 ' placeholder='  Password' />
   </form>
  )
}

export default Login
