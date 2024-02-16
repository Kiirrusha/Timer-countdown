import { Input, Slider, Stack } from "@mui/material";
import React from "react";

interface Props {
  value: number;
  updateTime: (value: number) => void;
  isDisabled: boolean;
  step: 1 | 15;
  inputMax: 720 | 60;
}

export const InputSlider = ({
  value,
  updateTime,
  isDisabled,
  step,
  inputMax,
}: Props) => {
  const handleSliderChange = (_: Event, value: number | number[]) => {
    updateTime(value as number);
  };

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const inputValue = Number(event.target.value);

    updateTime(inputValue);
  };

  const handleBlur = () => {
    if (value < 0) {
      updateTime(0);
    } else if (value > inputMax) {
      updateTime(inputMax);
    }
  };

  return (
    <Stack flexDirection={"row"} gap={2}>
      <Slider
        sx={{ width: "50vw" }}
        value={value}
        valueLabelDisplay="auto"
        onChange={handleSliderChange}
        color="primary"
        disabled={isDisabled}
        step={step}
        max={60}
      />
      <Input
        value={value}
        size="small"
        onChange={handleInputChange}
        onBlur={handleBlur}
        disabled={isDisabled}
        inputProps={{
          step: 1,
          min: 0,
          max: 60,
          type: "number",
        }}
      />
    </Stack>
  );
};
