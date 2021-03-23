import './App.css';
import React, { useEffect } from 'react';
import Questions from './questions/Questions'
import Images from './images/Images'

function App() {

  useEffect(() => {
    const interval = setInterval(() => {
      document.getElementsByClassName("images")[0].classList.toggle('up');
    }, 1000);
    return () => clearInterval(interval);
  }, []);

  const faq = [
    {
      question: 'How many team members can I invite?',
      answer: 'You can invite up to three members. To get bonuses, share your referral link with your friends',
    },
    {
      question: 'What is the maximum file upload size?',
      answer: 'No more than 2GB. All files in your account must fit your allotted storage space.',
    },
    {
      question: 'How do I reset my password?',
      answer: 'You can invite up to three members. To get bonuses, share your referral link with your friends',
    },
    {
      question: 'Can I cancel my subscription?',
      answer: 'You can invite up to three members. To get bonuses, share your referral link with your friends',
    },
    {
      question: 'Do you provide additional support?',
      answer: 'You can invite up to three members. To get bonuses, share your referral link with your friends',
    },
  ]

  return (
    <div className="App">
        <section className="questions-wrapper">
            <Images/>
            <Questions faq={faq}/>
        </section>
    </div>
  );
}

export default App;
