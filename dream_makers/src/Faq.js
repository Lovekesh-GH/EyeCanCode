import React, { useState, useRef} from "react";
import { questions } from "./FaqApi";

const Faq=React.forwardRef((props,ref)=> {
  const [show, setShow] = useState(false);
  const revealRefs = useRef([]);
  revealRefs.current = [];

  React.useImperativeHandle(ref,()=>({
    toggleHandler(value){
      toggle(value);
      console.log("scroll",revealRefs.current[value]);
      if(revealRefs.current[value])
      revealRefs.current[value].scrollIntoView({
        behavior: 'smooth',
      });
    },
  }))

  const toggle = (index) => {
    if (show === index) {
      return setShow(null);
    }
    setShow(index);
  }

 const addToRefs = (el) => {
    if(el && !revealRefs.current.includes(el))
      revealRefs.current.push(el);
 }
  return (
    <div>
      <section id="faq">
        <div className="border border-gray-400 rounded-xl py-5 my-10 lg:mx-20 mx-2">
          <p className="text-4xl sm:text-5xl flex justify-center pb-5 font-exo">
            General Questions
          </p>

          {questions.map((item, index) => {
            return (
              <div key={item.id} ref={addToRefs}>
                <div className="m-5 ">
                  <div className="flex justify-center">
                    <button
                      onClick={() => toggle(item.id - 1)}
                      key={index}
                      className="text-lg bg-gradient-to-r from-teal-700 via-teal-500 to-gray-300 rounded-full w-full lg:w-[60vw] p-5 cursor-pointer text-white transform transition duration-200 hover:scale-105"
                    >
                      <div className="flex justify-start">
                        {show === index ? (
                          <img
                            src="https://img.icons8.com/ios/50/000000/minus.png"
                            className="h-10 p-2" alt="minus"
                          />
                        ) : (
                          <img
                            src="https://img.icons8.com/ios/50/000000/plus--v1.png"
                            className="h-10 p-2" alt="plus"
                          />
                        )}{" "}
                        <p className="p-1 text-left font-medium font-sans">
                          {item.ques}
                        </p>
                      </div>
                    </button>
                  </div>

                  <div className="flex justify-center">
                    {show === index && (
                      <p className="w-full lg:w-[60vw] p-8 m-4 font-sans lg:text-lg rounded-full cursor-pointer border border-gray-400">
                        {item.ans}
                      </p>
                    )}
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </section>
    </div>
  );
})

export default Faq;
