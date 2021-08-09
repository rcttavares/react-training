import { IDog } from "../../types/Types";

export interface DogListProps {
  dogList: IDog[];
  dogItem: IDog;
  onSelect: (breed: IDog) => void;
}
