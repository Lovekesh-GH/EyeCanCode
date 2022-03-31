import React, { useRef } from 'react';
import { questions,answers } from './Data';
import { useSearchParams } from 'react-router-dom';
import Tutorial from './Tutorial';

const Template =React.forwardRef((props,ref)=>{
    let [searchParams] = useSearchParams();
    const tutFunc = useRef(null);
    // eslint-disable-next-line
    const question = questions.find(element=>element.id == searchParams.get("id") );
    // eslint-disable-next-line
    const answer = answers.find((answer)=>answer.id == searchParams.get("id"));

     React.useImperativeHandle(ref,()=>({
          languageHandler(commandData){
            if (tutFunc.current) {
                tutFunc.current.languageHandler(commandData);
              }
          },
          myVarFunction(one,two){
            if (tutFunc.current) {
                tutFunc.current.myVarFunction(one,two);
              }
          },
          myPrintFunction(response){
            if (tutFunc.current) {
                tutFunc.current.myPrintFunction(response);
              }  
          },
          myFuncFunction(funcN,param){
            if (tutFunc.current) {
                tutFunc.current.myFuncFunction(funcN,param);
              }
          },
          myIncFunction(vari,inc){
            if(tutFunc.current){
                tutFunc.current.myIncFunction(vari,inc);
              }
          },
          myDecrFunction(vari,inc){
            if(tutFunc.current){
                tutFunc.current.myDecrFunction(vari,inc);
              }
          },
          myListFunction(name, one, two, three){
            if(tutFunc.current){
                tutFunc.current.myListFunction(name, one, two, three);
              }
          },
          myLoopFunction(type,one,op,two){
            if (tutFunc.current) {
                tutFunc.current.myLoopFunction(type,one,op,two);
              }
          },
          myForFunction(one, two, three){
            if(tutFunc.current){
                tutFunc.current.myForFunction(one, two, three);
              }
          },
          myCleatFunction(){
            if (tutFunc.current) {
                tutFunc.current.myCleatFunction();
              }
          },
          handleSubmit(){
            if (tutFunc.current) {
                tutFunc.current.handleSubmit();
              }
         }
     }))

    return(
        <div className='p-10'>
            <div className='flex'>
                <div className='flex-1 flex-col'>
                    <h1 className='py-20 text-4xl'>{question.ques}</h1>
                    <h4 className='py-5 text-xl'>{question.desc}</h4>
                </div>
                <div>
                    <Tutorial ref={tutFunc} sendFunc={props.sendData} initCode={answer.ans}/>
                </div>
            </div>
        </div>)
});

export default Template;