import { nanoid } from 'nanoid'

export function feedingAnimal(animalId) {
  return {
    type: 'feedingAnimal',
    payload: {
      animalId,
    },
  };
}

export function changingHungerLevel(animalId) {
  return {
    type: 'changingHungerLevel',
    payload: {
      animalId,
    },
  };
}

export function addAnimal(animal) {
  return {
    type: 'addAnimal',
    payload: {
      animal: {
        ...animal,
        id: nanoid(),
        hungerLevel: 100,
        isFed: true,
        isAlive: true,
      },
    },
  };
}

export function deleteAnimal(animalId) {
  return {
    type: 'deleteAnimal',
    payload: {
      animalId,
    },
  };
}
