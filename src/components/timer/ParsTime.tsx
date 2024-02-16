
export const ParsTime = (number: any) => {

  const milliseconds = number;
  const seconds = Math.floor((milliseconds / 1000) % 60);
  const minutes = Math.floor((milliseconds / 1000 / 60) % 60);
//const hours = Math.floor((milliseconds / 1000 / 60 / 60) % 24);

return [
    minutes.toString().padStart(2, "0"),
    seconds.toString().padStart(2, "0"),
    milliseconds.toString().padStart(2, "0")
].join(":");


  return <div>Contained</div>;
};
