import { useStoreMap } from "effector-react";
import { useCallback, useMemo } from "react";
import { DogListStore } from "../../stores/dogList/DogListStore";
import { DogItemEvent } from "../../stores/dogItem/DogItemEvent";
import { DogItemStore } from "../../stores/dogItem/DogItemStore";
import { DogFilterStore } from "../../stores/dogFilter/DogFilterStore";
import DogListView from "./DogListView";
import { IDog } from "../../types/Types";

function DogList() {
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

  const { dogFilter } = useStoreMap({
    store: DogFilterStore,
    keys: [],
    fn: (state) => state,
  });

  const dogListFilter = useMemo(
    () =>
      dogFilter
        ? dogList.filter(
            (item) =>
              item.name.charAt(0).toLowerCase() === dogFilter.toLowerCase()
          )
        : dogList,
    [dogList, dogFilter]
  );

  const onSelect = useCallback((breed: IDog) => {
    DogItemEvent({ dogItem: breed });
  }, []);

  return (
    <DogListView
      dogList={dogListFilter}
      dogItem={dogItem}
      onSelect={onSelect}
    />
  );
}

export default DogList;
