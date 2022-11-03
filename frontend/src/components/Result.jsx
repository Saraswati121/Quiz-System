import React, { useContext } from 'react'
import { QuizContext } from '../context/QuizHolder'
import './style.css'

export  function Result() {
    const { correct, quizzes } = useContext(QuizContext)
 
    return (
        <div className='result'>
            <h1>{correct}</h1>
                <h2 >{correct/5} are correct out of {quizzes.length}</h2>
        </div>
    )
}