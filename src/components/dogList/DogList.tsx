import React, { useMemo } from 'react';
import DogListView from './DogListView';
import { Dog } from '../../types/DogListType';

interface Props {
    dogList: Dog[];
    selectedDog: Dog;
    onSelectDog: (breed: string) => void;
    selectedDogFilter: string;
}

function DogList(props: Props) {
    const { dogList, selectedDog, onSelectDog, selectedDogFilter } = props;

    const dogListFilter = useMemo(
        () => selectedDogFilter ? dogList.filter(
            (dog) => dog.name.charAt(0).toLowerCase() === selectedDogFilter.toLowerCase()
        ) : dogList, [dogList, selectedDogFilter]
    );

    return (
        <DogListView
            dogList={dogListFilter}
            selectedDog={selectedDog}
            onSelectDog={onSelectDog}
        />
    )
}

export default DogList;
