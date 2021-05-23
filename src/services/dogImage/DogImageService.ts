export async function getImage(breedName: string): Promise<string> {
  const API = "https://dog.ceo/api";

  return fetch(`${API}/breed/${breedName}/images/random`)
    .then((response) => response.json())
    .then((data) => {
      if (data.status !== "success")
        throw new Error("Não foi possível recuperar a imagem dessa raça.");
      return data.message;
    });
}
