import { IDog } from "../types/Types";
import { DogFilterEvent } from "../stores/dogFilter/DogFilterEvent";
import { DogItemEvent } from "../stores/dogItem/DogItemEvent";
import { DogListEvent } from "../stores/dogList/DogListEvent";
import { LoaderEvent } from "../stores/loader/LoaderEvent";

export const affenpinscher: IDog = {
  name: "affenpinscher",
  image: "https://images.dog.ceo/affenpinscher.jpg",
  scolded: 0,
};

export const basenji: IDog = {
  name: "basenji",
  image: "https://images.dog.ceo/basenji.jpg",
  scolded: 0,
};

export const emptyDog: IDog = { name: "", image: "", scolded: 0 };

// The effector stores are module singletons, so every test sets the state it needs.
export function setDogState({
  dogList = [affenpinscher, basenji],
  dogItem = emptyDog,
  dogFilter = "",
  isLoading = false,
}: {
  dogList?: IDog[];
  dogItem?: IDog;
  dogFilter?: string;
  isLoading?: boolean;
} = {}) {
  DogListEvent(dogList);
  DogItemEvent({ dogItem });
  DogFilterEvent({ dogFilter });
  LoaderEvent({ isLoading });
}
