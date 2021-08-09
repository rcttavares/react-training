import { DogListItemProps } from "./DogListItem.types";
import DogListItemView from "./DogListItemView";

function DogListItem({
  name,
  image,
  scolded,
  selected,
  onClick,
}: DogListItemProps) {
  return (
    <DogListItemView
      name={name}
      image={image}
      scolded={scolded}
      selected={selected}
      onClick={onClick}
    />
  );
}

export default DogListItem;
