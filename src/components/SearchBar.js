import React from 'react';
import Section from '../layout/Section';

import { FiSearch } from 'react-icons/fi';
function SearchBar() {
  return (
    <Section>
      <div className="bg-gray-200 rounded-md h-12 w-full my-2 flex items-center">
        <input
          className="bg-transparent h-full w-full outline-none pl-4 text-gray-500 text-lg"
          placeholder="search"
        />
        <FiSearch size={28} className="w-14 text-gray-500 cursor-pointer" />
      </div>
    </Section>
  );
}

export default SearchBar;
