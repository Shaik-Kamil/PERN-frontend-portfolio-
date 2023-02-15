import React from 'react';
import { Link } from 'react-router-dom';

export default function Shaik() {
  return (
    <main className="flex justify-center">
      <section className="shaik">
        <div id="aboutSection">
          <h2
            className="flex justify-center bg-purple-500 w-full text-cyan-300"
            id="Shaik"
          >
            Shaik Kamil
          </h2>
          <div className="flex justify-center">
            <img
              className="w-60 h-72 p-4"
              alt="Shaik"
              id="about"
              src="https://avatars.githubusercontent.com/u/107490051?v=4"
            />
          </div>

          <p className="text-blue-700">
            I’m currently a FullStack web Development Fellow at Pursuit which is
            an intensive 12 month FullStack web development fellowship where I
            am upskilling/ reskilling to break into tech. I have always been the
            person who loves solving complex problems and breaking them down.
            Since I have always been an avid lifelong learner, Software
            Engineering felt like the next natural and logical step career-wise.
          </p>
          <br></br>
          <p className="text-blue-700">
            Prior to this, I have experience in various roles all in one way or
            another that involve Operations Management, whether its my recent
            experience as a warehouse operations lead where I was in charge of
            both day to day operations as well as personnel management. I have
            worn many hats in this role such as customer service support, vendor
            management, delivery partners management and logistics management
            among many others. Looking back on my past work experiences, I have
            demonstrated an agile and quick adaptability to new roles and
            industries while successfully exceeding expectations.
          </p>
        </div>
        <div className="flex justify-center p-4">
          <button className="block justify-center bg-purple-500  hover:bg-blue-400 text-white py-2 px-5 rounded-md">
            <Link to="/">Home</Link>
          </button>
        </div>
      </section>
    </main>
  );
}
