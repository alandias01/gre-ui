export const TaskDelay = (timeToDelay: number) =>
  new Promise((res, rej) => setTimeout(res, timeToDelay));
