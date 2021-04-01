import { getBreeds, getImages } from './DogListService';

describe('DogListService', () => {
  const mock = jest.spyOn(global, 'fetch');

  it('should return a list of breeds with success', async () => {
    const mockJsonPromise = Promise.resolve({ message: [], status: 'success' });
    mock.mockImplementation(() => Promise.resolve({ json: () => mockJsonPromise }));
    
    const result = await getBreeds();
    expect(result).toEqual([]);
    expect(global.fetch).toBeCalledTimes(1);
    expect(global.fetch).toHaveBeenCalledWith('https://dog.ceo/api/breeds/list/all');
  });

  it('should return a list of breeds with an error', async () => {
    const mockJsonPromise = Promise.resolve({ message: [], status: 'error' });
    mock.mockImplementation(() => Promise.resolve({ json: () => mockJsonPromise }));

    await expect(() => {
      return getBreeds();
    }).rejects.toThrow();
  });

  it('should return an image with sucess', async () => {
    const mockJsonPromise = Promise.resolve({ message: [], status: 'success' });
    mock.mockImplementation(() => Promise.resolve({ json: () => mockJsonPromise }));

    const breedName = 'pug';
    const result = await getImages(breedName);
    expect(result).toEqual([]);
    expect(global.fetch).toBeCalledTimes(1);
    expect(global.fetch).toHaveBeenCalledWith(`https://dog.ceo/api/breed/${breedName}/images/random`);
  });

  it('should return an image with an error', async () => {
    const mockJsonPromise = Promise.resolve({ message: [], status: 'error' });
    mock.mockImplementation(() => Promise.resolve({ json: () => mockJsonPromise }));

    const breedName = 'pug';
    await expect(() => {
      return getImages(breedName);
    }).rejects.toThrow();
  });

  it('should return an object with the name and image', async () => {
    const mockBreeds = [{ name: 'pug', image: 'url' }];
    const mockJsonPromise = Promise.resolve({ message: 'breeds', status: 'success' });
    mock.mockImplementation(() => Promise.resolve({ json: () => mockJsonPromise }));
    
    await getBreeds();
    mockBreeds.map(async (breed) => {
      const breedName = breed.name;
      const image = await getImages(breedName);
      expect(image).toEqual('breeds');
      expect(global.fetch).toBeCalledTimes(8);
      expect(global.fetch).toHaveBeenCalledWith(`https://dog.ceo/api/breed/${breedName}/images/random`);
      return {
        name: breed.name,
        image: image
      };
    })
  });
});
