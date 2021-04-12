import React, { useCallback, useMemo } from 'react';
import { Dog } from '../../types/DogListType';
import DogFilterView from './DogFilterView';

interface Props {
    dogList: Dog[];
    onSelectDogFilter: (breedFilter: string) => void;
}

function DogFilter(props: Props) {
    const { dogList, onSelectDogFilter } = props;

    const filterOptions = useMemo(() => 'abcdefghijklmnopqrstuvwxyz'.split(''), []);

    const getDogBreedsLength = useCallback((breedLetter: string) => {
        return dogList.filter(
            (dog) => dog.name.charAt(0).toLowerCase() === breedLetter.toLowerCase()
        ).length;
    }, [dogList]);

    const onChangeOption = useCallback((e: React.ChangeEvent<HTMLInputElement>) => {
        onSelectDogFilter(e.target.value);
    }, [onSelectDogFilter]);

    return (
        <DogFilterView
            filterOptions={filterOptions}
            getDogBreedsLength={getDogBreedsLength}
            onChangeOption={onChangeOption}
        />
    );
}

export default DogFilter;
