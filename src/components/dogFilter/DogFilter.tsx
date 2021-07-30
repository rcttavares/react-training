import { useStoreMap } from 'effector-react';
import { ChangeEvent, useCallback, useMemo } from "react";
import { setDogFilter } from '../../stores/dogFilter/DogFilterEvent';
import DogListStore from '../../stores/dogList/DogListStore';
import DogFilterView from "./DogFilterView";

function DogFilter() {
  const { dogList } = useStoreMap({
    store: DogListStore,
    keys: [],
    fn: (state) => state,
  });

  const filterOptions = useMemo(() => 'abcdefghijklmnopqrstuvwxyz'.split(''), []);

  const getDogBreedsLength = useCallback((breedLetter: string) => {
    return dogList.filter(
      (item) => item.name.charAt(0).toLowerCase() === breedLetter.toLowerCase()
    ).length;
  },[dogList]);

  const onChangeOption = useCallback((event: ChangeEvent<HTMLInputElement>) => {
    setDogFilter({ dogFilter: event.target.value });
  },[]);

  return (
    <DogFilterView
      filterOptions={filterOptions}
      getDogBreedsLength={getDogBreedsLength}
      onChangeOption={onChangeOption}
    />
  );
}

export default DogFilter;
