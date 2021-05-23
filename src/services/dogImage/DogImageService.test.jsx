import { getImage } from './DogImageService';

describe('DogImageService', () => {
  const mock = jest.spyOn(global, 'fetch');

  it('should return an image with success', async () => {
    const mockJsonPromise = Promise.resolve({ message: [], status: 'success' });
    mock.mockImplementation(() => Promise.resolve({ json: () => mockJsonPromise }));

    const breedName = 'bulldog';
    const result = await getImage(breedName);
    expect(result).toEqual([]);
    expect(global.fetch).toBeCalledTimes(1);
    expect(global.fetch).toHaveBeenCalledWith(`https://dog.ceo/api/breed/${breedName}/images/random`);
  });

  it('should return an image with an error', async () => {
    const mockJsonPromise = Promise.resolve({ message: [], status: 'error' });
    mock.mockImplementation(() => Promise.resolve({ json: () => mockJsonPromise }));

    await expect(() => {
      return getImage();
    }).rejects.toThrow();
  });
});
