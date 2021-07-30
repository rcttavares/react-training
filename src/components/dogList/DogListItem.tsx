import DogListItemView from "./DogListItemView";

interface Props {
  name: string;
  image: string;
  scolded: number;
  selected: boolean;
  onSelect: (breed: string) => void;
}

function DogListItem({ name, image, scolded, selected, onSelect }: Props) {
  return (
    <DogListItemView
      name={name}
      image={image}
      scolded={scolded}
      selected={selected}
      onSelect={onSelect}
    />
  );
}

export default DogListItem;
