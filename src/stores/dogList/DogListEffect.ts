import { createEffect } from "effector";
import * as DogBreedService from "../../services/dogBreed/DogBreedService";
import { LoaderEvent } from "../loader/LoaderEvent";
import { DogListEvent } from "./DogListEvent";

export const DogListEffect = createEffect(async () => {
  LoaderEvent({ isLoading: true });

  const result = await DogBreedService.getBreed();
  DogListEvent(result);

  LoaderEvent({ isLoading: false });
});
