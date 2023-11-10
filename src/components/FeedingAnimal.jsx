import '../styles/animals.styles.css';
import React, { useEffect } from 'react';
import happyAnimalImage from '../images/happy.png';
import normalAnimalImage from '../images/normal.png';
import hungryAnimalImage from '../images/hungry.png';
import { useDispatch, useSelector } from 'react-redux';
import { getAnimals } from '../redux/selectors';
import { changingHungerLevel } from '../redux/actions';

function FeedingAnimal({
  hungerLevel,
  feedingPeriod,
  isFed,
  feedingAnimal,
  animalId,
  timer,
}) {
  const animals = useSelector(getAnimals);
  const dispatch = useDispatch();

  const feed = (e) => {
    e.preventDefault();
    clearTimeout(timer.current);
    feedingAnimal(animalId, isFed, hungerLevel);
  };

  useEffect(() => {
    if (hungerLevel === 0) {
      return;
    }
    timer.current = setTimeout(() => {
      dispatch(changingHungerLevel(animalId));
    }, feedingPeriod);
  }, [hungerLevel]);

  return (
    <>
      <p>hungerlevel: {hungerLevel}</p>
      <button className="feedAnimal" onClick={feed}>
        Feed animal
      </button>
      <div className="feedStatus">
        <p>Feed status</p>
        <img
          className="feedStatusImage"
          alt="status"
          src={
            hungerLevel >= 80
              ? happyAnimalImage
              : hungerLevel >= 20
              ? normalAnimalImage
              : hungryAnimalImage
          }
        />
      </div>
    </>
  );
}

export default FeedingAnimal;
