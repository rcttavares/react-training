import { IBeerFormik } from "../../types/Types";

export interface CreateBeerFormikFormProps {
  initialValues: IBeerFormik;
  onSubmit: (values: IBeerFormik, { resetForm }: any) => void;
}
