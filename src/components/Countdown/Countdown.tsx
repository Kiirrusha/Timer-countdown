import { InputSlider } from "./InputSlider";
import { VisualProgress } from "./VisualProgress";
import { Card, Container, Stack, Typography } from "@mui/material";
import { PrimaryButton } from "../timer/PrimaryButton";
import { SecondaryButton } from "../timer/SecondaryButton";
import { useTimer } from "../../hooks/useTimer";
import { Item, Points } from "../timer/Item";

export const Countdown = () => {
  const { methods, getters } = useTimer();
  const { updateTime, startCountdown, pause, resume, stop } = methods;
  const { times, isDisabled, isRun, isPaused } = getters;

  return (
    <Container>
      <Stack
        sx={{ height: "90vh" }}
        spacing={5}
        justifyContent="center"
        alignItems={"center"}
      >
        <Typography variant="h1" textAlign={"center"}>
          Countdown
        </Typography>
        <Card
          sx={{
            width: 130,
            display: "flex",
            justifyContent: "center",
            backgroundColor: "#514644",
          }}
        >
          <Stack direction="row" spacing={2}>
            <Item>{times.minutes}</Item>
            <Points>:</Points>
            <Item>{times.seconds}</Item>
          </Stack>
        </Card>
        <InputSlider
          value={times.minutes}
          updateTime={updateTime("minutes")}
          isDisabled={isDisabled}
          step={15}
          inputMax={720}
        />
        <InputSlider
          value={times.seconds}
          updateTime={updateTime("seconds")}
          isDisabled={isDisabled}
          step={1}
          inputMax={60}
        />
        <Stack direction="row" justifyContent="center" spacing={1}>
          <PrimaryButton
            isRun={isRun}
            isPaused={isPaused}
            onStart={startCountdown}
            onPause={pause}
            onContinue={resume}
          />
          <SecondaryButton isRun={isRun} onStop={stop} />
        </Stack>
        <Stack>
          <VisualProgress times={times} isRun={isRun}></VisualProgress>
        </Stack>
      </Stack>
    </Container>
  );
};
