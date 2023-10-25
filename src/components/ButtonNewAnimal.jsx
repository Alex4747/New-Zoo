import '../styles/buttonNewAnimal.styles.css';
import React, { useState } from 'react';

import NewAnimalForm from './NewAnimalForm.jsx';

function ButtonNewAnimal({ onAddAnimal }) {
  const [showForm, setShowForm] = useState(false);

  const handleOpenForm = () => {
    setShowForm(true);
  };

  const handleCloseForm = () => {
    setShowForm(false);
  };

  return (
    <div className='buttonNewAnimal'>
      {!showForm ? (
        <button onClick={handleOpenForm}>
          Add animal
        </button>
      ) : (
        <NewAnimalForm formSubmitHandler={onAddAnimal} onClose={handleCloseForm}/>
      )}
    </div>
  );
}

export default ButtonNewAnimal;
