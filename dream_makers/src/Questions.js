import React from 'react';
import { Link } from 'react-router-dom';
import { questions } from './Data';
import "./questionsStyles.css"

const Template =()=>{
  
    return(
        <div className='pt-20 flex justify-center'>
            <article class="leaderboard max-w-5xl">
                <header>
                    <h1 class="leaderboard__title"><span class="leaderboard__title--top">PRACTICE</span>
                    <span class="leaderboard__title--bottom">QUESTIONS</span></h1>
                </header>

                <ul class="leaderboard__profiles">
                
                {questions.map((question,index) => {
                    return (
                    <li className='leaderboard__profile' key={Math.random() + index }>
                    <Link to={`/Questions/question?id=${question.id}`} >
                    <span class="leaderboard__name">{question.ques}</span>
                    <span class="leaderboard__value">{question.difficulty}</span>
                    </Link>
                    </li>)
                })}
                </ul>
           </article>
        </div >)
};

export default Template;