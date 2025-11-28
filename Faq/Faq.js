import React, { useState } from "react";
import classes from "./Faq.module.css";
import faqImage from "./faq.jpg";

function Faq() {
  // State to track which question is clicked
  const [visibleAnswerIndex, setVisibleAnswerIndex] = useState(null);

  const toggleAnswer = (index) => {
    // Toggle visibility: if the same index is clicked, hide the answer
    setVisibleAnswerIndex(visibleAnswerIndex === index ? null : index);
  };

  const questionsAndAnswers = [
    { question: "This is the Fucking Question 1?", answer: "This is the Fucking Ans 1?" },
    { question: "This is the Fucking Question 2?", answer: "This is the Fucking Ans 2?" },
    { question: "This is the Fucking Question 3?", answer: "This is the Fucking Ans 3?" },
    { question: "This is the Fucking Question 4?", answer: "This is the Fucking Ans 4?" },
    { question: "This is the Fucking Question 5?", answer: "This is the Fucking Ans 5?" },
  ];

  return (
    <div className={classes.faqBlock}>
      <div className={classes.queBlock}>
        {questionsAndAnswers.map((qa, index) => (
          <div className={classes.parentQueBlock} key={index}>
            <div
              className={classes.QUE}
              onClick={() => toggleAnswer(index)} // Toggle the answer visibility
            >
              {qa.question}
            </div>
            {/* Conditionally render the answer */}
            {visibleAnswerIndex === index && (
              <div className={classes.ANS}>
                {qa.answer}
              </div>
            )}
          </div>
        ))}
      </div>

      <img className={classes.imageBlock} src = {faqImage}/>
        {/* Your image block content */}
    
    </div>
  );
}

export default Faq;

// THIS IS THE FUKing code for practice

// import classes from "./Faq.module.css"

// function Faq() {
//     return (
//       <div className={classes.faqBlock}>



// <div className={classes.queBlock}>

//   <div className={classes.parentQueBlock}>
//     <div className={classes.QUE}>This is the Fucking Questions?</div>
//     <div className={classes.ANS}>This is the Fucking Ans?</div>
//   </div>

//   <div className={classes.parentQueBlock}>
//     <div className={classes.QUE}>This is the Fucking Questions?</div>
//     <div className={classes.ANS}>This is the Fucking Ans?</div>
//   </div>


//   <div className={classes.parentQueBlock}>
//     <div className={classes.QUE}>This is the Fucking Questions?</div>
//     <div className={classes.ANS}>This is the Fucking Ans?</div>
//   </div>

//   <div className={classes.parentQueBlock}>
//     <div className={classes.QUE}>This is the Fucking Questions?</div>
//     <div className={classes.ANS}>This is the Fucking Ans?</div>
//   </div>

//   <div className={classes.parentQueBlock}>
//     <div className={classes.QUE}>This is the Fucking Questions?</div>
//     <div className={classes.ANS}>This is the Fucking Ans?</div>
//   </div>

// </div>

//        <div className={classes.imageBlock}>

//        </div>


//       </div>
//     );
//   }
  
//   export default Faq;
  