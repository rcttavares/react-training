import { useStyles } from "./DogListView.styles";
import List from "@material-ui/core/List";
import Paper from "@material-ui/core/Paper";
import DogListItem from "./dogListItem/DogListItem";
import { DogListProps } from "./DogList.types";

function DogListView({ dogList, dogItem, onSelect }: DogListProps) {
  const classes = useStyles();

  return (
    <Paper className={classes.paper}>
      {dogList.map((item, index) => {
        return (
          <List key={index} className={classes.list}>
            <DogListItem
              name={item.name}
              image={item.image}
              scolded={item.scolded}
              selected={item.name === dogItem.name}
              onClick={() => onSelect(item)}
            />
          </List>
        );
      })}
    </Paper>
  );
}

export default DogListView;
