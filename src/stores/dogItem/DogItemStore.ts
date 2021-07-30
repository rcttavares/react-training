import { createStore } from "effector";
import { cloneDeep } from "lodash";
import { setDogItem } from "./DogItemEvent";
import DogItemState from "./DogItemState";

const initialState: DogItemState = {
  dogItem: {
    name: "",
    image: "",
    scolded: 0,
  },
};

const DogItemStore = createStore<DogItemState>(initialState).on(
  setDogItem,
  (state, dogItem) =>
    cloneDeep({
      ...state,
      ...dogItem,
    })
);

export default DogItemStore;
