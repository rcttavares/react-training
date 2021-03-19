import { getBreeds } from './DogListService';

describe('DogListService', () => {
  const mock = jest.spyOn(global, 'fetch');

  it('should return a breed list with success', async () => {
    const mockJsonPromise = Promise.resolve({ message: 'breeds' });
    mock.mockImplementation(() => Promise.resolve( {json: () => mockJsonPromise} ));
    
    const result = await getBreeds();
    expect(global.fetch).toBeCalledTimes(1);
    expect(result).toEqual('breeds');
    expect(global.fetch).toHaveBeenCalledWith('https://dog.ceo/api/breeds/list/all');
  });

  it('should return a breed list with error', async () => {
    mock.mockImplementation(() => Promise.reject( new Error('error') ));
    await expect(global.fetch).rejects.toThrow('error');
  });
});
