import { ChangeEvent } from "react";

export interface DogFilterProps {
  filter: string[];
  onChangeOption: (event: ChangeEvent<HTMLInputElement>) => void;
  getDogBreedLength: (breedLetter: string) => number;
}
