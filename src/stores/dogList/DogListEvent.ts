import { createEvent } from "effector";
import { IDog } from "../../types/Types";

export const DogListEvent = createEvent<IDog[]>();
