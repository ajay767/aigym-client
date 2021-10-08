import React, { useState } from 'react';
import TextInput from '@ui/TextInput';
import Section from '../layout/Section';

import { FiSearch } from 'react-icons/fi';
function SearchBar() {
  const [text, setText] = useState('');
  return (
    <Section>
      <TextInput
        className="my-2"
        value={text}
        setValue={setText}
        placeholder="Gold's Gym"
        type="text"
        textType="primary"
        leftIcon={() => (
          <FiSearch
            size={28}
            className="w-12 px-2 text-gray-400 cursor-pointer"
          />
        )}
      />
    </Section>
  );
}

export default SearchBar;
