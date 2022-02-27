import React, { useRef, useEffect } from "react";
import { HashRouter as Router, Route, Routes } from "react-router-dom";
import alanBtn from "@alan-ai/alan-sdk-web";
import Navbar from "./Navbar";
import Home from "./Home";
import Tutorial from "./Tutorial";
import About from "./About";

function App() {
  const alanBtnInstance = useRef(null);
  const navbarFunc = useRef(null);
  const tutFunc = useRef(null);
  const homeFunc = useRef(null);

  function navigationHandler(value) {
    if (navbarFunc.current) {
      navbarFunc.current.handleClick(value);
    }
  }
 
  useEffect(() => {
    if (!alanBtnInstance.current) {
      alanBtnInstance.current = alanBtn({
        key: "55d2c2ecfc52026c95cf8dcc90a29e8d2e956eca572e1d8b807a3e2338fdd0dc/stage",
        onCommand: (commandData) => {

          if (commandData.command === "language") {
            if (tutFunc.current) {
                  tutFunc.current.languageHandler(commandData);
                }
          } else if (commandData.command === "print") {
            let response = commandData.print.value.toLowerCase();
            console.log(response);
            if (tutFunc.current) {
              tutFunc.current.myPrintFunction(response);
            }
          } else if (commandData.command === "gotoFaq") {
            homeFunc.current.childFuncHandler(commandData.faqId - 1);
          }else if (commandData.command === "variable") {
            let one = commandData.vari;
            let two = commandData.No;
            console.log(one);
            console.log(two);
            if (tutFunc.current) {
              tutFunc.current.myVarFunction(one,two);
            }
          } else if (commandData.command === "Loop") {
            let one = commandData.ITEM;
            let two = commandData.ITM;
            let op = commandData.OP;
            let type = commandData.Loop;
            console.log(one, two, op, type);
            if (tutFunc.current) {
              tutFunc.current.myLoopFunction(type,one,op,two);
            }
          } else if (commandData.command === "func") {
            let param = commandData.param.value.toLowerCase();
            let funcN = commandData.name;
            console.log(param, funcN);
            if (tutFunc.current) {
              tutFunc.current.myFuncFunction(funcN,param);
            }
          } else if (commandData.command === "incr") {
            let vari = commandData.var;
            let inc = commandData.inc;
            console.log(vari, inc);
            if(tutFunc.current){
              tutFunc.current.myIncFunction(vari,inc);
            }
          } else if (commandData.command === "decr") {
            let vari = commandData.var;
            let inc = commandData.inc;
            console.log(vari, inc);
            if(tutFunc.current){
              tutFunc.current.myDecrFunction(vari,inc);
            }
          } else if (commandData.command === "list") {
            let name = commandData.name;
            let one = commandData.param1.value.toLowerCase();
            let two = commandData.param2.value.toLowerCase();
            let three = commandData.param3.value.toLowerCase();
            console.log(name, one, two, three);
            if(tutFunc.current){
              tutFunc.current.myListFunction(name, one, two, three);
            }
          } else if (commandData.command === "for") {
            let one = commandData.param1.value.toLowerCase();
            let two = commandData.param2.value.toLowerCase();
            let three = commandData.param3.value.toLowerCase();
            console.log(one, two, three);
            if(tutFunc.current){
              tutFunc.current.myForFunction(one, two, three);
            }
          } else if (commandData.command === "goAbout") {
            navigationHandler("/About");
      
          } else if (commandData.command === "goTutorial") {
            navigationHandler("/Tutorial");
          } else if(commandData.command === "goHome"){
            navigationHandler("/");
          }else if (commandData.command === "clear") {
            if (tutFunc.current) {
              tutFunc.current.myCleatFunction();
            }
          } else if (commandData.command === "submit") {
            //  mySubmitFunction();
            if (tutFunc.current) {
              tutFunc.current.handleSubmit();
              sendData();
            }
          }
        },
      });
    }
  }, []);

function sendData(output) {
    alanBtnInstance.current.activate();
    alanBtnInstance.current.callProjectApi("getOutput", {
      output
    }, function(error, result) {
      console.log(result);
      console.log("received")
    });
    console.log("SENT");
  };
  
  return (
    <Router>
      <div className="">
        <Navbar ref={navbarFunc}/>
        <Routes>
          <Route path="/Tutorial" element={<Tutorial ref={tutFunc} sendFunc={sendData}/>} />
          <Route path="/About" element={<About />} />
          <Route exact path="/" element={<Home ref={homeFunc}/>} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
