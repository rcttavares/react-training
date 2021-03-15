/* eslint-disable jest/no-conditional-expect */
import { getDogList } from './DogListService';

describe('DogListService', () => {
  const mock = jest.spyOn(global, 'fetch');

  it('should return a breed list with success', async () => {
    const mockJsonPromise = Promise.resolve({ message: 'breeds' });
    mock.mockImplementation(() => Promise.resolve( {json: () => mockJsonPromise} ));
    
    const result = await getDogList();
    expect(global.fetch).toBeCalledTimes(1);
    expect(result).toEqual('breeds');
    expect(global.fetch).toHaveBeenCalledWith('https://dog.ceo/api/breeds/list/all');
  });

  it('should return a breed list with error', async () => {
    mock.mockImplementation(() => Promise.reject( new Error('error') ));

    try {
      await getDogList()
    } catch {
      await expect(global.fetch).rejects.toThrow('error');
    }
  });
});
