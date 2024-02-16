import { Button } from "@mui/material";

interface Props {
  isRun: boolean;
  onStop: VoidFunction;
}

export const SecondaryButton = ({ isRun, onStop }: Props) => {
  const stopButton = (
    <Button onClick={onStop} variant="contained" color="error">
      STOP
    </Button>
  );

  const disabledButton = (
    <Button variant="outlined" disabled color="primary">
      STOP
    </Button>
  );

  return isRun ? stopButton : disabledButton;
};
