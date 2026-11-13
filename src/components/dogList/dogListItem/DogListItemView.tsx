import Avatar from "@mui/material/Avatar";
import Chip from "@mui/material/Chip";
import ListItem from "@mui/material/ListItem";
import ListItemAvatar from "@mui/material/ListItemAvatar";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemText from "@mui/material/ListItemText";
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
    <ListItem disablePadding secondaryAction={<Chip label={scolded} />}>
      <ListItemButton selected={selected} onClick={onClick}>
        <ListItemAvatar>
          <Avatar alt={name} src={image} />
        </ListItemAvatar>
        <ListItemText primary={capitalize(name)} />
      </ListItemButton>
    </ListItem>
  );
}

export default DogListItemView;
