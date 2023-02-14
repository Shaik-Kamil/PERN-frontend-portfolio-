import React from 'react';
import GameDetails from '../Components/GameDetails';

const Show = () => {
  return (
    <div className="sm:flex flex-col w-full h-[90vh] ml-1">
      <h2 className="flex justify-center p-4 font-bold text-lg">Show Games</h2>
      <GameDetails />
    </div>
  );
};

export default Show;
