import { ChangeEvent, useCallback, useMemo } from "react";
import DogFilterView from "./DogFilterView";
import { useStoreMap } from "effector-react";
import { DogFilterEvent } from "../../stores/dogFilter/DogFilterEvent";
import { DogListStore } from "../../stores/dogList/DogListStore";

function DogFilter() {
  const { dogList } = useStoreMap({
    store: DogListStore,
    keys: [],
    fn: (state) => state,
  });

  const filter = useMemo(() => "abcdefghijklmnopqrstuvwxyz".split(""), []);

  const onChangeOption = useCallback((event: ChangeEvent<HTMLInputElement>) => {
    DogFilterEvent({ dogFilter: event.target.value });
  }, []);

  const getDogBreedLength = useCallback(
    (breedLetter: string) => {
      return dogList.filter(
        (item) =>
          item.name.charAt(0).toLowerCase() === breedLetter.toLowerCase()
      ).length;
    },
    [dogList]
  );

  return (
    <DogFilterView
      filter={filter}
      onChangeOption={onChangeOption}
      getDogBreedLength={getDogBreedLength}
    />
  );
}

export default DogFilter;
