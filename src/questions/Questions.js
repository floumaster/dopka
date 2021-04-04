import React from 'react';

const Questions = (props) =>{
    function selectQuestion(e){
        e.currentTarget.classList.toggle("selected")
      }
    const faq = props.faq;
    return(
        <div className="questions">
            <h1 className="logo">FAQ</h1>
            <ul className="question-list">
                {faq.map((curr)=>{
                    return(
                        <li className="question">
                            <section className="question_short" onClick={selectQuestion}>
                                <div className="text">{curr.question}</div>
                                <div className="img">
                                    <img className="arrow" src="icon-arrow-down.svg" alt="icon-arrow-down"/>
                                </div>
                            </section>
                            <section className="question_answer">
                                {curr.answer}
                            </section>
                        </li>
                    )
                })}
            </ul>
        </div>
    )
}

export default Questions;