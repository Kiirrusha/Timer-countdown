export const calculatePercent = (
  startSeconds: number,
  currentSeconds: number,
) => {
  let remainingSeconds = startSeconds - currentSeconds;
  let percentSecondsRemaining = (remainingSeconds / startSeconds) * 100;
  let percentResult = 100 - percentSecondsRemaining;
  return Math.round(percentResult);
};
