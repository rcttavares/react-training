import { useStoreMap } from 'effector-react';
import { useMemo } from "react";
import DogFilterStore from '../../stores/dogFilter/DogFilterStore';
import { setDogItem } from '../../stores/dogItem/DogItemEvent';
import DogItemStore from '../../stores/dogItem/DogItemStore';
import DogListStore from '../../stores/dogList/DogListStore';
import DogListView from "./DogListView";

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

  const dogListFilter = useMemo(() => 
    dogFilter
      ? dogList.filter(
        (item) => item.name.charAt(0).toLowerCase() === dogFilter.toLowerCase()
      )
      : dogList,
    [dogList, dogFilter]
  );

  const onSelect = (breed: string) => {
    const selectedBreed = dogList.find(
      (item) => item.name.toLowerCase() === breed.toLowerCase()
    );

    if (!selectedBreed) return;
    setDogItem({ dogItem: selectedBreed});
  };

  return (
    <DogListView
      dogList={dogListFilter}
      selected={dogItem}
      onSelect={onSelect}
    />
  );
}

export default DogList;
