import { createEffect } from "effector";
import { getBreed } from "../../services/dogBreed/DogBreedService";
import { setLoading } from "../loader/LoaderEvent";
import { setDogList } from "./DogListEvent";

export const fetchBreeds = createEffect(async () => {
  setLoading({ loading: true });

  const result = await getBreed();
  setDogList(result);

  setLoading({ loading: false });
});
