import React, { useState, useEffect, useRef } from "react";
import Navbar from "./Navbar";
import alanBtn from "@alan-ai/alan-sdk-web";
import { team } from "./TeamData";
import "./Cards.css";

function About() {
  const childFunc = useRef(null);
  const alanBtnInstance = useRef(null);
  useEffect(() => {
    if (!alanBtnInstance.current) {
      alanBtnInstance.current = alanBtn({
        key: "55d2c2ecfc52026c95cf8dcc90a29e8d2e956eca572e1d8b807a3e2338fdd0dc/stage",
        onCommand: (commandData) => {
          if (commandData.command === "gotoFaq") {
            // setIndex(commandData.faqId - 1);
          } else if (commandData.command === "goForward") {
            navigationHandler("/");
            // childFunc.current();
          } else if (commandData.command === "goBack") {
            navigationHandler("/Tutorial");
          }
          // else if (commandData.command === 'toggleColorMode') {
          //   setToggleColorFlag(flag => !flag);
          // }
        },
      });
    }
  }, []);

  function navigationHandler(value) {
    if (childFunc.current) {
      childFunc.current.handleClick(value);
    }
  }
  return (
    <>
      <Navbar hidden="hidden" ref={childFunc}></Navbar>
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
                            className="object-cover w-full h-72"
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
                          <a href={item.li} target="_blank">
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
