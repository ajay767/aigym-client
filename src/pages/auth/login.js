import React, { useState } from 'react';
import TextInput from '../../components/TextInput';
import Typography from '../../components/Typography';
import Section from '../../layout/Section';
import Button from '../../components/Button';
export default function Signup() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  return (
    <Section className=''>
      <Typography type='primary' className='text-center py-24'>
        FitX
      </Typography>
      <TextInput
        value={email}
        setValue={setEmail}
        placeholder='john@gmail.com'
        type='text'
        label='Email'
        textType='primary'
      />
      <TextInput
        className='my-4'
        placeholder='••••••••'
        type='password'
        textType='primary'
        label='Password'
        value={password}
        setValue={setPassword}
      />
      <Button onClick={() => console.log('clicked')} btnType='primary'>
        Login
      </Button>
      <div className='py-10 text-center text-gray-600 font-medium leading-tight '>
        <Typography type='caption' className=' inline-block cursor-pointer'>
          Forgot Password ?
        </Typography>
        <Typography className='cursor-pointer' type='caption'>
          Sign Up Instead
        </Typography>
      </div>
      <Typography className='text-xs text-gray-400 text-center mt-28'>
        It is a long established fact that a reader will be distracted by the
        readable content
      </Typography>
    </Section>
  );
}
