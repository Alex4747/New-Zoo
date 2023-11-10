import '../styles/animals.styles.css';
import React, { useRef } from 'react';
import { Link } from 'react-router-dom';
import FeedingAnimal from './FeedingAnimal';

function Animal({
  animal,
  handleDeleteAnimal,
  handleUserInteraction,
  playAnimalSound,
  feedingAnimal,
}) {
  const timer = useRef(null);

  return (
    <div className="animal-item">
      <button
        className="closeCard"
        onClick={() => {
          // if (timer.current) {
            clearTimeout(timer.current)
          // }
          handleDeleteAnimal(animal.id)
        }}
      >
        &times;
      </button>
      <Link to={`/animal/${animal.id}`} key={animal.id} className="notLink">
        <img src={animal.image} alt={animal.name} />
      </Link>
      <p>
        Name:{' '}
        <button
          onClick={(e) => {
            e.preventDefault();
            handleUserInteraction();
            playAnimalSound(animal);
          }}
        >
          {animal.name}
        </button>
      </p>
      <p>Age: {animal.age}</p>
      <FeedingAnimal
        hungerLevel={animal.hungerLevel}
        feedingPeriod={animal.feedingPeriod}
        isFed={animal.isFed}
        feedingAnimal={feedingAnimal}
        animalId={animal.id}
        timer={timer}
      />
    </div>
  );
}

export default Animal;
