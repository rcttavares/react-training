import { Dog } from '../types/DogListType';

const API = 'https://dog.ceo/api';

export async function getBreeds(): Promise<Dog[]> {
    return fetch(`${API}/breeds/list/all`)
    .then(response => response.json())
    .then(async data => {
        if (data.status !== 'success')
            throw new Error('Não foi possível listar as raças de cachorro.');
        const response = data.message;
        const dogBreeds = Object.keys(response);

        const dogBreedList = await Promise.all(
            dogBreeds.map(async breed => {
                const image = await getImages(breed);
                return {
                    name: breed,
                    image
                } as Dog
            })
        );

        return dogBreedList;
    });
};

export async function getImages(breed: string): Promise<string> {
    return fetch(`${API}/breed/${breed}/images/random`)
    .then(response => response.json())
    .then(data => {
        if (data.status !== 'success')
            throw new Error('Não foi possível recuperar a imagem dessa raça.');
        return data.message;
    });
};
