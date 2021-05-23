import { ChangeEvent, useCallback, useMemo } from "react";
import { IDog } from '../../types/Types';
import DogFilterView from "./DogFilterView";

interface Props {
  dogList: IDog[];
  onSelectDogFilter: (breedFilter: string) => void;
}

function DogFilter({ dogList, onSelectDogFilter }: Props) {
  const filterOptions = useMemo(() => 'abcdefghijklmnopqrstuvwxyz'.split(''), []);

  const getDogBreedsLength = useCallback((breedLetter: string) => {
    return dogList.filter(
      (dog) => dog.name.charAt(0).toLowerCase() === breedLetter.toLowerCase()
    ).length;
  },[dogList]);

  const onChangeOption = useCallback((event: ChangeEvent<HTMLInputElement>) => {
    onSelectDogFilter(event.target.value);
  },[onSelectDogFilter]);

  return (
    <DogFilterView
      filterOptions={filterOptions}
      getDogBreedsLength={getDogBreedsLength}
      onChangeOption={onChangeOption}
    />
  );
}

export default DogFilter;
