import React, { useState } from "react";
import { questions } from "./FaqApi";

function Faq() {
  const [show, setShow] = useState(false);

  const toggle = (index) => {
    if (show === index) {
      return setShow(null);
    }
    setShow(index);
  };

  return (
    <div>
      <section className="bg-stone-200 py-20">
        <p className="text-4xl sm:text-5xl flex justify-center pb-5">
          General Questions
        </p>

        {questions.map((item, index) => {
          return (
            <div key={item.id}>
              <div className="m-5">
                <div className="flex justify-center">
                  <button
                    onClick={() => toggle(index)}
                    key={index}
                    className="text-lg border border-stone-800 rounded-full w-full lg:w-[60vw] p-5 cursor-pointer"
                  >
                    <div className="flex justify-start">
                      {show === index ? (
                        <img
                          src="https://img.icons8.com/ios/50/000000/minus.png"
                          className="h-10 p-2"
                        />
                      ) : (
                        <img
                          src="https://img.icons8.com/ios/50/000000/plus--v1.png"
                          className="h-10 p-2"
                        />
                      )}{" "}
                      <p className="p-1 text-left font-medium">{item.ques}</p>
                    </div>
                  </button>
                </div>

                <div className="flex justify-center">
                  {show === index && (
                    <p className="w-full lg:w-[60vw] p-8">{item.ans}</p>
                  )}
                </div>
              </div>
            </div>
          );
        })}
      </section>
    </div>
  );
}

export default Faq;
