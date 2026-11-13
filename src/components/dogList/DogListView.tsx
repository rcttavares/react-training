import { styles } from "./DogListView.styles";
import Box from "@mui/material/Box";
import List from "@mui/material/List";
import Paper from "@mui/material/Paper";
import Typography from "@mui/material/Typography";
import DogListItem from "./dogListItem/DogListItem";
import { DogListProps } from "./DogList.types";

function DogListView({ dogList, dogItem, onSelect }: DogListProps) {
  return (
    <Paper sx={styles.paper}>
      {dogList.length <= 0 ? (
        <Box sx={styles.box}>
          <Typography variant="h6" component="h2">
            There is no such initial letter, <b>please select another breed</b>.
          </Typography>
        </Box>
      ) : (
        <List sx={styles.list}>
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
