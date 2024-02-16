import { Box, CircularProgress, Typography } from "@mui/material";
import { useEffect, useState } from "react";
import { ITime } from "../../types/types";
import { convertTimesToSeconds } from "../../helpers/convertTimesToSeconds";
import { calculatePercent } from "../../helpers/calculatePercent";

interface Props {
  times: ITime;
  isRun: boolean;
}

export const VisualProgress = (props: Props) => {
  const { times, isRun } = props;
  const [timesStarted, setTimesStarted] = useState<null | ITime>(null);
  const [progress, setProgress] = useState(100);

  useEffect(() => {
    if (!isRun) {
      return setTimesStarted(null);
    }
    setTimesStarted(times);
  }, [isRun]);

  useEffect(() => {
    if (!timesStarted) return;
    let startSeconds = convertTimesToSeconds(timesStarted);
    let currentSeconds = convertTimesToSeconds(times);
    setProgress(calculatePercent(startSeconds, currentSeconds));
  }, [times, isRun]);

  return (
    <>
      <Box sx={{ position: "relative", display: "inline-flex" }}>
        <CircularProgress variant="determinate" value={progress} size={150} />
        <Box
          sx={{
            top: 0,
            left: 0,
            bottom: 0,
            right: 0,
            position: "absolute",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <Typography
            variant="h5"
            component="div"
            color="text.secondary"
          >{`${progress}%`}</Typography>
        </Box>
      </Box>
    </>
  );
};
