import { useStyles } from "./DogListView.styles";
import { List, Paper } from "@material-ui/core";
import DogListItem from "./DogListItem";
import { IDog } from "../../types/Types";

interface Props {
  dogList: IDog[];
  selected: IDog;
  onSelect: (breed: string) => void;
}

function DogListView({ dogList, selected, onSelect }: Props) {
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
              selected={item.name === selected.name}
              onSelect={onSelect}
            />
          </List>
        );
      })}
    </Paper>
  );
}

export default DogListView;
