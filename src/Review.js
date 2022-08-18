import React, { useState } from "react";
import people from "./data";
import { FaChevronLeft, FaChevronRight, FaQuoteRight } from "react-icons/fa";

const Review = () => {
  const [iterator, setIterator] = useState(0);

  const nextPerson = () => {
    setIterator(iterator + 1);
    if (iterator === people.length - 1) {
      setIterator(0);
    }
  };

  const previousPerson = () => {
    setIterator(iterator - 1);
    if (iterator <= 0) {
      setIterator(people.length - 1);
    }
  };

  const randomPerson = () => {
    setIterator(Math.floor(Math.random() * (people.length - 1)));
  }

  return (
    <div className="review-card">
      <div className="image-container">
        <img src={people[iterator].image} alt="" />
        <span className="quote">
          <FaQuoteRight />
        </span>
      </div>
      <h4 className="person-name">{people[iterator].name}</h4>
      <p className="person-job">{people[iterator].job}</p>
      <p>{people[iterator].text}</p>
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
