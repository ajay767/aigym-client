import React, { useState } from 'react';
import TextInput from '../../components/TextInput';
import Typography from '../../components/Typography';
import Section from '../../layout/Section';
import Button from '../../components/Button';
export default function Signup() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');

  return (
    <Section className=''>
      <Typography type='primary' className='text-center py-24'>
        FitX
      </Typography>
      <TextInput
        value={name}
        setValue={setName}
        placeholder='Enter Your Name Here'
        type='text'
        label='Name'
        textType='primary'
      />
      <TextInput
        value={email}
        setValue={setEmail}
        placeholder='john@gmail.com'
        type='email'
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
      <TextInput
        className='my-4'
        placeholder='••••••••'
        type='password'
        textType='primary'
        label='Confirm Password'
        value={confirmPassword}
        setValue={setConfirmPassword}
      />
      <Button onClick={() => console.log('clicked')} btnType='primary'>
        Signup
      </Button>
      <div className='py-10 text-center text-gray-600 font-medium leading-tight '>
        <Typography type='caption' className=' inline-block cursor-pointer'>
          Login ?
        </Typography>
      </div>
      <Typography className='text-xs text-gray-400 text-center mt-28'>
        It is a long established fact that a reader will be distracted by the
        readable content
      </Typography>
    </Section>
  );
}
