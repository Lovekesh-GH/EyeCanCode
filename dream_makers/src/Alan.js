import React, { useState, useEffect, useCallback } from "react";
import alanBtn from "@alan-ai/alan-sdk-web";

const COMMANDS = {
  QUES_SHOW: "gotoFaq",
};

export default function Alan({ alanvoice, setAlanVoice, toggle, setShow }) {
  const [alanInstance, setAlanInstance] = useState();
  //   const { setShow } = toggle();
  console.log(alanvoice);

  const openQues = useCallback(() => {
    alanInstance.playText("Opening question");
  }, [alanInstance]);
  useEffect(() => {
    window.addEventListener(COMMANDS.QUES_SHOW, openQues);
    return () => {
      window.removeEventListener(COMMANDS.QUES_SHOW, openQues);
    };
  }, [openQues]);

  useEffect(() => {
    if (alanInstance != null) return;

    setAlanInstance(
      alanBtn({
        bottom: "10px",
        right: "5px",
        key: "55d2c2ecfc52026c95cf8dcc90a29e8d2e956eca572e1d8b807a3e2338fdd0dc/stage",
        onCommand: (commandData) => {
          if (commandData.command === "gotoFaq") {
            toggle(commandData.faqId - 1);
          }

          window.dispatchEvent(new CustomEvent(commandData));
        },
      })
    );
  }, []);

  return <div></div>;
}
