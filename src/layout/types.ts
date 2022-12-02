import { ReactNode } from "react";

export interface IMainLayoutProps {
  children: ReactNode;
}

export type StatePageType = {
  isLoading: boolean;
  page: number;
};
