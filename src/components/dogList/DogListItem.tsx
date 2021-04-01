import React from 'react';
import DogListItemView from './DogListItemView';

interface Props {
    name: string;
    image: string;
    scolded: number;
    selected: boolean;
    onSelectDog: (breed: string) => void;
}

function DogListItem(props: Props) {
    const { name, image, scolded, selected, onSelectDog } = props;

    return (
        <DogListItemView
            name={name}
            image={image}
            scolded={scolded}
            selected={selected}
            onSelectDog={onSelectDog}
        />
    );
};

export default DogListItem;
