import React from "react";
import { team } from "./TeamData";
import "./Cards.css";

function About() {
  return (
    <>
      <section className=" lg:h-screen flex justify-center items-center bg-gray-900">
        <div className="border border-gray-800 rounded-xl grid items-center p-2 lg:p-10 my-16 lg:my-10 lg:h-[80vh] w-full mx-2 lg:mx-20 ">
          <h1 className="text-white text-4xl sm:text-5xl flex justify-center pb-5 font-exo">
            Meet Our Team
          </h1>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-4 gap-4">
            {team.map((item, index) => {
              return (
                <div key={item.id}>
                  <div className="border border-gray-800 shadow-lg shadow-black">
                    <div className="container">
                      <div className="content-inner">
                        <div className="content-front border-b border-gray-800">
                          <img
                            src={item.avatar}
                            className="object-cover w-full h-72" alt="team-member"
                          ></img>
                          <div className="p-2">
                            <h1 className="font-md font-sans text-lg text-black flex justify-center">
                              {item.name}
                            </h1>
                            <h3 className="text-gray-800 flex justify-center">
                              {item.role}
                            </h3>
                          </div>
                        </div>

                        <div className="content-back">
                          <div className="dec-icon"></div>
                          <p className="text-lg p-5 text-justify">
                            {item.description}
                          </p>
                        </div>
                        <div className="bg-teal-600 flex justify-center">
                          <a href={item.li} target="_blank" rel="noopener noreferrer">
                            <img
                              src="https://img.icons8.com/material-outlined/30/000000/linkedin--v1.png"
                              className="h-10 "
                              alt={item.name}
                            />
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>
    </>
  );
}

export default About;
