import { createStore } from "redux";
import { devToolsEnhancer } from "@redux-devtools/extension";
import { rootReducer } from '../redux/reducer';
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

  const enhancer = devToolsEnhancer();
  export const store = createStore(rootReducer, enhancer);