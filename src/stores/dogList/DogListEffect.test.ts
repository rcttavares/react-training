import { getBreed } from "../../services/dogBreed/DogBreedService";
import { DogListEffect } from "./DogListEffect";

jest.mock("../../services/dogBreed/DogBreedService.ts");

describe("DogListEffect", () => {
  const dogListMock = [
    {
      name: "affenpinscher",
      image: "image url",
      scolded: 0,
    },
    {
      name: "basenji",
      image: "image url",
      scolded: 1,
    },
  ];

  it("should handle response of api", async () => {
    (getBreed as jest.Mock).mockResolvedValue(dogListMock);

    const response = await DogListEffect();
    expect(response).toEqual(undefined);
  });
});
