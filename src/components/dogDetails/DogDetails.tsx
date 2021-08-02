import { useCallback } from "react";
import { useSnackbar } from "notistack";
import DogDetailsView from "./DogDetailsView";
import { useStoreMap } from "effector-react";
import { DogListEvent } from "../../stores/dogList/DogListEvent";
import { DogListStore } from "../../stores/dogList/DogListStore";
import { DogItemStore } from "../../stores/dogItem/DogItemStore";

function DogDetails() {
  const { enqueueSnackbar } = useSnackbar();

  const { dogList } = useStoreMap({
    store: DogListStore,
    keys: [],
    fn: (state) => state,
  });

  const { dogItem } = useStoreMap({
    store: DogItemStore,
    keys: [],
    fn: (state) => state,
  });

  const onScold = useCallback(() => {
    const breedScolded = dogList.map((item) => {
      if (item.name.toLowerCase() === dogItem?.name.toLowerCase())
        return { ...item, scolded: item.scolded + 1 };
      return item;
    });

    DogListEvent(breedScolded);
  }, [dogItem?.name, dogList]);

  const onBark = useCallback(() => {
    enqueueSnackbar("Woof! Woof!", {
      anchorOrigin: {
        vertical: "top",
        horizontal: "center",
      },
    });
  }, [enqueueSnackbar]);

  return (
    <DogDetailsView
      name={dogItem?.name}
      image={dogItem?.image}
      onScold={onScold}
      onBark={onBark}
      disabled={!dogItem?.name}
    />
  );
}

export default DogDetails;
