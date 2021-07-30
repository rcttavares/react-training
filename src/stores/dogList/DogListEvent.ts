import { createEvent } from "effector";
import { IDog } from "../../types/Types";

export const setDogList = createEvent<IDog[]>();
