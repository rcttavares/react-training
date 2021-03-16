import React, { useState } from 'react';
import DogListView from './DogListView';
import { getDogList } from '../../services/DogListService';
import { keys } from 'lodash';

function DogList() {
    const [dogList, setDogList] = useState<string[]>([]);

    const fetchDogs = async () => {
        const result = await getDogList();
        setDogList(keys(result));
    };

    React.useEffect(() => {
        fetchDogs();
    }, []);

    return (
        <DogListView dogList={dogList} />
    )
}

export default DogList;
