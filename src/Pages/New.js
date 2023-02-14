import React from 'react';
import NewForm from '../Components/NewForm';
const New = () => {
  return (
    <div className="flex flex-col items-center p-4">
      <h3 className="mb-3">Add a Game to collection</h3>
      <NewForm />
    </div>
  );
};

export default New;
