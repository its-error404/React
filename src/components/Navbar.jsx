import React from "react";
import styled from "styled-components";

const Navbar = () => {
  const title = "Tech Monkey";
  return (
    <Navigation className="flex w-full px-6 py-4 text-center bg-white shadow-2xl">
      <div className="flex items-center justify-between w-full mr-10 ">
        <div className="mb-2">
          <a className="text-2xl no-underline hover:text-blue-500" href="/home">{title}
          </a>
        </div>
        <div className="space-x-4">
          <a
            className="p-2 ml-4 text-lg text-pink-500 no-underline rounded-xl hover:bg-pink-200 hover:text-2xl"
            href="/instagram"
          >
            Instagram
          </a>
          <a
            className="p-2 ml-4 text-lg text-red-500 no-underline hover:text-2xl hover:bg-red-200 rounded-xl"
            href="/youtube"
          >
            YouTube
          </a>
          <a
            className="p-2 ml-4 text-lg text-indigo-500 no-underline hover:text-2xl rounded-xl hover:bg-indigo-200"
            href="/discord"
          >
            Discord
          </a>
        </div>
      </div>
    </Navigation>
  );
};

const Navigation = styled.div
`
`;

export default Navbar;
