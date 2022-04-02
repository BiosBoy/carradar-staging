const calcTimeStamp = (timestamp: number) => {
  const date = new Date(timestamp);

  const minutes = date.getMinutes() < 10 ? `0${date.getMinutes()}` : date.getMinutes();
  const hour = date.getHours() < 10 ? `0${date.getHours()}` : date.getHours();

  return `${hour}:${minutes}`;
};

export default calcTimeStamp;
