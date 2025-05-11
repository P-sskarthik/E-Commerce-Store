import React from 'react';
import {useState} from "react"
const faqs = [
    { question: 'What is your return policy?', answer: 'You can return any item within 30 days of purchase.' },
    { question: 'How do I track my order?', answer: 'You can track your order using the tracking number provided in your email.' },
    { question: 'Do you ship internationally?', answer: 'Yes, we ship to most countries around the world.' }
  ];
export default function Accordion() {

const [activeIndex, setActiveIndex] = useState(null);


  return (

    <div className="container">
      <h2>FAQ Accordion</h2>
      {
        faqs.map((item, index) => {
            return (
                <>
                <p  onClick={() => setActiveIndex(index)} >
                 {item.question}
                </p>
                <p
                className={` ${activeIndex === index ? "" : "hidden"} `}
                >
                {item.answer}
                </p>
                </>
              

            )
        })
      }
    
    </div>
  );
}
