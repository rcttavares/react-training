import { ChangeEvent, FormEvent } from "react";

export interface CreateBeerFormProps {
  beerName: string;
  beerType: string;
  hasCorn: boolean;
  ingredients: string;
  onChangeInput: (event: ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => void;
  onChangeCheckbox: (event: ChangeEvent<HTMLInputElement>) => void;
  onSubmit: (event: FormEvent) => void;
}
