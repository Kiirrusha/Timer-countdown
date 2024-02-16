import { ITime } from "../types/types";

export const convertTimesToSeconds = (times: ITime) => {
  const { seconds, minutes, hours } = times;

  let resultSecodns = 0;

  resultSecodns += seconds;

  resultSecodns += minutes * 60;

  resultSecodns += hours * 3600;

  return resultSecodns;
};
