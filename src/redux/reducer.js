import { combineReducers } from "redux";
import Lion from '../images/lion.png';
import Zebra from '../images/zebra.png';
import Elephant from '../images/elephant.png';
import Penguin from '../images/penguin.png';
import Cheetah from '../images/cheetah.png';
import LionSound from '../audio/lion.mp3';
import ZebraSound from '../audio/zebra.mp3';
import ElephantSound from '../audio/elephant.mp3';
import PenguinSound from '../audio/penguin.mp3';
import CheetahSound from '../audio/cheetah.mp3'

const initialState = {
  animalsList: [
      {
          id: 0,
          name: "Lion",
          species: 'lion',
          age: 5,
          image: Lion,
          sound: LionSound,
          hungerLevel: 100,
          feedingPeriod: 2,
          isFed: true,
          isAlive: true,
        },
        {
          id: 1,
          name: "Zebra",
          species: 'zebra',
          age: 3,
          image: Zebra,
          sound: ZebraSound,
          hungerLevel: 1,
          feedingPeriod: 1,
          isFed: false,
          isAlive: true,
        },
        {
          id: 2,
          name: "Elephant",
          species: 'elephant',
          age: 8,
          image: Elephant,
          sound: ElephantSound,
          hungerLevel: 100,
          feedingPeriod: 3,
          isFed: true,
          isAlive: true,
        },
        {
          id: 3,
          name: "Penguin",
          species: 'penguin',
          age: 2,
          image: Penguin,
          sound: PenguinSound,
          hungerLevel: 100,
          feedingPeriod: 0.5,
          isFed: false,
          isAlive: true,
        },
        {
          id: 4,
          name: "Cheetah",
          species: 'cheetah',
          age: 4,
          image: Cheetah,
          sound: CheetahSound,
          hungerLevel: 100,
          feedingPeriod: 2,
          isFed: true,
          isAlive: true,
        },
  ]
}

const animalsReducer = (state = initialState, action) => {
    switch (action.type) {
        case 'addAnimal':
            return [
                    ...state,
                    action.payload
                ];
        case 'deleteAnimal':
            return state.filter(task => task.id !== action.payload);
        // case 'tasks/toggleCompleted':
        //     return state.map(task => {
        //             if (task.id !== action.payload) {
        //                 return task;
        //             }
        //             return {
        //                 ...task,
        //                 completed: !task.completed
        //             }
        //         });
        // case 'tasks/deleteAllCompleted':
        //     return state.filter(task => !task.completed);
        default:
            return state;
    }
}

export const rootReducer = combineReducers({
    animals: animalsReducer,
})