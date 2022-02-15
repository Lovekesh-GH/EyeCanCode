import axios from "axios";
// import "./App.css";
import stubs from "./stubs";
import React, { useState, useEffect } from "react";
import alanBtn from "@alan-ai/alan-sdk-web";
// import {scroller} from 'react-scroll';

function Tutorial() {
  const [code, setCode] = useState("");
  const [language, setLanguage] = useState("cpp");
  const [output, setOutput] = useState("");

  useEffect(() => {
    setCode(stubs[language]);
  }, [language]);

  useEffect(() => {
    const defaultLang = localStorage.getItem("default-language") || "cpp";
    setLanguage(defaultLang);
  }, []);

  const handleSubmit = async () => {
    const payload = {
      language,
      code,
    };
    try {
      const { data } = await axios.post("http://localhost:5000/run", payload);
      setOutput(data.output);
    } catch ({ response }) {
      if (response) {
        const errMsg = response.data.err.stderr;
        setOutput(errMsg);
      } else {
        setOutput("Error Connecting to server");
      }
    }
  };

  useEffect(() => {
    alanBtn({
      key: "55d2c2ecfc52026c95cf8dcc90a29e8d2e956eca572e1d8b807a3e2338fdd0dc/stage",
      onCommand: (commandData) => {
        if (commandData.command === "language") {
          setLanguage`${commandData.language}`;
          // setCode`${commandData.language}`;
          console.log(commandData.language);
          // console.log(`${language}`);
          console.log(`${commandData.language}`);
        } else if (commandData.command === "print") {
          setCode`${commandData.print}`;
        }
      },
    });
  }, []);
  const setDefaultLanguage = () => {
    localStorage.setItem("default-language", language);
    console.log(`${language} set as default!`);
  };
  return (
    <section className="bg-stone-200 p-10">
      <h1 className="text-4xl py-5">Compiler</h1>
      <div>
        <label>Language: </label>
        <select
          value={language}
          className="p-1 rounded-xl"
          onChange={(e) => {
            const shouldSwitch = window.confirm(
              "Are you sure you want to change language? WARNING: Your current code will be lost."
            );
            if (shouldSwitch) {
              setLanguage(e.target.value);
            }
          }}
        >
          <option value="c">C</option>
          <option value="cpp">C++</option>
          <option value="java">Java</option>
          <option value="py">Python</option>
        </select>
      </div>
      <br />
      <div>
        <button
          className="border-2 border-cyan-600 rounded-xl bg-cyan-200 hover:bg-cyan-500 px-3 py-1"
          onClick={setDefaultLanguage}
        >
          Set Default
        </button>
      </div>
      <br />
      <textarea
        rows="20"
        cols="75"
        value={code}
        onChange={(e) => {
          setCode(e.target.value);
        }}
        className="border-2 border-stone-800 p-5 rounded-xl"
      ></textarea>
      <br />
      <button
        className="border-2 border-red-600 rounded-xl bg-red-200 hover:bg-red-500 px-3 py-1"
        onClick={handleSubmit}
      >
        Submit
      </button>
      <p>{output}</p>
    </section>
  );
}

export default Tutorial;