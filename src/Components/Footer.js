import React from 'react';
import { FaGithubSquare } from 'react-icons/fa';
import { AiFillLinkedin } from 'react-icons/ai';
import { SiGmail } from 'react-icons/si';
const Footer = () => {
  return (
    <div className="bg-blue-700 flex justify-center p-5 text-lg text-slate-100">
      <h3 className="font-bold">Contact me</h3>
      <div>
        <div className="flex">
          <a
            href="https://www.linkedin.com/in/shaikkamil"
            target="_blank"
            rel="noreferrer"
            className="px-4 text-2xl text-white-500"
          >
            <AiFillLinkedin className="hover:bg-red-800" />
          </a>
          <a
            href="https://github.com/Shaik-Kamil"
            target="_blank"
            rel="noreferrer"
            className="px-4 text-2xl text-white-200"
          >
            <FaGithubSquare className="hover:bg-red-800" />
          </a>
          <a
            href="mailto: shaikkamil@pursuit.org"
            target="_blank"
            rel="noreferrer"
            className="px-4 text-2xl text-white-500"
          >
            <SiGmail className="hover:bg-red-800" />
          </a>
        </div>
      </div>
    </div>
  );
};

export default Footer;
