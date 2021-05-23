import { getBreed } from './DogBreedService';
import { getImage } from '../dogImage/DogImageService';

describe('DogBreedService', () => {
  const mock = jest.spyOn(global, 'fetch');

  it('should return a list of breeds with success', async () => {
    const mockJsonPromise = Promise.resolve({ message: [], status: 'success' });
    mock.mockImplementation(() => Promise.resolve({ json: () => mockJsonPromise }));
    
    const result = await getBreed();
    expect(result).toEqual([]);
    expect(global.fetch).toBeCalledTimes(1);
    expect(global.fetch).toHaveBeenCalledWith('https://dog.ceo/api/breeds/list/all');
  });

  it('should return a list of breeds with an error', async () => {
    const mockJsonPromise = Promise.resolve({ message: [], status: 'error' });
    mock.mockImplementation(() => Promise.resolve({ json: () => mockJsonPromise }));

    await expect(() => {
      return getBreed();
    }).rejects.toThrow();
  });

  it('should return an object with the name and image', async () => {
    const dogBreeds = [{ name: 'bulldog', image: 'url' }];
    const mockJsonPromise = Promise.resolve({ message: 'breeds', status: 'success' });
    mock.mockImplementation(() => Promise.resolve({ json: () => mockJsonPromise }));
    
    await getBreed();
    dogBreeds.map(async (breedName) => {
      const image = await getImage(breedName)
      expect(image).toEqual('breeds');
      expect(global.fetch).toBeCalledTimes(8);
      expect(global.fetch).toHaveBeenCalledWith(`https://dog.ceo/api/breed/${breedName}/images/random`);
    })
  });
});
