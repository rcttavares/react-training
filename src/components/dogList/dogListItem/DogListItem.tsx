import { useCallback } from "react";
import { DogListItemProps } from "./DogListItem.types";
import DogListItemView from "./DogListItemView";

function DogListItem({
  name,
  image,
  scolded,
  selected,
  onSelect,
}: DogListItemProps) {
  const onClick = useCallback(() => {
    onSelect(name);
  }, [name, onSelect]);

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
