import '../styles/newAnimalForm.styles.css';
import Kangaroo from '../images/kangaroo.png';
import Gorilla from '../images/gorilla.png';
import Koala from '../images/koala.png';
import Tiger from '../images/tiger.png';
import Panda from '../images/panda.png';
import React, { useState } from 'react';

function NewAnimalForm({ formSubmitHandler, onClose }) {
  const [name, setName] = useState('');
  const [age, setAge] = useState('');
  const [feedingPeriod, setFeedingPeriod] = useState('');
  const [image, setImage] = useState('');
  const [error, setError] = useState('');

  const handleAddAnimal = (event) => {
    event.preventDefault();

    if (!name || !age || !feedingPeriod || !image) {
      setError('Please fill all fields');
      return;
    }

    let image1;
    if (image === 'Kangaroo') {
      image1 = Kangaroo;
    } else if (image === 'Gorilla') {
      image1 = Gorilla;
    } else if (image === 'Koala') {
      image1 = Koala;
    } else if (image === 'Tiger') {
      image1 = Tiger;
    } else if (image === 'Panda') {
      image1 = Panda;
    }

    const newAnimal = {
      name: name,
      age: parseInt(age),
      feedingPeriod: parseInt(feedingPeriod),
      image: image1,
    };


    formSubmitHandler(newAnimal);
    setName('');
    setAge('');
    setImage('');
    setFeedingPeriod('');
    setError('');
  };

  return (
    <div className="overlay">
      <form onSubmit={handleAddAnimal}>
        <button className="close-button" onClick={onClose}>
          &times;
        </button>
        <label>
          Name:
          <input
            type="text"
            name="name"
            value={name}
            onChange={(event) => setName(event.target.value)}
          />
        </label>

        <label>
          Age:
          <input
            type="text"
            name="age"
            value={age}
            onChange={(event) => setAge(event.target.value)}
          />
        </label>

        <label>
          Feeding Period:
          <input
            type="number"
            name="feedingPeriod"
            value={feedingPeriod}
            onChange={(event) => setFeedingPeriod(event.target.value)}
          />
        </label>

        <label>
          Image:
          <input
            type="text"
            name="image"
            value={image}
            onChange={(event) => setImage(event.target.value)}
          />
        </label>

        {error && <div className="fieldError">{error}</div>}
        <button type="submit">Submit</button>
      </form>
    </div>
  );
}

export default NewAnimalForm;
