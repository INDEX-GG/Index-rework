import { StatePageType } from "layout/types";

export interface IHeaderProps {
  statePage: StatePageType;
  setStatePage: React.Dispatch<React.SetStateAction<StatePageType>>;
}

export type SliderObjType = {
  id: number;
  pathRu: string;
};
