import React, { useState, useEffect, useRef } from 'react';
import Faq from "./Faq";
import alanBtn from '@alan-ai/alan-sdk-web';
// import { scroller } from 'react-scroll';

function Home() {
  const alanBtnInstance = useRef(null);
  const [index, setIndex] = useState(null);
  // const [currentFaqId, setCurrentFaqId] = useState(null);

  
  useEffect(() => {
    if (!alanBtnInstance.current) {
      alanBtnInstance.current = alanBtn({
        key: 'fdc27e3d139b29bd95cf8dcc90a29e8d2e956eca572e1d8b807a3e2338fdd0dc/stage',
        onCommand: commandData => {
          if (commandData.command === 'gotoFaq') {
            
            setIndex(commandData.faqId - 1);
  
          } 
          // else if (commandData.command === 'toggleColorMode') {
          //   setToggleColorFlag(flag => !flag);
          // }
        },
      });
    }
  }, []);

  return (
    <>
      <div className="bg-gray-900 text-black">
        <div className="grid grid-cols-1 md:grid-cols-3 items-center ">
          <div className="col-span-2 grid items-center h-screen">
            <div className="">
              <div className="flex justify-center">
                <img src="/digital-png.png" className="h-40 sm:h-52" />
              </div>
              <div className="flex justify-center text-teal-500">
                <h1 className="text-4xl sm:text-5xl lg:text-6xl p-5">
                  Eye Can CODE
                </h1>
              </div>
            </div>
          </div>
          <div className="flex justify-center items-center bg h-screen">
            <div className="lg:w-[30vw] ">
              <h1 className="text-4xl sm:text-5xl lg:text-6xl p-5">
                What We Do?
              </h1>
              <p className="text-xl text-justify p-5">
                We provide a platform that helps aspiring programmers lay a
                strong foundation for their onward tech journey. Pushing them
                forward with an interactive methodology, we create a solution
                for developers who are hesitant to start. Helping the visually
                impaired enter the world of coding our website also creates an
                inclusive environment and tries to provide an equal learning
                opportunity to all.
              </p>
            </div>
          </div>
        </div>
      </div>
      <Faq
        index={index}
        setIndex={setIndex}
      />
      {/* <Faq /> */}
    </>
  );
}

export default Home;
