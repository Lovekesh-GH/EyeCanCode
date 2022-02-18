import axios from "axios";
// import "./App.css";
import stubs from "./stubs";
import React, { useRef, useState, useEffect } from "react";
import alanBtn from "@alan-ai/alan-sdk-web";
// import {scroller} from 'react-scroll';

function Tutorial() {
  const [code, setCode] = useState("");
  const [language, setLanguage] = useState("cpp");
  const [output, setOutput] = useState("");
  const notInitialRender = useRef(false);
  // const [voice,setVoice] =useState(null);
  // const notInitialRender = useRef(false);

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
  function myPrintFunction(a) {
    let str = "print(\"" + a + "\")";
    let res = setCode(str);

    return res;
  }
  function myVarFunction(a, b) {
    let str = a + "=" + b;
    let res = setCode(str);

    return res;
  }
  function myLoopFunction(a, b, c, d) {
    let e;
    if (c == "greater than") {
      e = ">";
    }
    else if (c == "less than") {
      e = "<";
    }
    else if (c == "equal equal to") {
      e = "==";
    }
    else if (c == "equal") {
      e = "=";
    }
    let str = a + " " + b + e + d + ":";
    let res = setCode(str);

    return res;
  }
  function myFuncFunction(a, b) {
    let str = "def" + " " + a + "(" + b + ")" + ":";
    let res = setCode(str);

    return res;
  }
  function myIncFunction(a, b) {
    let str = a + " " + "+" + "=" + " " + b;
    let res = setCode(str);

    return res;
  }
  function myDecrFunction(a, b) {
    let str = a + " " + "-" + "=" + " " + b;
    let res = setCode(str);

    return res;
  }
  function myListFunction(a, b, c, d) {
    let str = a + " " + "=" + " " + "[" + "\"" + b + "\"" + "," + " " + "\"" + c + "\"" + "," + " " + "\"" + d + "\"" + "]";
    let res = setCode(str);

    return res;
  }
  function myForFunction(a, b, c) {
    let str = "for" + " " + "x" + " " + "in" + " " + "range" + "(" + a + ", " + b + ", " + c + ")" + ":";
    let res = setCode(str);

    return res;
  }
  //   function handleSubmit() {
  //     alanBtnInstance.callProjectApi("getOutput", {Output}, function(error, result) {
  //         if (error) {
  //             console.error(error);
  //             return;
  //         }
  //         console.log(result);
  //     });
  // };
  // alanBtnInstance.callProjectApi("setClientData", {value:"{output}"}, function (error, result){
  //   // handle error and result here
  // });

  useEffect(() => {
    alanBtn({
      key: "55d2c2ecfc52026c95cf8dcc90a29e8d2e956eca572e1d8b807a3e2338fdd0dc/stage",
      onCommand: (commandData) => {
        if (commandData.command === "language") {
          setLanguage(commandData.language.value.toLowerCase());

        } else if (commandData.command === "print") {
          let response = commandData.print.value.toLowerCase();
          console.log(response);
          myPrintFunction(response);

        } else if (commandData.command === "variable") {
          let one = commandData.vari;
          let two = commandData.No;
          console.log(one);
          console.log(two);
          myVarFunction(one, two);

        } else if (commandData.command === "Loop") {
          let one = commandData.ITEM;
          let two = commandData.ITM;
          let op = commandData.OP;
          let type = commandData.Loop;
          console.log(one, two, op, type);
          myLoopFunction(type, one, op, two);

        } else if (commandData.command === "func") {
          let param = commandData.param.value.toLowerCase();
          let funcN = commandData.name;
          console.log(param, funcN);
          myFuncFunction(funcN, param);

        } else if (commandData.command === "incr") {
          let vari = commandData.var;
          let inc = commandData.inc;
          console.log(vari, inc);
          myIncFunction(vari, inc);

        } else if (commandData.command === "decr") {
          let vari = commandData.var;
          let inc = commandData.inc;
          console.log(vari, inc);
          myDecrFunction(vari, inc);

        } else if (commandData.command === "list") {
          let name = commandData.name;
          let one = commandData.param1.value.toLowerCase();
          let two = commandData.param2.value.toLowerCase();
          let three = commandData.param3.value.toLowerCase();
          console.log(name, one, two, three);
          myListFunction(name, one, two, three);

        } else if (commandData.command === "for") {
          let one = commandData.param1.value.toLowerCase();
          let two = commandData.param2.value.toLowerCase();
          let three = commandData.param3.value.toLowerCase();
          console.log(one, two, three);
          myForFunction(one, two, three);

        }
        // else if(commandData.command === "submit"){
        //   handleSubmit();
        // }
      },
    });
  }, []);
  // const callProjectApiCb = useCallback(async () => {
  //   alanBtnInstance.callProjectApi("sendAnswer", { answer: 'correct' }, (err, data) => {
  //     console.log(err, data);
  //   });
  // }, []);


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
        >Set Default
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
        onClick={handleSubmit}>
        Submit
      </button>
      <p>{output}</p>
    </section>
  );
}

export default Tutorial;