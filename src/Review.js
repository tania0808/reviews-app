import React, { useState } from "react";
import people from "./data";
import { FaChevronLeft, FaChevronRight, FaQuoteRight } from "react-icons/fa";

const Review = () => {
  const [index, setIndex] = useState(0);

  const checkIndex = (index) => {
    if (index > people.length - 1) {
      return 0;
    }
    if (index < 0) {
      return people.length - 1;
    }
    return index;
  }

  const nextPerson = () => {
    setIndex(index => {
      let newIndex = index + 1;
      return checkIndex(newIndex)
    });
  };

  const previousPerson = () => {
    setIndex(index => {
      let newIndex = index - 1;
      return checkIndex(newIndex)
    });
  };

  console.log(index);

  const randomPerson = () => {
    setIndex(Math.floor(Math.random() * (people.length - 1)));
  }

  return (
    <div className="review-card">
      <div className="image-container">
        <img src={people[index].image} alt="" />
        <span className="quote">
          <FaQuoteRight />
        </span>
      </div>
      <h4 className="person-name">{people[index].name}</h4>
      <p className="person-job">{people[index].job}</p>
      <p>{people[index].text}</p>
      <div className="button-container">
        <button onClick={previousPerson}>
          <FaChevronLeft />
        </button>
        <button onClick={nextPerson}>
          <FaChevronRight />
        </button>
      </div>
      <button className="random-btn" onClick={randomPerson}>Surprise Me</button>
    </div>
  );
};

export default Review;
