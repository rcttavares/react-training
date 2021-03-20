import React from 'react';
import DogListView from './DogListView';
import { Dog } from '../../types/DogListType';

interface Props {
    dogList: Dog[];
    selectedDog: Dog;
    onSelectDog: (breed: string) => void;
}

function DogList(props: Props) {
    const { dogList, selectedDog, onSelectDog } = props;

    return (
        <DogListView
            dogList={dogList}
            selectedDog={selectedDog}
            onSelectDog={onSelectDog}
        />
    )
}

export default DogList;
