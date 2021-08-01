import { createStore } from "effector";
import { cloneDeep } from "lodash";
import { DogItemEvent } from "./DogItemEvent";
import { DogItemState } from "./DogItemState";

const initialState: DogItemState = {
  dogItem: {
    name: "",
    image: "",
    scolded: 0,
  },
};

export const DogItemStore = createStore<DogItemState>(initialState).on(
  DogItemEvent,
  (state, dogItem) =>
    cloneDeep({
      ...state,
      ...dogItem,
    })
);
