import React from 'react';
import GameDetails from '../Components/GameDetails';

const Show = () => {
  return (
    <div className="flex flex-col w-full h-[90vh]">
      <h2 className="flex justify-center p-4 font-bold text-lg">Show Games</h2>
      <GameDetails />
    </div>
  );
};

export default Show;
