import '../styles/animal.styles.css';
import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import { getAnimals } from '../redux/selectors';

function Animal() {
  const animals = useSelector(getAnimals)
  const { id } = useParams();
  const animalId = parseInt(id, 10);
  const animal = animals.find(animal => animal.id === animalId); //search for an object in the animals array with a certain id property value. 
                                                                 //if an object with the corresponding id is found, it will be stored in the animal variable.
  if (!animal) {
    return <div>Animal not found.</div>;
  }

    return (
      <div className='aboutAnimal'>
      <img src={animal.image} alt={animal.name} />
        <div>
          <p>Name: {animal.name}</p>
          <p>Age: {animal.age}</p>
        </div>
    </div>
  );
}

export default Animal;
