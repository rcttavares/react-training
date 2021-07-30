export interface DogDetailsProps {
  name: string;
  image: string;
  onScold: () => void;
  onBark: () => void;
  disabled: boolean;
}
