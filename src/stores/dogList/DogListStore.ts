import { createStore } from "effector";
import { cloneDeep } from "lodash";
import { DogListEvent } from "./DogListEvent";
import { DogListState } from "./DogListState";

const initialState: DogListState = {
  dogList: [],
};

export const DogListStore = createStore<DogListState>(initialState).on(
  DogListEvent,
  (state, dogList) => {
    return cloneDeep({
      ...state,
      dogList,
    });
  }
);
