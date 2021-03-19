import React, { useState } from 'react';
import DogListView from './DogListView';
import { getBreeds } from '../../services/DogListService';
import { Dog } from '../../types/DogListType';

function DogList() {
    const [dogList, setDogList] = useState<Dog[]>([]);

    const fetchBreeds = async () => {
        const result = await getBreeds();
        setDogList(result);
    };

    React.useEffect(() => {
        fetchBreeds();
    }, []);

    return (
        <DogListView dogList={dogList} />
    )
}

export default DogList;
