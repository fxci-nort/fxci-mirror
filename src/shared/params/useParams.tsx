import { useContext } from 'react';
import { ParamsContext, ParamsContextType } from './paramsContext';

export const useParams = (): ParamsContextType => {
  const context = useContext(ParamsContext);
  if (context === undefined) {
    throw new Error('useParams must be used within a ParamsProvider');
  }
  return context;
};
