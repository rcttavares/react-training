import { Dog } from '../components/dogList/DogList.types';

const API = 'https://dog.ceo/api';

export async function getDogList(): Promise<Dog[]> {
    try {
        const url = `${API}/breeds/list/all`;
        const response = await fetch(url);
        const { message: breeds } = await response.json();
        return breeds;
    } catch (error) {
        throw new Error(error);
    }
};
