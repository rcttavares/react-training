export interface DogListItemProps {
  name: string;
  image: string;
  scolded: number;
  selected: boolean;
  onSelect: (breed: string) => void;
}

export interface DogListItemViewProps {
  name: string;
  image: string;
  scolded: number;
  selected: boolean;
  onClick: () => void;
}
