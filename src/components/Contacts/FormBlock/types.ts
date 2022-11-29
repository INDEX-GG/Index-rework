export type InputStateType = {
  text: string;
  isDirty: boolean;
  error: string;
};

export type FormStateType = {
  isValid: boolean;
  result: string;
  error: string;
  hideStyle: { [key: string]: string; opacity: string };
};
