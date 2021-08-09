import Avatar from "@material-ui/core/Avatar";
import Chip from "@material-ui/core/Chip";
import ListItem from "@material-ui/core/ListItem";
import ListItemAvatar from "@material-ui/core/ListItemAvatar";
import ListItemText from "@material-ui/core/ListItemText";
import ListItemSecondaryAction from "@material-ui/core/ListItemSecondaryAction";
import { capitalize } from "lodash";
import { DogListItemProps } from "./DogListItem.types";

function DogListItemView({
  name,
  image,
  scolded,
  selected,
  onClick,
}: DogListItemProps) {
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
