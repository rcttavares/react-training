import { MouseEventHandler, useCallback } from "react";
import ListItem from "@material-ui/core/ListItem";
import ListItemAvatar from "@material-ui/core/ListItemAvatar";
import Avatar from "@material-ui/core/Avatar";
import ListItemText from "@material-ui/core/ListItemText";
import ListItemSecondaryAction from "@material-ui/core/ListItemSecondaryAction";
import Chip from "@material-ui/core/Chip";
import { capitalize } from "lodash";

interface Props {
  name: string;
  image: string;
  scolded: number;
  selected: boolean;
  onSelect: (breed: string) => void;
}

function DogListItemView({ name, image, scolded, selected, onSelect }: Props) {
  const onClick: MouseEventHandler<HTMLDivElement> = useCallback(() => {
    onSelect(name);
  }, [name, onSelect]);

  return (
    <ListItem button selected={selected} onClick={onClick}>
      <ListItemAvatar>
        <Avatar alt={name} src={image} />
      </ListItemAvatar>
      <ListItemText primary={capitalize(name)} />
      <ListItemSecondaryAction>
        <Chip label={scolded} />
      </ListItemSecondaryAction>
    </ListItem>
  );
}

export default DogListItemView;
