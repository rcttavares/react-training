import { createEvent } from "effector";
import DogItemState from "./DogItemState";

export const setDogItem = createEvent<DogItemState>();
