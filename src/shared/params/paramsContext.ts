import { createContext } from 'react';

export interface ParamsContextType {
  params: Record<string, string | undefined>;
  addParamsToUrl: (url: string) => string;
}

export const ParamsContext = createContext<ParamsContextType | undefined>(undefined);
