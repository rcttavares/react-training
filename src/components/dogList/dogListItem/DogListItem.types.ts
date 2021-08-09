export interface DogListItemProps {
  name: string;
  image: string;
  scolded: number;
  selected: boolean;
  onClick: () => void;
}
