import { Stack, Typography } from "@mui/material";
import Switc from "@mui/material/Switch";
import { useState } from "react";

export const Switch = ({ onChange }: any) => {
  const [state, setState] = useState("Timer");

  const current = () => {
    if (state === "Timer") {
      onChange("Countdown");
      setState("Countdown");
      return;
    }
    onChange("Timer");
    setState("Timer");
  };

  return (
    <Stack direction="row" alignItems="center" justifyContent={"center"}>
      <Typography>Timer</Typography>
      <Switc color="default" onChange={current} />
      <Typography>Countdown</Typography>
    </Stack>
  );
};
