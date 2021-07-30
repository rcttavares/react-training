import { createEvent } from "effector";
import DogFilterState from "./DogFilterState";

export const setDogFilter = createEvent<DogFilterState>();
