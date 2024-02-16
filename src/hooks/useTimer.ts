import { useState } from "react";
import { ITime } from "../types/types";

export const useTimer = () => {
  const [times, setTimes] = useState<ITime>({
    hours: 0,
    minutes: 0,
    seconds: 0,
  });
  const [intervalId, setIntervalId] = useState<undefined | number>();
  const [isRun, setIsRun] = useState(false);
  const [isPaused, setIsPaused] = useState(true);
  const [isDisabled, setIsDisabled] = useState(false);

  const updateTime = (timeKey: keyof ITime) => {
    return (value: number) => {
      setTimes({ ...times, [timeKey]: value });
    };
  };

  const startInterval = () => {
    setIntervalId(
      setInterval(() => {
        setTimes((times) => {
          let hours = times.hours;
          let minutes = times.minutes;
          let seconds = times.seconds - 1;

          if (seconds <= 0 && minutes > 0) {
            minutes -= 1;
            seconds = 60;
          }
          return {
            minutes: minutes,
            seconds: seconds,
            hours: hours,
          };
        });
      }, 1000),
    );
  };

  const startCountdown: any = () => {
    if (isRun) return;
    setIsRun(true);
    setIsPaused(false);
    setIsDisabled(true);
    startInterval();
  };

  const resume = () => {
    if (!isPaused) return;

    setIsPaused(false);
    startInterval();
  };

  const pause = () => {
    clearInterval(intervalId);
    setIntervalId(undefined);
    setIsPaused(true);
  };

  const stop = () => {
    clearInterval(intervalId);
    setIsRun(false);
    setIntervalId(undefined);
    setIsDisabled(false);
    setTimes(() => ({ hours: 0, minutes: 0, seconds: 0 }));
  };

  

  if (isRun && times.seconds === 0 && times.minutes === 0) {
    stop();
  }

  return {
    methods: { updateTime, startCountdown, resume, pause, stop },
    getters: {times, isRun, isPaused, isDisabled}
  };
};
