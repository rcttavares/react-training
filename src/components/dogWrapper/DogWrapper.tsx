import React, { useState } from 'react';
import { Dog } from '../../types/DogListType';
import { getBreeds } from '../../services/DogListService';
import DogWrapperView from './DogWrapperView';

function DogWrapper() {
    const [dogList, setDogList] = useState<Dog[]>([]);
    const [selectedDog, setSelectedDog] = useState<Dog>({} as Dog);
    const [loading, setLoading] = useState(false);
    
    const fetchBreeds = async () => {
        setLoading(true);

        const result = await getBreeds();
        setDogList(result);

        setLoading(false);
    };

    React.useEffect(() => {
        fetchBreeds();
    }, []);

    const onScold = () => {
        const scoldedBreed = dogList.map((dog) => {
            if (dog.name.toLowerCase() === selectedDog.name.toLowerCase())
                return { ...dog, scolded: dog.scolded + 1 };
            return dog;
        });

        setDogList(scoldedBreed);
    };

    const onSelectDog = (breed: string) => {
        const selectedBreed = dogList.find((dog) => dog.name.toLowerCase() === breed.toLowerCase());
        if (!selectedBreed) return;
        setSelectedDog(selectedBreed);
    };

    return (
        <DogWrapperView
            name={selectedDog?.name}
            image={selectedDog?.image}
            onScold={onScold}
            disabled={!selectedDog.name}
            dogList={dogList}
            selectedDog={selectedDog}
            onSelectDog={onSelectDog}
            loading={loading}
        />
    )
}

export default DogWrapper;
