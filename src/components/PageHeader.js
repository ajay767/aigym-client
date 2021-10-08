import React from 'react';
import { useHistory } from 'react-router-dom';
import { IoIosArrowBack } from 'react-icons/io';
import Typography from '@ui/Typography';

function PageHeader({ title }) {
  const history = useHistory();

  return (
    <div className="p-2 py-2 grid grid-cols-3 bg-white border-b-2 border-gray-100">
      <div
        className="h-8 w-8 rounded-full  flex items-center justify-center"
        onClick={() => history.goBack()}
      >
        <IoIosArrowBack size={24} />
      </div>
      <div className="self-center justify-self-center ">
        <Typography type="header">{title}</Typography>
      </div>
    </div>
  );
}

export default PageHeader;
