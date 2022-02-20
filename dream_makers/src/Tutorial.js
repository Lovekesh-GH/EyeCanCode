import axios from "axios";
// import "./App.css";
import stubs from "./stubs";
import React, { useRef, useState, useEffect } from "react";
import alanBtn from "@alan-ai/alan-sdk-web";
// import { unstable_HistoryRouter } from "react-router-dom";
// import {scroller} from 'react-scroll';
import Navbar from "./Navbar";

function Tutorial() {
  const [code, setCode] = useState(`print("Hello world!")`);
  // const [coode, addCoode] = useState("");
  const [language, setLanguage] = useState("python");
  const [output, setOutput] = useState("");
  const [temp, setTemp] = useState("");
  const alanBtnInstance = useRef(null);
  const childFunc = useRef(null);
  // const notInitialRender = useRef(false);
  // const [voice,setVoice] =useState(null);
  // const notInitialRender = useRef(false);

  useEffect(() => {
    setCode(stubs[language]);
  }, [language]);

  useEffect(() => {
    const defaultLang = localStorage.getItem("default-language") || "python";
    setLanguage(defaultLang);
  }, []);
  // (e) => {
  //   setCode(e.target.value);
  // }
  function inputChangeHandler(event) {
    event.preventDefault();
    setCode(event.target.value);
    setTemp(event.target.value);
  }
  function navigationHandler(value) {
    if (childFunc.current) {
      childFunc.current.handleClick(value);
    }
  }
  const handleSubmit = async () => {
    console.log("abs1", code, temp);
    const payload = {
      language,
      code,
    };
    // sendData();
    try {
      console.log(payload);
      const { data } = await axios.post("http://localhost:5000/run", payload);

      setOutput(data.output);
      console.log("abs2", code, temp);
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
    let str = 'print("' + a + '")';
    let res = setCode((prevState) => prevState.concat(str));

    return res;
  }
  function myVarFunction(a, b) {
    let str = a + "=" + b;
    let res = setCode((prevState) => prevState.concat(str));

    return res;
  }
  function myLoopFunction(a, b, c, d) {
    let e;
    if (c == "greater than") {
      e = ">";
    } else if (c == "less than") {
      e = "<";
    } else if (c == "equal equal to") {
      e = "==";
    } else if (c == "equal") {
      e = "=";
    }
    let str = a + " " + b + e + d + ":";
    let res = setCode((prevState) => prevState.concat(str));

    return res;
  }
  function myFuncFunction(a, b) {
    let str = "def" + " " + a + "(" + b + ")" + ":";
    // let res = setCode(str);

    return setCode((prevState) => prevState.concat(str));
  }
  function myIncFunction(a, b) {
    let str = a + " " + "+" + "=" + " " + b;
    let res = setCode((prevState) => prevState.concat(str));
    return res;
  }
  function myDecrFunction(a, b) {
    let str = a + " " + "-" + "=" + " " + b;
    let res = setCode((prevState) => prevState.concat(str));

    return res;
  }
  function myListFunction(a, b, c, d) {
    let str =
      a +
      " " +
      "=" +
      " " +
      "[" +
      '"' +
      b +
      '"' +
      "," +
      " " +
      '"' +
      c +
      '"' +
      "," +
      " " +
      '"' +
      d +
      '"' +
      "]";
    let res = setCode((prevState) => prevState.concat(str));

    return res;
  }
  function myForFunction(a, b, c) {
    let str =
      "for" +
      " " +
      "x" +
      " " +
      "in" +
      " " +
      "range" +
      "(" +
      a +
      ", " +
      b +
      ", " +
      c +
      ")" +
      ":";
    let res = setCode((prevState) => prevState.concat(str));

    return res;
  }
  function myCleatFunction() {
    let str = "";
    return setCode(str);
  }
  // function mySubmitFunction(){
  //   // handleSubmit();
  //   return handleSubmit();
  // }
  // function handleSubmit(){
  //   console.log("we");
  //    }
  // function sendData() {
  //   alanBtnInstance.activate();
  //   alanBtnInstance.callProjectApi("getOutput", {
  //     value: "output"
  //   }, function(error, result) {});
  // };
  //   function handleSubmit() {
  //     alanBtnInstance.callProjectApi("getOutput", {Output}, function(error, result) {
  //         if (error) {
  //             console.error(error);
  //             return;
  //         }
  //         console.log(result);
  //     });
  // };

  //
  // var greetingWasSaid = false;

  // var alanBtnInstance = alanBtn({
  //   onButtonState: async function(status) {
  //     if (status === 'ONLINE') {
  //       if (!this.greetingWasSaid) {
  //         await alanBtnInstance.activate();
  //         alanBtnInstance.playText("Hello! I'm Alan. How can I help you?");
  //         this.greetingWasSaid = true
  //       }
  //     }
  //   },
  //   rootEl: document.getElementById("alan-btn"),
  // });

  useEffect(() => {
    if (!alanBtnInstance.current) {
      alanBtnInstance.current = alanBtn({
        key: "55d2c2ecfc52026c95cf8dcc90a29e8d2e956eca572e1d8b807a3e2338fdd0dc/stage",

        onCommand: (commandData) => {
          console.log(code);
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
          } else if (commandData.command === "goForward") {
            navigationHandler("/About");
            // childFunc.current();
          } else if (commandData.command === "goBack") {
            navigationHandler("/");
          } else if (commandData.command === "clear") {
            myCleatFunction();
          } else if (commandData.command === "submit") {
            //  mySubmitFunction();
            handleSubmit();
          }
        },
      });
    }
  }, []);
  // alanBtnInstance.callProjectApi("getOutput", {value: output}, function (error, result){
  //   // handle error and result here
  // });
  // function sendData() {

  //   alanBtnInstance.callProjectApi("getOutput", {output: output}, function(error, result) {});
  // };

  const setDefaultLanguage = () => {
    localStorage.setItem("default-language", language);
    console.log(`${language} set as default!`);
  };
  // const callProjectApiCb = useCallback(async () => {
  //   alanBtnInstance.callProjectApi("sendAnswer", { answer: 'correct' }, (err, data) => {
  //     console.log(err, data);
  //   });
  // }, []);
  return (
    <div>
      <Navbar hidden="hidden" ref={childFunc}></Navbar>
      <section className="p-10 ">
        <h1 className="text-4xl sm:text-5xl flex justify-center p-5 font-exo">
          Compiler
        </h1>
        <div className="flex gap-5 mb-5 h-10">
          <label className="text-lg font-bold">Language: </label>
          <select
            value={language}
            className="text-lg border-2 border-gray-600 rounded-xl bg-gray-200 hover:bg-gray-300 px-3 py-1"
            onChange={(e) => {
              const shouldSwitch = window.confirm(
                "Do you want to change the language? WARNING: Your current code will be lost."
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

          <button
            className="text-lg border-2 border-cyan-600 rounded-xl bg-cyan-200 hover:bg-cyan-500 px-3 py-1"
            onClick={setDefaultLanguage}
          >
            Set Default
          </button>
        </div>

        <textarea
          rows="20"
          value={code}
          onChange={(e) => inputChangeHandler(e)}
          className="border-2 border-gray-200 p-2 rounded-xl lg:w-[50vw] w-full"
        ></textarea>
        <div className="my-2">
          <button
            className="text-lg border-2 border-red-600 rounded-xl bg-red-200 hover:bg-red-500 px-3 py-1"
            onClick={handleSubmit}
          >
            {/* onClick="handleSubmit"> */}
            Submit
          </button>
        </div>
        <textarea
          className="border-2 border-gray-200 h-36 lg:w-[50vw] w-full rounded-xl p-2"
          placeholder="Output"
        >
          {output}
        </textarea>
      </section>
    </div>
  );
}

export default Tutorial;
