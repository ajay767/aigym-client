import React from 'react';
import { useHistory } from 'react-router-dom';
import { BiArrowBack } from 'react-icons/bi';
import Typography from './Typography';

function PageHeader({ title }) {
  const history = useHistory();

  return (
    <div className="p-2 py-4 grid grid-cols-3">
      <div
        className="h-10 w-10 rounded-full bg-gray-200 flex items-center justify-center"
        onClick={() => history.goBack()}
      >
        <BiArrowBack size={30} />
      </div>
      <div className="self-center justify-self-center ">
        <Typography type="section">{title}</Typography>
      </div>
    </div>
  );
}

export default PageHeader;
