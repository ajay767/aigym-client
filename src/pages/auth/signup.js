import React, { useState } from 'react';
import TextInput from '@ui/TextInput';
import Typography from '@ui/Typography';
import Section from '../../layout/Section';
import Button from '@ui/Button';
export default function Signup() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');

  return (
    <Section className="py-2">
      <Typography type="secondary" className="text-center py-20">
        Fit<span className="font-extrabold">X</span>
      </Typography>
      <div className="flex flex-col space-y-2">
        <TextInput
          value={name}
          setValue={setName}
          placeholder="Enter Your Name Here"
          type="text"
          label="Name"
          textType="primary"
        />
        <TextInput
          value={email}
          setValue={setEmail}
          placeholder="john@gmail.com"
          type="email"
          label="Email"
          textType="primary"
        />
        <TextInput
          placeholder="••••••••"
          type="password"
          textType="primary"
          label="Password"
          value={password}
          setValue={setPassword}
        />
        <TextInput
          placeholder="••••••••"
          type="password"
          textType="primary"
          label="Confirm Password"
          value={confirmPassword}
          setValue={setConfirmPassword}
        />
      </div>
      <Button
        className="my-5"
        onClick={() => console.log('clicked')}
        btnType="primary"
      >
        Signup
      </Button>
      <div className="py-10 text-center text-gray-600 font-medium leading-tight ">
        <Typography type="caption" className=" inline-block cursor-pointer">
          No account? signup instead.
        </Typography>
      </div>
      <Typography className="text-xs text-gray-400 text-center ">
        It is a long established fact that a reader will be distracted by the
        readable content
      </Typography>
    </Section>
  );
}
