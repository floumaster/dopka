import './App.css';
import React, { useEffect } from 'react';

function selectQuestion(e){
  e.currentTarget.classList.toggle("selected")
}

function App() {

  useEffect(() => {
    const interval = setInterval(() => {
      document.getElementsByClassName("images")[0].classList.toggle('up');
    }, 1000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="App">
        <section className="questions-wrapper">
            <div className="images">
              <div className="pattern-wrapper">
                <img src="bg-pattern-desktop.svg" alt="pattern"/>
              </div>
              <div className="woman-wrapper">
                <img src="illustration-woman-online-desktop.svg" alt="woman"/>
              </div>
            </div>
            <div className="questions">
              <h1 className="logo">FAQ</h1>
              <ul className="question-list">
            <li className="question">
              <section className="question_short" onClick={selectQuestion}>
                <div className="text">How many team members can I invite?</div>
                <div className="img">
                  <img className="arrow" src="icon-arrow-down.svg" alt="icon-arrow-down"/>
                </div>
              </section>
              <section className="question_answer">
                You can invite up to three members. To get bonuses, share your referral link with your friends
              </section>
            </li>
            <li className="question">
              <section className="question_short" onClick={selectQuestion}>
                <div className="text">What is the maximum file upload size?</div>
                <div className="img">
                  <img className="arrow" src="icon-arrow-down.svg" alt="icon-arrow-down"/>
                </div>
              </section>
              <section className="question_answer">
                No more than 2GB. All files in your account must fit your allotted storage space.
              </section>
            </li>
            <li className="question">
              <section className="question_short" onClick={selectQuestion}>
                <div className="text">How do I reset my password?</div>
                <div className="img">
                  <img className="arrow" src="icon-arrow-down.svg" alt="icon-arrow-down"/>
                </div>
              </section>
              <section className="question_answer">
                You can invite up to three members. To get bonuses, share your referral link with your friends
              </section>
            </li>
            <li className="question">
              <section className="question_short" onClick={selectQuestion}>
                <div className="text">Can I cancel my subscription?</div>
                <div className="img">
                  <img className="arrow" src="icon-arrow-down.svg" alt="icon-arrow-down"/>
                </div>
              </section>
              <section className="question_answer">
                You can invite up to three members. To get bonuses, share your referral link with your friends
              </section>
            </li>
            <li className="question">
              <section className="question_short" onClick={selectQuestion}>
                <div className="text">Do you provide additional support?</div>
                <div className="img">
                  <img className="arrow" src="icon-arrow-down.svg" alt="icon-arrow-down"/>
                </div>
              </section>
              <section className="question_answer">
                You can invite up to three members. To get bonuses, share your referral link with your friends
              </section>
            </li>
          </ul>
            </div>
        </section>
    </div>
  );
}

export default App;
