import { useStyles } from "./DogListView.styles";
import Box from "@material-ui/core/Box";
import List from "@material-ui/core/List";
import Paper from "@material-ui/core/Paper";
import Typography from "@material-ui/core/Typography";
import DogListItem from "./dogListItem/DogListItem";
import { DogListProps } from "./DogList.types";

function DogListView({ dogList, dogItem, onSelect }: DogListProps) {
  const classes = useStyles();

  return (
    <Paper className={classes.paper}>
      {dogList.length <= 0 ? (
        <Box className={classes.box}>
          <Typography variant="h6" component="h2">
            There is no such initial letter, <b>please select another breed</b>.
          </Typography>
        </Box>
      ) : (
        <List className={classes.list}>
          {dogList.map((item, index) => (
            <DogListItem
              key={index}
              name={item.name}
              image={item.image}
              scolded={item.scolded}
              selected={item.name === dogItem.name}
              onClick={() => onSelect(item)}
            />
          ))}
        </List>
      )}
    </Paper>
  );
}

export default DogListView;
