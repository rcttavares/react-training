import { createStore } from "effector";
import { cloneDeep } from "lodash";
import { setDogList } from "./DogListEvent";
import DogListState from "./DogListState";

const initialState: DogListState = {
  dogList: [],
};

const DogListStore = createStore<DogListState>(initialState).on(
  setDogList,
  (state, dogList) => {
    return cloneDeep({
      ...state,
      dogList,
    });
  }
);

export default DogListStore;
