import '../styles/animals.styles.css';
import ButtonNewAnimal from './ButtonNewAnimal.jsx';
import React, { useState, useEffect } from 'react';
import logo from '../images/logo.png';
import { useDispatch, useSelector } from 'react-redux';
import { getAnimals } from '../redux/selectors';
import { addAnimal, deleteAnimal, feedingAnimal } from '../redux/actions';
import Animal from './Animal';

function Animals() {
  const animals = useSelector(getAnimals);
  const [userInteracted, setUserInteracted] = useState(false);
  const [isPlaying, setIsPlaying] = useState(false);
  const [currentAudio, setCurrentAudio] = useState(null);
  const dispatch = useDispatch();

  const handleAddAnimal = (newAnimal) => {
    dispatch(addAnimal(newAnimal));
  };

  const handleDeleteAnimal = (id) => {
    setIsPlaying(false);
    if (currentAudio) {
      currentAudio.pause();
    }
    dispatch(deleteAnimal(id));
  };

  const playAnimalSound = (animal) => {
    if (currentAudio) {
      currentAudio.pause();
    }
    const audio = new Audio(animal.sound);
    setIsPlaying(true);
    setCurrentAudio(audio);
    audio.play();
  };

  const handleUserInteraction = () => {
    setUserInteracted(true);
  };

  const feedAnimal = (animalId) => {
    dispatch(feedingAnimal(animalId));
  };

  useEffect(() => {
    localStorage.setItem('animalList', JSON.stringify(animals));
  }, [animals]);

  useEffect(() => {
    if (userInteracted && isPlaying) {
      if (currentAudio) {
        currentAudio.play();
      }
    }
  }, [userInteracted, isPlaying, currentAudio]);

  return (
    <div>
      <header>
        <img src={logo} alt="Лого Зоопарка" />
      </header>
      <div className="animal-container">
        {animals?.map((animal) => (
          <Animal
            key={animal.id}
            animal={animal}
            handleDeleteAnimal={handleDeleteAnimal}
            handleUserInteraction={handleUserInteraction}
            playAnimalSound={playAnimalSound}
            feedingAnimal={feedAnimal}
          />
        ))}
      </div>
      <div>
        <ButtonNewAnimal onAddAnimal={handleAddAnimal} />
      </div>
    </div>
  );
}

export default Animals;
