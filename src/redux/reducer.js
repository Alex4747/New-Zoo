import { combineReducers } from 'redux';
import { nanoid } from 'nanoid';
import Lion from '../images/lion.png';
import Zebra from '../images/zebra.png';
import Elephant from '../images/elephant.png';
import Penguin from '../images/penguin.png';
import Cheetah from '../images/cheetah.png';
import LionSound from '../audio/lion.mp3';
import ZebraSound from '../audio/zebra.mp3';
import ElephantSound from '../audio/elephant.mp3';
import PenguinSound from '../audio/penguin.mp3';
import CheetahSound from '../audio/cheetah.mp3';

const initialState = {
  animalsList: [
    {
      id: nanoid(),
      name: 'Lion',
      species: 'lion',
      age: 5,
      image: Lion,
      sound: LionSound,
      hungerLevel: 100,
      feedingPeriod: 1000,
      isFed: true,
      isAlive: true,
    },
    {
      id: nanoid(),
      name: 'Zebra',
      species: 'zebra',
      age: 3,
      image: Zebra,
      sound: ZebraSound,
      hungerLevel: 100,
      feedingPeriod: 500,
      isFed: true,
      isAlive: true,
    },
    {
      id: nanoid(),
      name: 'Elephant',
      species: 'elephant',
      age: 8,
      image: Elephant,
      sound: ElephantSound,
      hungerLevel: 100,
      feedingPeriod: 2000,
      isFed: true,
      isAlive: true,
    },
    {
      id: nanoid(),
      name: 'Penguin',
      species: 'penguin',
      age: 2,
      image: Penguin,
      sound: PenguinSound,
      hungerLevel: 100,
      feedingPeriod: 100,
      isFed: true,
      isAlive: true,
    },
    {
      id: nanoid(),
      name: 'Cheetah',
      species: 'cheetah',
      age: 4,
      image: Cheetah,
      sound: CheetahSound,
      hungerLevel: 100,
      feedingPeriod: 500,
      isFed: true,
      isAlive: true,
    },
  ],
};

const animalsReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'feedingAnimal':
      const animalIdToFeed = action.payload.animalId;
      const updatedAnimalsList = state.animalsList.map((animal) => {
        if (animal.id === animalIdToFeed) {
          return {
            ...animal,
            hungerLevel: 100,
            isFed: true,
          };
        }
        return animal;
      });

      return {
        ...state,
        animalsList: updatedAnimalsList,
      };

    case 'changingHungerLevel':
      const updatedFeedingAnimalsList = state.animalsList.map((animal) => {
        if (animal.id === action.payload.animalId) {
          return {
            ...animal,
            hungerLevel: animal.hungerLevel - 1,
            isFed: false,
          };
        }
        return animal;
      });

      return {
        ...state,
        animalsList: updatedFeedingAnimalsList,
      };

    case 'addAnimal':
      return {
        ...state,
        animalsList: [...state.animalsList, action.payload.animal],
      };

    case 'deleteAnimal':
      return {
        ...state,
        animalsList: state.animalsList.filter(
          (animal) => animal.id !== action.payload.animalId,
        ),
      };

    default:
      return state;
  }
};

export const rootReducer = combineReducers({
  animals: animalsReducer,
});
