import { Card, Typography, Container, Stack } from "@mui/material";
import { useState } from "react";
import { PrimaryButton } from "./PrimaryButton";
import { SecondaryButton } from "./SecondaryButton";
import { Item, Points } from "./Item";

export const Timer = () => {
  const [time, setTime] = useState({ minutes: 0, seconds: 0, milliseconds: 0 });
  const [intervalId, setIntervalId] = useState<undefined | number>();
  const [isRun, setIsRun] = useState(false);
  const [isPaused, setIsPaused] = useState(true);

  const startInterval = () => {
    setIntervalId(
      setInterval(
        () =>
          setTime((time) => {
            let minutes = time.minutes;
            let seconds = time.seconds;
            let milliseconds = time.milliseconds + 1;

            if (milliseconds === 100) {
              seconds += 1;
              milliseconds = 0;
            }
            if (seconds === 60) {
              minutes += 1;
              seconds = 0;
            }
            return {
              minutes: minutes,
              seconds: seconds,
              milliseconds: milliseconds,
            };
          }),
        10,
      ),
    );
  };

  const startTimer = () => {
    if (isRun) return;
    setIsRun(true);
    setIsPaused(false);

    startInterval();
  };

  const continueTimer = () => {
    if (!isPaused) return;

    setIsPaused(false);
    startInterval();
  };

  const stopTimer = () => {
    clearInterval(intervalId);
    setIsRun(false);
    setIntervalId(undefined);
    setTime(() => ({ minutes: 0, seconds: 0, milliseconds: 0 }));
  };

  const pauseTimer = () => {
    clearInterval(intervalId);
    setIntervalId(undefined);
    setIsPaused(true);
  };

  return (
    <Container maxWidth="sm">
      <Stack
        sx={{ height: "70vh" }}
        spacing={5}
        justifyContent="center"
        alignItems={"center"}
      >
        <Typography variant="h1" textAlign={"center"}>
          Timer
        </Typography>
        <Card
          sx={{
            width: 200,
            display: "flex",
            justifyContent: "center",
            backgroundColor: "#514644",
          }}
        >
          <Stack direction="row" spacing={2}>
            <Item>{time.minutes}</Item>
            <Points>:</Points>
            <Item>{time.seconds}</Item>
            <Points>:</Points>
            <Item>{time.milliseconds}</Item>
          </Stack>
        </Card>
        <Stack direction="row" justifyContent="center" spacing={1}>
          <PrimaryButton
            isRun={isRun}
            isPaused={isPaused}
            onStart={startTimer}
            onPause={pauseTimer}
            onContinue={continueTimer}
          />
          <SecondaryButton isRun={isRun} onStop={stopTimer} />
        </Stack>
      </Stack>
    </Container>
  );
};
