import { getDogList } from './DogListService';

describe('DogListService', () => {
  it('should return a breed list with success', async () => {
    const mockJsonPromise = Promise.resolve({ message: 'breeds' });
    const mockFetchPromise = Promise.resolve({
      json: () => mockJsonPromise
    });

    jest.spyOn(global, 'fetch').mockImplementation(() => mockFetchPromise);
    const result = await getDogList();
    expect(global.fetch).toBeCalledTimes(1);
    expect(result).toEqual('breeds');
    expect(global.fetch).toHaveBeenCalledWith('https://dog.ceo/api/breeds/list/all')
  });

  it('should return a breed list with error', async () => {
    
  });
});
