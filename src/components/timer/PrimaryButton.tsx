import { Button } from "@mui/material";

interface Props {
  isRun: boolean;
  isPaused: boolean;
  onStart: VoidFunction;
  onPause: VoidFunction;
  onContinue: VoidFunction;
}

export const PrimaryButton = ({
  isRun,
  isPaused,
  onStart,
  onPause,
  onContinue,
}: Props) => {
  const startButton = (
    <Button onClick={onStart} variant="contained">
      START
    </Button>
  );

  const pauseButton = (
    <Button onClick={onPause} variant="contained" color="warning">
      PAUSE
    </Button>
  );

  const continueButton = (
    <Button onClick={onContinue} variant="contained" >
      CONTINUE
    </Button>
  );

  if (!isRun) return startButton;
  if (isPaused) return continueButton;

  return pauseButton;
};
