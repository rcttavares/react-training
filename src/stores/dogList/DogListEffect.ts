import { createEffect } from "effector";
import * as DogBreedService from "../../services/dogBreed/DogBreedService";
import { LoaderEvent } from "../loader/LoaderEvent";
import { DogListEvent } from "./DogListEvent";

export const DogListEffect = createEffect(async () => {
  LoaderEvent({ isLoading: true });

  const response = await DogBreedService.getBreed();
  DogListEvent(response);

  LoaderEvent({ isLoading: false });
});
