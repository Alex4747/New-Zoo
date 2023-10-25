import '../styles/animals.styles.css';
import ButtonNewAnimal from './ButtonNewAnimal.jsx';
import React, { useState, useEffect } from 'react';
import {Link} from 'react-router-dom';
import logo from '../images/logo.png';
import happyAnimalImage from '../images/happy.png';
import normalAnimalImage from '../images/normal.png';
import hungryAnimalImage from '../images/hungry.png';
import { useSelector } from "react-redux"
import { getAnimals } from '../redux/selectors';

  function Animals() {
    const animals = useSelector(getAnimals)
    const [animalList, setAnimalList] = useState(animals);
    const [userInteracted, setUserInteracted] = useState(false);
    const [isPlaying, setIsPlaying] = useState(false);
    const [currentAudio, setCurrentAudio] = useState(null);
    // const [feeding, setFeeding] = useState(animalList.feedingPeriod);
  
    const handleAddAnimal = (newAnimal) => {
      setAnimalList([...animalList, newAnimal]);
    };

    const handleDeleteAnimal = (index, e) => {
      e.preventDefault();
      setIsPlaying(false);
      if (currentAudio) {
        currentAudio.pause();
      }
      const updatedList = animalList.filter((_, i) => i !== index);
      setAnimalList(updatedList);
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

    const feedingAnimal = () => {
      
    }

    // const feedingAnimal = () => {
    //   setFeeding()
    // }

    useEffect(() => {
      localStorage.setItem('animalList', JSON.stringify(animalList));
    }, [animalList]);

    useEffect(() => {
      if (userInteracted && isPlaying) {
        if (currentAudio) {
          currentAudio.play();
        }
      }
    }, [userInteracted, isPlaying, currentAudio]);

    // useEffect(() => {
    //   setTimeout
    // })

    return (
      <div>
        <header>
          <img src={logo} alt="Лого Зоопарка"/>
        </header>
        <div className='animal-container'>
          {animalList?.map((animal, index) => (
            <Link to={`/animal/${animal.id}`} key={animal.id} className='notLink'>
              <div className='animal-item'>
                <button className="closeCard" onClick={(e) => handleDeleteAnimal(index, e)}>
                  &times;
                </button>
                <img src={animal.image} alt={animal.name} />
                <p>Name: <button onClick={(e) => { e.preventDefault(); handleUserInteraction(); playAnimalSound(animal); }}>{animal.name}</button></p>
                <p>Age: {animal.age}</p>
                <button className="feedAnimal" onClick={feedingAnimal()}>
                  Feed animal
                </button>
                {/* {animal.isFed ? <p style={{color: 'green'}}>true</p> : <p style={{color: 'red'}}>false</p> } */}
                <div className='feedStatus'>
                  <p>Feed status</p>
                  <img className='feedStatusImage' alt="status" src={animal.isFed ? happyAnimalImage : hungryAnimalImage}/>
                </div>
                </div>
            </Link>
          ))}
        </div>
        <div>
          <ButtonNewAnimal onAddAnimal={handleAddAnimal}/>
        </div>
      </div>
    );
  }
  
  export default Animals;
