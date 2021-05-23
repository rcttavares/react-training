import { IDog } from "../../types/Types";
import { getImage } from "../dogImage/DogImageService";

export async function getBreed(): Promise<IDog[]> {
  const API = "https://dog.ceo/api";

  return fetch(`${API}/breeds/list/all`)
    .then((response) => response.json())
    .then(async (data) => {
      if (data.status !== "success")
        throw new Error("Não foi possível listar as raças de cachorro.");
      const response = data.message;
      const dogBreeds = Object.keys(response);
      const dogBreedList = await Promise.all(
        dogBreeds.map(async (breedName) => {
          const image = await getImage(breedName);

          return {
            name: breedName,
            image: image,
            scolded: 0,
          } as IDog;
        })
      );

      return dogBreedList;
    });
}
