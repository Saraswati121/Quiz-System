import React, { useContext, useState } from 'react'
import { QuizContext } from '../context/QuizHolder';
import {useNavigate}  from 'react-router-dom'
import './style.css'

export  function Quiz() {
    const [current, setCurrent] = useState(0);
   
    return (
        <div className='w-full h-screen flex justify-center items-center'>
            <Box current={current} next={setCurrent} />
        </div>
    )
}


const Box = ({ current, next }) => {
    const nav= useNavigate()
    const { quizzes, correct, setCorrect } = useContext(QuizContext);
    const [ans, setAns] = useState("");
    const saveHandler = () => {
        if (quizzes[current].correct === ans) {
            setCorrect(correct + 5);
        }
        else{
            setCorrect(correct-2)
        }
        setAns("");
        if ((current + 1) === quizzes.length) {
           nav('/result') 
        } else {
            next(current + 1);
        }
    }
    return (
        <div className='quiz'>
            <div> {current + 1}. {quizzes[current].question}</div>
            <div className='gridd'>
                <div onClick={() => setAns("a")}>{quizzes[current].a}</div>
                <div onClick={() => setAns("b")}>{quizzes[current].b}</div>
                <div onClick={() => setAns("c")}>{quizzes[current].c}</div>
                <div onClick={() => setAns("d")}>{quizzes[current].d}</div>
            </div>
            <div className='flx'>
                <button className='button' onClick={saveHandler}>Save&Next</button>
            </div>
        </div>
    )
}