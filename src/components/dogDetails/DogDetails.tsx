import { useCallback } from "react";
import { useSnackbar } from "notistack";
import DogDetailsView from "./DogDetailsView";

interface Props {
  name: string;
  image: string;
  onScold: () => void;
  disabled: boolean;
}

function DogDetails({ name, image, onScold, disabled }: Props) {
  const { enqueueSnackbar } = useSnackbar();

  const handleBark = useCallback(() => {
    enqueueSnackbar("Woof! Woof!", {
      anchorOrigin: {
        vertical: "top",
        horizontal: "center",
      },
    });
  }, [enqueueSnackbar]);

  return (
    <DogDetailsView
      name={name}
      image={image}
      onScold={onScold}
      onBark={handleBark}
      disabled={disabled}
    />
  );
}

export default DogDetails;
